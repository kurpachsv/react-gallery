import PropTypes from 'prop-types';
import React from 'react';
import style from './image.css';

const ImageInView = ({src, alt, inView}) => {
    return (
        <img
            className={style.image}
            src={inView ? src : null}
            alt={alt}
            style={inView ? {} : {display: 'none'}}
        />
    );
};

ImageInView.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    inView: PropTypes.bool,
};

ImageInView.defaultProps = {
    alt: '',
    inView: true,
};

export default ImageInView;
