import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {projectTitleInitialState, setProjectTitle} from '../reducers/project-title';
import downloadBlob from '../lib/download-blob';
import {setProjectUnchanged} from '../reducers/project-changed';
import {showStandardAlert, showAlertWithTimeout} from '../reducers/alerts';
import {setFileHandle} from '../reducers/tw';
import FileSystemAPI from '../lib/tw-filesystem-api';
import {getIsShowingProject} from '../reducers/project-state';
import log from '../lib/log';

// from sb-file-uploader-hoc.jsx

/**
 * Project saver component passes a downloadProject function to its child.
 * It expects this child to be a function with the signature
 *     function (downloadProject, props) {}
 * The component can then be used to attach project saving functionality
 * to any other component:
 *
 * <SB3Downloader>{(downloadProject, props) => (
 *     <MyCoolComponent
 *         onClick={downloadProject}
 *         {...props}
 *     />
 * )}</SB3Downloader>
 */
class GithubMenuTab extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'pushChanges',
            'pullChanges'
        ]);
    }

    pushChanges () {
        console.log("PushChanges");
    }

    render () {
        const {
            children
        } = this.props;
        return children(
            this.props.className,
            this.pushChanges,
            
        );
    }
}

GithubMenuTab.propTypes = {
    children: PropTypes.func,
    className: PropTypes.string
};
GithubMenuTab.defaultProps = {
    className: ''
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GithubMenuTab);
