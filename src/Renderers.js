import PropTypes from 'prop-types';
import React from 'react';
import Image from './Image';

import {
    DetailsContainer,
    DetailsImageWrapper,
    DetailsImage,
} from './nodes';

const defaultRenderer = imageProps => {
    if (imageProps.specifyImageSizes) {
        return (
            <React.Fragment>
                {imageRendererForFixedLayout(imageProps)}
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                {imageRenderer(imageProps)}
            </React.Fragment>
        );
    }
};

const imageRenderer = imageProps => {
    return (
        <React.Fragment>
            <Image
                onClick={imageProps.onClick}
                {...imageProps}
            />
            <div
                style={{
                    paddingTop: `${imageProps.placeholderHeight}%`,
                    backgroundColor: imageProps.placeholderColor,

                }}
            />
        </React.Fragment>
    );
};

const imageRendererForFixedLayout = imageProps => {
    return (
        <div
            style={{
                backgroundColor: '#ffffff',
            }}
        >
            <Image
                onClick={imageProps.onClick}
                {...imageProps}
            />
            <div
                style={{
                    paddingTop: '100%',
                }}
            />
        </div>
    );
};

const DETAILS_IMAGE_HEIGHT = 300;

const defaultDetailsViewRenderer = ({visible, selectedImage, gutterInPercent}) => {
    return (
        <DetailsContainer
            visible={visible}
            height={DETAILS_IMAGE_HEIGHT}
            gutterInPercent={gutterInPercent}
        >

            <DetailsImageWrapper>
                {visible && (
                    <DetailsImage
                        src={selectedImage.src}
                        height={DETAILS_IMAGE_HEIGHT}
                        width={selectedImage.width / selectedImage.height * DETAILS_IMAGE_HEIGHT}
                    />
                )}
            </DetailsImageWrapper>
        </DetailsContainer>
    );
};

defaultDetailsViewRenderer.propTypes = {
    visible: PropTypes.bool.isRequired,
    selectedImage: PropTypes.object.isRequired,
    gutterInPercent: PropTypes.number,
};

defaultDetailsViewRenderer.defaultProps = {
    gutterInPercent: 0,
};

export {
    defaultRenderer,
    defaultDetailsViewRenderer,
};
