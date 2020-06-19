import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashComponentUnload extends Component {
    constructor(props) {
        super(props)
        this.handleClose = this.handleClose.bind(this)
    }

    handleClose(e) {
        this.props.setProps({
            close: true
        })
    }

    componentDidMount() {
        window.addEventListener('beforeunload', this.handleClose);
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.handleClose);
    }

    render() {
        return null
    }

}

DashComponentUnload.defaultProps = {
    close: false
};

DashComponentUnload.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * If the event has triggered.
     */
    close: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

