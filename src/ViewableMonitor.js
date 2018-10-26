import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Observer from '@researchgate/react-intersection-observer';

class ViewableMonitor extends Component {
    static propTypes = {
        tag: PropTypes.node,
        children: PropTypes.func.isRequired,
    };

    static defaultProps = {
        tag: 'div',
    };

    state = {
        isIntersecting: false,
    };

    handleChange = ({isIntersecting}) => {
        // eslint-disable-next-line react/destructuring-assignment
        if (!this.state.isIntersecting) {
            this.setState({isIntersecting});
        }
    };

    render() {
        const {tag: Tag, children, ...rest} = this.props;
        const {isIntersecting} = this.state;
        return (
            <Observer {...rest} onChange={this.handleChange}>
                <Tag>
                    {children(isIntersecting)}
                </Tag>
            </Observer>
        );
    }
}

export default ViewableMonitor;
