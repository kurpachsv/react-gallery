/* eslint-disable import/first */
/* eslint-disable import/order */
/* eslint-disable global-require */
import isBrowser from './isBrowser';

if (isBrowser) {
    require('intersection-observer');
}

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Observer from '@researchgate/react-intersection-observer';

class ViewMonitor extends Component {
    static propTypes = {
        tag: PropTypes.node,
        children: PropTypes.func.isRequired,
        disableActualImage: PropTypes.bool.isRequired,
        disableObserver: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        tag: 'div',
    };

    state = {
        isVisible: false,
    };

    handleChange = ({isIntersecting}) => {
        const {isVisible} = this.state;
        if (!isVisible) {
            this.setState({isVisible: isIntersecting});
        }
    };

    render() {
        const {disableObserver, disableActualImage, tag: Tag, children, ...rest} = this.props;
        const {isVisible} = this.state;
        if (disableObserver) {
            return (
                <Tag>
                    {children(!disableActualImage)}
                </Tag>
            );
        }
        if (!isBrowser) {
            return (
                <Tag>
                    {children(false)}
                </Tag>
            );
        }
        return (
            <Observer {...rest} onChange={this.handleChange}>
                <Tag>
                    {children(isVisible)}
                </Tag>
            </Observer>
        );
    }
}

export default ViewMonitor;
