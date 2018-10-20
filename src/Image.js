import PropTypes from 'prop-types';
import React from 'react';
import style from './image.css';

const Image = ({src, alt}) => {
    return (
        <img
            className={style.image}
            src={src}
            alt={alt}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

Image.defaultProps = {
    alt: '',
};

export default Image;
