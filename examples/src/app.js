import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Image from  './../../src/Image';
import Gallery from './../../src/Gallery';
import style from './app.css';

import {getImages} from './../__mocks__/images';

const imageRenderer = image => {
    return (
        <Fragment>
            <Image src={image.src} alt={image.alt} />
            <div
                className={style.placeholder}
                style={{
                    paddingTop: `${image.placeholderHeight}%`,
                }}
            />
        </Fragment>
    );
};


class Example extends Component {
    state = {
        containerWidth: 1000,
    };

    componentWillMount() {
        this.setState({
            images: getImages(),
        }, () => {
            this.updateWidth();
        });
    };

    updateWidth = () => {
        const width = window.innerWidth ||
            document.documentElement.clientWidth|| 
            document.body.clientWidth;
        
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
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth);
    };

    render() {
        return (
            <Gallery
                containerWidth={this.state.containerWidth}
                imageRenderer={imageRenderer}
                images={this.state.images}
            />
        )
    }
}

ReactDOM.render(<Example />, document.getElementById('app-mounting-point'));
