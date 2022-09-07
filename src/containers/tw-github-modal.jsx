import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import bindAll from 'lodash.bindall';
import { connect } from 'react-redux';
import { closeGithubModal } from '../reducers/modals';
import GithubModalComponent from '../components/tw-github-modal/github-modal.jsx';
import downloadBlob from '../lib/download-blob';
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

    downloadProject() {
        this.props.saveProjectSb3().then(content => {
            this.finishedSaving();
            downloadBlob('hello', content);
        });
    }


    handleSignInWithGithub() {

        const personalAccessToken = document.getElementById('githubPasswordInput').value;
        const username = document.getElementById('githubUsername').value;
        const repoName = document.getElementById('githubRepoName').value;

        // console.log('Hello!', document.getElementById('githubModalPasswordInput').value);
        const myHeaders = new Headers();
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
                throw new Error(`Failed to load project: ${res}`);
            }
            return res.json();
        })
            .then(reference => {
                console.log(reference);
                requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                const commit_head = fetch(reference.object.url, requestOptions).then(res => {
                    const blob = '';

                    this.downloadProject();
                });
            },
            err => {
                alert(`${err}`);
            });
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

    }),
    saveProjectSb3: PropTypes.func
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm,
    saveProjectSb3: state.scratchGui.vm.saveProjectSb3.bind(state.scratchGui.vm),
});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(closeGithubModal())
});

export default injectIntl(connect(
    mapStateToProps,
    mapDispatchToProps
)(UsernameModal));
