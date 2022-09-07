import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import bindAll from 'lodash.bindall';
import { connect } from 'react-redux';
import { closeGithubModal } from '../reducers/modals';
import GithubModalComponent from '../components/tw-github-modal/github-modal.jsx';
// import downloadBlob from '../lib/download-blob';
class UsernameModal extends React.Component {
    constructor(props) {
        super(props);
        bindAll(this, [
            'handleSignInWithGithub'
        ]);
    }

    mapStateToProps = state => ({
        fileHandle: state.scratchGui.tw.fileHandle,
        saveProjectSb3: state.scratchGui.vm.saveProjectSb3.bind(state.scratchGui.vm),
        canSaveProject: true,
        projectFilename: 'hello.sb3'
    });

    getProjectBlob() {
        return this.props.saveProjectSb3();
    }

    commitProjectFile(reference, token, username, repoName) {
        console.log('Running Reference Handler');

        // Get Commit HEAD
        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const _commitHead = fetch(reference.object.url, requestOptions).then(res => {
            if (res.status >= 400) {
                alert(`Error occured while retrieving Head Commit ${res.error.message}`);
            } else {
                console.log(res);
                const treeSha = res.tree.sha;
                this.getProjectBlob().then(content => {
                    console.log('Got Blob Content', content);

                    // Upload Blob
                    const blob = content;

                    const reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = function () {
                        const base64String = reader.result;
                        console.log('Base64 String - ', base64String);

                        console.log('Base64 String without Tags- ',
                            base64String.substr(base64String.indexOf(', ') + 1));

                        const base64content = base64String.substr(base64String.indexOf(', ') + 1);

                        let raw = JSON.stringify({
                            content: base64content,
                            encoding: 'utf-8|base64'
                        });

                        requestOptions = {
                            method: 'POST',
                            headers: myHeaders,
                            body: raw,
                            redirect: 'follow'
                        };

                        fetch(`https://api.github.com/repos/${username}/${repoName}/git/blobs`, requestOptions)
                            .then(response => response.json())
                            .then(result => {
                                if (result.status >= 400) {
                                    alert(`An Error Occurred While uploading Project Blob ${result.error.message}`);
                                } else {
                                    console.log(result);
                                    const blobSha = result.sha;
                                    // Get Tree
                                    requestOptions = {
                                        method: 'GET',
                                        headers: myHeaders,
                                        redirect: 'follow'
                                    };

                                    fetch(`https://api.github.com/repos/${username}/${repoName}/git/trees/${treeSha}}`, requestOptions)
                                        .then(response => response.json())
                                        .then(treeResult => {
                                            if (treeResult.status >= 400) {
                                                alert(`An error occurred while Getting Tree ${treeResult.error.msg}`);
                                            } else {
                                                const basetree_sha = treeResult.tree[0].sha;
                                                raw = JSON.stringify({
                                                    base_tree: basetree_sha,
                                                    tree: [
                                                        {
                                                            path: 'project.sb3',
                                                            mode: '100644',
                                                            type: 'blob',
                                                            sha: blobSha
                                                        }
                                                    ]
                                                });

                                                requestOptions = {
                                                    method: 'POST',
                                                    headers: myHeaders,
                                                    body: raw,
                                                    redirect: 'follow'
                                                };

                                                fetch(`https://api.github.com/repos/${username}/${repoName}/git/trees`, requestOptions)
                                                    .then(response => response.text())
                                                    .then(createdTree => console.log(createdTree))
                                                    .catch(error => console.log('error', error));
                                            }
                                        });
                                }
                            });
                    };
                });
            }
        });
    }

    handleSignInWithGithub() {

        const personalAccessToken = document.getElementById('githubTokenInput').value;
        const username = document.getElementById('githubUsername').value;
        const password = document.getElementById('githubPasswordInput').value;
        const repoName = document.getElementById('githubRepoName').value;

        // console.log('Hello!', document.getElementById('githubModalPasswordInput').value);
        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${personalAccessToken}`);

        // let requestOptions = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // };

        // fetch('https://api.github.com/user', requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://api.github.com/repos/${username}/${repoName}/git/ref/heads/master`, requestOptions).then(res => {
            if (res.status >= 400) {
                if (res.status === 404) {
                    myHeaders = new Headers();
                    myHeaders.append('user', `${username}:${password}`);
                    // console.log(myHeaders);
                    myHeaders.append('Authorization', `Bearer ${repoName}`);
                    // console.log(myHeaders);
                    myHeaders.append('Content-Type', 'application/json');

                    const raw = JSON.stringify({
                        name: `${repoName}`,
                        auto_init: true
                    });

                    requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                    };

                    fetch('https://api.github.com/user/repos', requestOptions)
                        .then(response => {
                            if (res.status >= 400) {
                                throw new Error(`Repository Creation Failed. Error while attempting to create new repository. ${res.message}`);
                            } else {
                                console.log(response.text());
                                myHeaders = new Headers();
                                myHeaders.append('Authorization', `Bearer ${personalAccessToken}`);
                                requestOptions = {
                                    method: 'GET',
                                    headers: myHeaders,
                                    redirect: 'follow'
                                };
                                fetch(`https://api.github.com/repos/${username}/${repoName}/git/ref/heads/master`, requestOptions).then(reference => {
                                    if (reference.status >= 400) {
                                        throw new Error(`Could not access newly created repository. ${reference.message}`);
                                    } else {
                                        console.log('Starting Reference Handler');
                                        this.commitProjectFile(reference, personalAccessToken, username, repoName);
                                    }
                                });
                            }
                        });
                } else if (res.status === 401) {
                    throw new Error(`Failed to load project. Check your Personal Access Token and try again.`);
                } else {
                    throw new Error(`Failed to load project: ${res.message}`);
                }
            }
            return res.json();
        })
            .then(reference => {
                console.log(reference);
                console.log('Starting Reference Handler');
                this.commitProjectFile(reference, personalAccessToken, username, repoName);
            },
                err => {
                    alert(`${err}`);
                });
    }
    render() {
        const {
            /* eslint-disable no-unused-vars */
            onClose,
            vm,
            /* eslint-enable no-unused-vars */
            ...props
        } = this.props;
        return (
            <GithubModalComponent
                onClose={this.props.onClose}
                onSignInWithGithub={this.handleSignInWithGithub}
                {...props}
            />
        );
    }
}

UsernameModal.propTypes = {
    intl: intlShape,
    onClose: PropTypes.func,
    vm: PropTypes.shape({

    }),
    saveProjectSb3: PropTypes.func
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm,
    saveProjectSb3: state.scratchGui.vm.saveProjectSb3.bind(state.scratchGui.vm)
});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(closeGithubModal())
});

export default injectIntl(connect(
    mapStateToProps,
    mapDispatchToProps
)(UsernameModal));
