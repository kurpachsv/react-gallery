import PropTypes from 'prop-types';
import React from 'react';

import {
    ImageWithoutSizes,
    ImageWithSizes,
} from './nodes';

const Image = ({
    className,
    src,
    alt,
    visible,
    height,
    width,
    fixedBottom,
    specifyImageSizes,
    ...props,
}) => {
    if (specifyImageSizes) {
        const ratio = width / height;
        return (
            <ImageWithSizes
                className={className}
                src={visible ? src : null}
                alt={alt}
                ratio={ratio}
                visible={visible}
                height={height}
                width={width}
                fixedBottom={fixedBottom}
                onClick={props.onClick}
            />
        );
    } else {
        return (
            <ImageWithoutSizes
                className={className}
                src={visible ? src : null}
                alt={alt}
                visible={visible}
                onClick={props.onClick}
            />
        );
    }
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    visible: PropTypes.bool,
    onClick: PropTypes.func,
};

Image.defaultProps = {
    alt: '',
    visible: true,
    onClick: () => {},
};

export default Image;
