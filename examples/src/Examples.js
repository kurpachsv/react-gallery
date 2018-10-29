import React, {Component, Fragment} from 'react';
import {Gallery, Image} from '@kurpachsv/react-gallery';
import debounce from 'lodash.debounce';
import {getImages} from '../../__mocks__/images';
import style from './examples.css';

const imageRenderer = imageProps => {
    if (imageProps.enableMasonry) {
        return (
            <div
                className={style.placeholder}
                style={{
                    height: imageProps.height,
                    width: imageProps.width,
                }}
            >
                <Image
                    {...imageProps}
                />
            </div>
        );
    }
    return (
        <Fragment>
            <Image
                {...imageProps}
            />
            <div
                className={style.placeholder}
                style={{
                    paddingTop: `${imageProps.placeholderHeight}%`,
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

    constructor(props) {
        super(props);
        this.updateWidth = debounce(this.updateWidth, 250);
    }

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

class MasonryExample extends Component {
    componentWillMount() {
        this.setState({
            images: getImages(),
        });
    }

    render() {
        const {images} = this.state;
        return (
            <Gallery
                enableMasonry
                imageRenderer={imageRenderer}
                images={images}
            />
        );
    }
}

class MasonryWithDynamicWidthExample extends Component {
    state = {
        containerWidth: 1000,
    };

    constructor(props) {
        super(props);
        this.updateWidth = debounce(this.updateWidth, 250);
    }

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
                enableMasonry
                containerWidth={containerWidth}
                imageRenderer={imageRenderer}
                images={images}
            />
        );
    }
}

class MasonryDynamicViewExample extends Component {
    state = {
        enableMasonry: false,
        disableActualImage: false,
        disableObserver: false,
    };

    constructor(props) {
        super(props);
        this.parent = React.createRef();
        this.showImagesAndEnableObserver = debounce(this.showImagesAndEnableObserver, 500);
    }

    componentWillMount() {
        this.setState({
            images: getImages(),
        });
    }

    handleClick = () => {
        this.hideImagesAndDisableObserver();
    };

    updateMasonryViewMode = () => {
        const {enableMasonry} = this.state;
        this.setState({
            enableMasonry: !enableMasonry,
        }, this.showImagesAndEnableObserver);
    };

    hideImagesAndDisableObserver = (cb = this.updateMasonryViewMode) => {
        this.setState({
            disableActualImage: true,
            disableObserver: true,
        }, cb);
    };

    updateWidth = () => {
        const containerWidth = this.parent.current.offsetWidth;
        this.setState({
            containerWidth,
        }, () => this.hideImagesAndDisableObserver(this.showImagesAndEnableObserver));
    };

    showImagesAndEnableObserver = () => {
        this.setState({
            disableActualImage: false,
            disableObserver: false,
        });
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateWidth);
        this.setState({
            containerWidth: this.parent.current.offsetWidth,
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth);
    }

    render() {
        const {images, enableMasonry, disableActualImage, disableObserver, containerWidth} = this.state;
        return (
            <div
                onClick={this.handleClick}
                ref={this.parent}
            >
                <Gallery
                    containerWidth={containerWidth}
                    enableMasonry={enableMasonry}
                    imageRenderer={imageRenderer}
                    images={images}
                    disableObserver={disableObserver}
                    disableActualImage={disableActualImage}
                />
            </div>
        );
    }
}

export {
    BasicExample,
    WithDynamicWidthExample,
    MasonryExample,
    MasonryWithDynamicWidthExample,
    MasonryDynamicViewExample,
};
