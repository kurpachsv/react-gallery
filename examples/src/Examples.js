import React, {Component, Fragment} from 'react';
import {Gallery, Image, ImageInView} from '@kurpachsv/react-gallery';
import {getImages} from '../../__mocks__/images';
import style from './examples.css';

const imageRenderer = image => {
    return (
        <Fragment>
            <ImageInView {...image} />
            <div
                className={style.placeholder}
                style={{
                    paddingTop: `${image.placeholderHeight}%`,
                }}
            />
        </Fragment>
    );
};

class BasicExample extends Component {
    componentWillMount() {
        this.setState({
            images: getImages(),
        });
    }

    render() {
        const {images} = this.state;
        return (
            <Gallery
                imageRenderer={imageRenderer}
                images={images}
            />
        );
    }
}

class WithDynamicWidthExample extends Component {
    state = {
        containerWidth: 1000,
    };

    componentWillMount() {
        this.setState({
            images: getImages(),
        }, () => {
            this.updateWidth();
        });
    }

    updateWidth = () => {
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        if (width < 640) {
            this.setState({
                containerWidth: 500,
            });
        } else {
            this.setState({
                containerWidth: 1000,
            });
        }
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth);
    }

    render() {
        const {containerWidth, images} = this.state;
        return (
            <Gallery
                containerWidth={containerWidth}
                imageRenderer={imageRenderer}
                images={images}
            />
        );
    }
}

export {
    BasicExample,
    WithDynamicWidthExample,
};
