import PropTypes from 'prop-types';
import React from 'react';
import styles from './image.css';

const Image = ({
    style,
    className,
    src,
    alt,
    visible,
    height,
    width,
    newWidth,
    newHeight,
    newWidthInPercent,
    placeholderHeight,
    enableMasonry,
    maxHeight,
    maxWidth,
    fixedBottom,
    ...rest
}) => {
    const ratio = width / height;
    return (
        <img
            {...rest}
            className={`${styles.image} ${className}`}
            src={visible ? src : null}
            alt={alt}
            style={{
                display: visible ? null : 'none',
                position: 'absolute',
                width: ratio > 1 ? '100%' : 'auto',
                height: ratio > 1 ? 'auto' : `calc(100% - ${fixedBottom}px)`,
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
