import { defineMessages, FormattedMessage, intlShape, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import bindAll from 'lodash.bindall';
import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import FancyCheckbox from '../tw-fancy-checkbox/checkbox.jsx';
import Input from '../forms/input.jsx';
import BufferedInputHOC from '../forms/buffered-input-hoc.jsx';
import DocumentationLink from '../tw-documentation-link/documentation-link.jsx';
import styles from './github-modal.css';

/* eslint-disable react/no-multi-comp */

const BufferedInput = BufferedInputHOC(Input);

const messages = defineMessages({
    title: {
        defaultMessage: 'Setup Github Integration',
        description: 'Title of Github integrations modal',
        id: 'tw.githubModal.title'
    },
    help: {
        defaultMessage: 'Click for help',
        description: 'Hover text of help icon in settings',
        id: 'tw.githubModal.help'
    }
});

const LearnMore = props => (
    <React.Fragment>
        {' '}
        <DocumentationLink {...props}>
            <FormattedMessage
                defaultMessage="Learn more."
                id="gui.alerts.cloudInfoLearnMore"
            />
        </DocumentationLink>
    </React.Fragment>
);

class UnwrappedSetting extends React.Component {
    constructor(props) {
        super(props);
        bindAll(this, [
            'handleClickHelp'
        ]);
        this.state = {
            helpVisible: false
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.active && !prevProps.active) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
                helpVisible: true
            });
        }
    }
    handleClickHelp() {
        this.setState(prevState => ({
            helpVisible: !prevState.helpVisible
        }));
    }
    render() {
        return (
            <div
                className={classNames(styles.setting, {
                    [styles.active]: this.props.active
                })}
            >
                <div className={styles.label}>
                    {this.props.primary}
                    <button
                        className={styles.helpIcon}
                        onClick={this.handleClickHelp}
                        title={this.props.intl.formatMessage(messages.help)}
                    />
                </div>
                {this.state.helpVisible && (
                    <div className={styles.detail}>
                        {this.props.help}
                        {this.props.slug && <LearnMore slug={this.props.slug} />}
                    </div>
                )}
                {this.props.secondary}
            </div>
        );
    }
}
UnwrappedSetting.propTypes = {
    intl: intlShape,
    active: PropTypes.bool,
    help: PropTypes.node,
    primary: PropTypes.node,
    secondary: PropTypes.node,
    slug: PropTypes.string
};
const Setting = injectIntl(UnwrappedSetting);

const BooleanSetting = ({ value, onChange, label, ...props }) => (
    <Setting
        {...props}
        active={value}
        primary={
            <label className={styles.label}>
                <FancyCheckbox
                    type="checkbox"
                    className={styles.checkbox}
                    checked={value}
                    onChange={onChange}
                />
                {label}
            </label>
        }
    />
);
BooleanSetting.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
    label: PropTypes.node.isRequired
};

const SignInButton = ({ onSignInWithGithub }) => (
    <button
        onClick={onSignInWithGithub}
        className={[styles.button, styles.signinButton].join(' ')}
    >
        <FormattedMessage
            defaultMessage="Setup Github Integration"
            description="Link to an existing repo or create a new repository using Github."
            id="tw.githubModal.initGithub"
        />
    </button>
);
SignInButton.propTypes = {
    onSignInWithGithub: PropTypes.func
};


// const InitRepoButton = ({onInitializeRepository}) => (
//     <button
//         onClick={onInitializeRepository}
//         className={[styles.button, styles.signinButton].join(' ')}
//     >
//         <FormattedMessage
//             defaultMessage="Setup Github Integration"
//             description="Link to an existing or create a new repository using Github."
//             id="tw.githubModal.initGithub"
//         />
//     </button>
// );
// InitRepoButton.propTypes = {
//     onInitializeRepository: PropTypes.func
// };

const Header = props => (
    <div className={styles.header}>
        {props.children}
        <div className={styles.divider} />
    </div>
);
Header.propTypes = {
    children: PropTypes.node
};

const GithubModalComponent = props => (
    <Modal
        className={styles.modalContent}
        onRequestClose={props.onClose}
        contentLabel={props.intl.formatMessage(messages.title)}
        id="githubModal"
    >
        <Box className={styles.body}>
            <Header>
                <FormattedMessage
                    defaultMessage="Login With Github"
                    description="Github section label"
                    id="tw.githubModal.loginLabel"
                />
            </Header>
            {/* <br /> */}
            {/* <FormattedMessage
                defaultMessage="VCS (Version Control System):"
                description=""
                id="tw.githubModal.vcsSelectLabel"
            />
            <span>
                <select>
                    <option value="volvo">
                        <FormattedMessage
                            defaultMessage="Github REST"
                            description=""
                            id="tw.githubModal.vcsOption1"
                        />
                    </option>
                </select>
            </span> */}
            {/* <p>
                <FormattedMessage
                    defaultMessage="Login with a Github Personal Access Token (PAT)."
                    description=""
                    id="tw.githubModal.loginDescription"
                />
                <FormattedMessage
                    defaultMessage=" Read the full documentation "
                    description=""
                    id="tw.settingsModal.loginDescriptionP2"
                />
                <a href="https://packager.turbowarp.org/guides/source-control#using-personal-access-tokens">
                    <FormattedMessage
                        defaultMessage="here."
                        description=""
                        id="tw.settingsModal.loginDescriptionLink"
                    />
                </a>
            </p>
 */}


            {/* <SignInButton
                {...props}
            /> */}
            <p>
                <FormattedMessage
                    defaultMessage="Enter your Github username and password. "
                    id="tw.githubModal.popupLabel"
                />
                {/* <i></i>
                <FormattedMessage
                    defaultMessage="How do I generate a Personal Access Token?"
                    description=""
                    id="tw.settingsModal.loginDescriptionP2"
                />
                </i> */}

            </p>
            <Setting
                {...props}
                className={styles.textInput}
                primary={
                    <div>
                        <FormattedMessage
                            defaultMessage="Username:"
                            description="Username input label"
                            id="tw.githubModal.usernameLabel"
                        />
                        <span>
                            <BufferedInput
                                className={styles.inputBox}
                                placeholder="Username"
                                id="githubUsername"
                            />
                        </span>
                    </div>
                }
                help={
                    <div
                        className={styles.helpLabel}
                    >
                        <FormattedMessage
                            // eslint-disable-next-line max-len
                            defaultMessage="Enter your Github account username."
                            description="Github Username help"
                            id="tw.githubModal.usernameHelp"
                        />
                    </div>
                }
            />
            <Setting
                {...props}
                className={styles.textInput}
                id="passwordSetting"
                primary={
                    <div>
                        <FormattedMessage
                            defaultMessage="Password:"
                            description="Password input label"
                            id="tw.githubModal.passwordLabel"
                        />
                        <span>
                            <BufferedInput
                                className={styles.inputBox}
                                placeholder="Password"
                                type="password"
                                id="githubPasswordInput"
                            />
                        </span>
                    </div>
                }
                help={
                    <div
                        className={styles.helpLabel}
                    >
                        <FormattedMessage
                            // eslint-disable-next-line max-len
                            defaultMessage="Enter the password for your Github account."
                            description="Github Password help"
                            id="tw.githubModal.passwordHelp"
                        />
                    </div>
                }
            />
            <Header>
                <FormattedMessage
                    defaultMessage="Integration Setup"
                    description="Select Repository section label"
                    id="tw.githubModal.selectRepoLabel"
                />
            </Header>
            <p>
                <FormattedMessage
                    defaultMessage="Enter your repository name and a personal access token for your account."
                    id="tw.githubModal.integrationSetupLabel"
                />
                <a
                    href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i>
                        <FormattedMessage
                            defaultMessage=" How do I generate a Personal Access Token?"
                            description=""
                            id="tw.githubModal.documentationLink"
                        />
                    </i>
                </a>
            </p>
            <Setting
                {...props}
                className={styles.textInput}
                primary={
                    <div>
                        <FormattedMessage
                            defaultMessage="Repository Name:"
                            description="Repo Name Input label"
                            id="tw.githubModal.repoNameLabel"
                        />
                        <span>
                            <BufferedInput
                                className={styles.inputBox}
                                placeholder="Repository Name"
                                id="githubRepoName"
                            />
                        </span>
                    </div>
                }
                help={
                    <div
                        className={styles.helpLabel}
                    >
                        <FormattedMessage
                            // eslint-disable-next-line max-len
                            defaultMessage="Enter the name of an existing Github repository. If one is not found, a new one will be created with this name. If connecting to a repository that is not owned by your account, write the repo name in the format 'owner/repository'."
                            description="Github RepoName help"
                            id="tw.githubModal.repoNameHelp"
                        />
                    </div>
                }
            />
            <Setting
                {...props}
                id="tokenSetting"
                className={styles.textInput}
                primary={
                    <div>
                        <FormattedMessage
                            defaultMessage="Personal Access Token:"
                            description="Password input label"
                            id="tw.githubModal.tokenLabel"
                        />
                        <span>
                            <BufferedInput
                                className={styles.inputBox}
                                placeholder="Personal Access Token"
                                id="githubTokenInput"
                            />
                        </span>
                    </div>
                }
                help={
                    <div
                        className={styles.helpLabel}
                    >
                        <FormattedMessage
                            // eslint-disable-next-line max-len
                            defaultMessage="Enter a Github Personal Access Token (PAT). Read {documentationLink} for more information on generating your own."
                            description="Github Personal Access Token help"
                            id="tw.githubModal.tokenHelp"
                            values={{
                                documentationLink: (
                                    <a
                                        href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FormattedMessage
                                            defaultMessage="this page"
                                            description="Github docs page about Personal Access Tokens."
                                            id="tw.githubModal.tokenHelp.docsLink"
                                        />
                                    </a>
                                )
                            }}
                        />
                    </div>
                }
            />
            <p>
                <FormattedMessage
                    defaultMessage="Clicking Setup below will push your project file to the selected Github repository. If the repository already exists, this will pull the existing data from that repository."
                    description=""
                    id="tw.githubModal.initGithubLabel"
                />
            </p>

            <SignInButton
                {...props}
            />

            <p>
                <FormattedMessage
                    defaultMessage="It will also download a JSON file containing all of your project secrets. Keep this file safe and don't share it with anyone. Project collaborators should setup their own Github Integration."
                    description=""
                    id="tw.githubModal.initGithubAdmonition"
                />
            </p>
        </Box>
    </Modal >
);

GithubModalComponent.propTypes = {
    intl: intlShape,
    onClose: PropTypes.func,
    onSignInWithGithub: PropTypes.func
};

export default injectIntl(GithubModalComponent);
