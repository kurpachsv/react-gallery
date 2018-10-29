import PropTypes from 'prop-types';
import React from 'react';
import style from './image.css';

const Image = ({src, alt, inView, enableMasonry}) => {
    return (
        <img
            className={enableMasonry ? style['masonry-image'] : style.image}
            src={inView ? src : null}
            alt={alt}
            style={{
                display: inView ? null : 'none',
            }}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    inView: PropTypes.bool,
    enableMasonry: PropTypes.bool.isRequired,
};

Image.defaultProps = {
    alt: '',
    inView: true,
};

export default Image;
