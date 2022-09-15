import PropTypes from 'prop-types';
import React from 'react';
import {injectIntl, intlShape} from 'react-intl';
import bindAll from 'lodash.bindall';
import {connect} from 'react-redux';
import {closeGithubModal} from '../reducers/modals';
import GithubModalComponent from '../components/tw-github-modal/github-modal.jsx';
// import downloadBlob from '../lib/download-blob';
class UsernameModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleSignInWithGithub',
            'handleStoreProjectOptions'
        ]);
    }

    mapStateToProps = state => ({
        fileHandle: state.scratchGui.tw.fileHandle,
        saveProjectSb3: state.scratchGui.vm.saveProjectSb3.bind(state.scratchGui.vm),
        canSaveProject: true,
        projectFilename: 'hello.sb3'
    });

    getProjectBlob () {
        return this.props.saveProjectSb3();
    }

    commitProjectFile (reference, token, username, repoName) {
        console.log('Running Reference Handler');

        // Get Commit HEAD
        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            credentials: 'omit',
            redirect: 'follow'
        };

        fetch(reference.object.url, requestOptions)
            .then(response => response.json())
            .then(res => {
                if (res.status >= 400) {
                    throw new Error(`Error occured while retrieving Head Commit ${res.error.message}`);
                    // alert(`Error occured while retrieving Head Commit ${res.error.message}`);
                } else {
                    console.log(res);
                    const parentCommitSha = res.sha;
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
                                base64String.substr(base64String.indexOf(',') + 1));

                            const base64content = base64String.substr(base64String.indexOf(',') + 1);

                            let raw = JSON.stringify({
                                content: base64content,
                                encoding: 'base64'
                            });

                            requestOptions = {
                                method: 'POST',
                                headers: myHeaders,
                                body: raw,
                                redirect: 'follow',
                                credentials: 'omit'

                            };

                            fetch(`https://api.github.com/repos/${username}/${repoName}/git/blobs`, requestOptions)
                                .then(response => response.json())
                                .then(result => {
                                    if (result.status >= 400) {
                                        throw new Error(`An Error Occurred While uploading Project Blob ${result.error.message}`);
                                        // alert(`An Error Occurred While uploading Project Blob ${result.error.message}`);
                                    } else {
                                        console.log("Project Blob", result);
                                        const blobSha = result.sha;
                                        // Get Tree
                                        requestOptions = {
                                            method: 'GET',
                                            headers: myHeaders,
                                            redirect: 'follow',
                                            credentials: 'omit'
                                        };

                                        fetch(`https://api.github.com/repos/${username}/${repoName}/git/trees/${treeSha}`, requestOptions)
                                            .then(response => response.json())
                                            .then(treeResult => {
                                                if (treeResult.status >= 400) {
                                                    throw new Error(`An error occurred while Getting Tree ${treeResult.error.msg}`);
                                                } else {
                                                    // Create Tree
                                                    const commitSha = treeResult.sha;
                                                    console.log(`commitSha${commitSha}`);
                                                    raw = JSON.stringify({
                                                        base_tree: treeSha,
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
                                                        redirect: 'follow',
                                                        credentials: 'omit'
                                                    };

                                                    fetch(`https://api.github.com/repos/${username}/${repoName}/git/trees`, requestOptions)
                                                        .then(response => response.text())
                                                        .then(createdTree => {
                                                            if (createdTree.status >= 400) {
                                                                throw new Error('Error occured while creating Tree.');
                                                                // alert();
                                                            } else {
                                                                // Commit Tree
                                                                console.log(createdTree);
                                                                raw = JSON.stringify({
                                                                    message: 'Update Project',
                                                                    parents: [
                                                                        parentCommitSha
                                                                    ],
                                                                    tree: commitSha
                                                                });
                                                                console.log(raw);

                                                                requestOptions = {
                                                                    method: 'POST',
                                                                    headers: myHeaders,
                                                                    body: raw,
                                                                    redirect: 'follow',
                                                                    credentiala: 'omit'
                                                                };

                                                                fetch(`https://api.github.com/repos/${username}/${repoName}/git/commits`, requestOptions)
                                                                    .then(response => response.json())
                                                                    .then(commitObject => {
                                                                        if (commitObject.status >= 400) {
                                                                            throw new Error(`Error occured while making commit of tree ${commitObject.error.message}`);
                                                                            // alert('Error occured while commiting tree');
                                                                        }
                                                                        const newCommitSha = commitObject.sha;
                                                                        console.log(commitObject);
                                                                        // Update HEAD
                                                                        raw = JSON.stringify({
                                                                            sha: newCommitSha
                                                                        });

                                                                        requestOptions = {
                                                                            method: 'PATCH',
                                                                            headers: myHeaders,
                                                                            body: raw,
                                                                            redirect: 'follow',
                                                                            credentials: 'omit'
                                                                        };

                                                                        fetch(`https://api.github.com/repos/${username}/${repoName}/git/refs/heads/master`, requestOptions)
                                                                            .then(response => response.text())
                                                                            .then(updateHeadObject => {
                                                                                console.log(updateHeadObject);
                                                                                console.log("Setting Github Enabled to VM");
                                                                                this.vm.setGithubEnabled(true);
                                                                            });
                                                                    });
                                                            }
                                                        });
                                                }
                                            });
                                    }
                                });
                        };
                    });
                }
            },
            err => {
                // eslint-disable-next-line no-alert
                alert(`${err}`);
            });
    }

    handleSignInWithGithub () {

        const personalAccessToken = document.getElementById('githubTokenInput').value;
        const username = document.getElementById('githubUsername').value;
        const password = document.getElementById('githubPasswordInput').value;
        const repoName = document.getElementById('githubRepoName').value;

        console.log('accessToken', personalAccessToken);

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
            redirect: 'follow',
            credentials: 'omit'
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
                        redirect: 'follow',
                        credentials: 'omit'
                    };

                    fetch('https://api.github.com/user/repos', requestOptions)
                        .then(response => {
                            if (response.status >= 400) {
                                throw new Error(`Repository Creation Failed. Error while attempting to create new repository. ${res.message}`);
                            } else {
                                console.log(response.text());
                                myHeaders = new Headers();
                                myHeaders.append('Authorization', `Bearer ${personalAccessToken}`);
                                requestOptions = {
                                    method: 'GET',
                                    headers: myHeaders,
                                    redirect: 'follow',
                                    credentials: 'omit'
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
                // eslint-disable-next-line no-alert
                alert(`${err}`);
            });
    }
    handleStoreProjectOptions () {
        this.props.vm.storeProjectOptions();
    }
    render () {
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
        setGithubEnabled: PropTypes.func,
        storeProjectOptions: PropTypes.func
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
