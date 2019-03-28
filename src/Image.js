import PropTypes from 'prop-types';
import React from 'react';
import styles from './image.css';

const Image = ({style, className, src, alt, visible, height, width, ...rest}) => {
    return (
        <img
            {...rest}
            className={`${styles.image} ${className}`}
            src={visible ? src : null}
            alt={alt}
            style={{
                display: visible ? null : 'none',
                ...style,
            }}
        />
    );
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    visible: PropTypes.bool,
};

Image.defaultProps = {
    className: '',
    alt: '',
    visible: true,
};

export default Image;
