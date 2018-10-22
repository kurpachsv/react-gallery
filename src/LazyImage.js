import PropTypes from 'prop-types';
import React from 'react';
import LazyLoad from 'react-lazy-load';
import style from './image.css';

const LazyImage = ({src, alt, placeholderHeight}) => {
    return (
        <LazyLoad height={`${placeholderHeight}%`} once>
            <img
                className={style.image}
                src={src}
                alt={alt}
            />
        </LazyLoad>
    );
};

LazyImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    placeholderHeight: PropTypes.number.isRequired,
};

LazyImage.defaultProps = {
    alt: '',
};

export default LazyImage;
