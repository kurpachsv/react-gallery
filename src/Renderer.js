import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import Image from './Image';

import style from './details.css';

const defaultRenderer = imageProps => {
    return (
        <Fragment>
            <Image
                onClick={imageProps.onClick}
                {...imageProps}
            />
            <div
                style={{
                    backgroundColor: 'rgb(187, 189, 191)',
                    paddingTop: `${imageProps.placeholderHeight}%`,
                }}
            />
        </Fragment>
    );
};

const DETAILS_IMAGE_HEIGHT = 300;

const defaultDetailsViewRenderer = ({visible, selectedImage, gutter}) => {
    return (
        <div
            className={visible ? style.container : style['container--disable']}
            style={{
                height: visible ? DETAILS_IMAGE_HEIGHT : 0,
                visibility: visible ? 'visible' : 'hidden',
                marginBottom: visible ? `${gutter}px` : 0,
            }}
        >

            <div className={style['image-wrapper']}>
                {visible && (
                    <Image
                        style={{
                            height: DETAILS_IMAGE_HEIGHT,
                            width: selectedImage.width / selectedImage.height * DETAILS_IMAGE_HEIGHT,
                        }}
                        src={selectedImage.src}
                    />
                )}
            </div>
        </div>
    );
};

defaultDetailsViewRenderer.propTypes = {
    visible: PropTypes.bool.isRequired,
    selectedImage: PropTypes.object.isRequired,
    gutter: PropTypes.number,
};

defaultDetailsViewRenderer.defaultProps = {
    gutter: 0,
};

export {
    defaultRenderer,
    defaultDetailsViewRenderer,
};
