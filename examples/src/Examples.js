import React, {Component, Fragment} from 'react';
import {Gallery, Image} from '@kurpachsv/react-gallery';
import debounce from 'lodash.debounce';
import {getImages} from '../../__mocks__/images';
import style from './examples.css';

const imageRenderer = imageProps => {
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
        containerWidth: undefined,
    };

    constructor(props) {
        super(props);
        this.parent = React.createRef();
        this.updateWidth = debounce(this.updateWidth, 100);
    }

    componentWillMount() {
        this.setState({
            images: getImages(),
        }, () => {
            this.updateWidth();
        });
    }

    updateWidth = () => {
        const containerWidth = this.parent.current.offsetWidth;
        this.setState({
            containerWidth,
        });
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
            <div
                ref={this.parent}
            >
                {containerWidth
                    ? (
                        <Gallery
                            containerWidth={containerWidth}
                            imageRenderer={imageRenderer}
                            images={images}
                        />
                    ) : null
                }
            </div>
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
        containerWidth: undefined,
    };

    constructor(props) {
        super(props);
        this.parent = React.createRef();
        this.updateWidth = debounce(this.updateWidth, 100);
    }

    componentWillMount() {
        this.setState({
            images: getImages(),
        }, () => {
            this.updateWidth();
        });
    }

    updateWidth = () => {
        const containerWidth = this.parent.current.offsetWidth;
        this.setState({
            containerWidth,
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
        const {containerWidth, images} = this.state;
        return (
            <div
                ref={this.parent}
            >
                <Gallery
                    enableMasonry
                    containerWidth={containerWidth}
                    imageRenderer={imageRenderer}
                    images={images}
                />
            </div>
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
        this.showImagesAndEnableObserver = debounce(this.showImagesAndEnableObserver, 200);
        this.updateWidth = debounce(this.updateWidth, 200);
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

class WithCustomClassesExample extends Component {
    state = {
        containerWidth: undefined,
    };

    constructor(props) {
        super(props);
        this.parent = React.createRef();
        this.updateWidth = debounce(this.updateWidth, 300);
    }

    componentWillMount() {
        this.setState({
            images: getImages(),
        }, () => {
            this.updateWidth();
        });
    }

    updateWidth = () => {
        const containerWidth = this.parent.current.offsetWidth;
        this.setState({
            containerWidth,
        });
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
            <div
                ref={this.parent}
            >
                {containerWidth
                    ? (
                        <Gallery
                            columnClassName={style.column}
                            containerWidth={containerWidth}
                            imageRenderer={imageRenderer}
                            images={images}
                        />
                    ) : null}
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
    WithCustomClassesExample,
};
