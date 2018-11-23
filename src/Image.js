import PropTypes from 'prop-types';
import React from 'react';
import style from './image.css';

const Image = ({src, alt, visible, height, width, ...rest}) => {
    return (
        <img
            {...rest}
            className={style.image}
            src={visible ? src : null}
            alt={alt}
            style={{
                display: visible ? null : 'none',
            }}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    visible: PropTypes.bool,
};

Image.defaultProps = {
    alt: '',
    visible: true,
};

export default Image;
