import PropTypes from 'prop-types';
import React, {Component} from 'react';
import style from './image.css';

class Image extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
    };

    static defaultProps = {
        alt: '',
    };

    render() {
        const {src, alt} = this.props;
        return (
            <img
                className={style.image}
                src={src}
                alt={alt}
            />
        );
    }
}

export default Image;
