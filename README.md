[![npm version](https://badge.fury.io/js/%40kurpachsv%2Freact-gallery.svg)](https://badge.fury.io/js/%40kurpachsv%2Freact-gallery)
[![Build Status](https://travis-ci.org/kurpachsv/react-gallery.svg?branch=master)](https://travis-ci.org/kurpachsv/react-gallery)
[![Coverage Status](https://coveralls.io/repos/github/kurpachsv/react-gallery/badge.svg?branch=master)](https://coveralls.io/github/kurpachsv/react-gallery?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/0cdc600293ec5b061fc0/maintainability)](https://codeclimate.com/github/kurpachsv/react-gallery/maintainability)
[![Dependency Status](https://david-dm.org/kurpachsv/react-gallery.svg)](https://david-dm.org/kurpachsv/react-gallery)
[![npm bundle size (minified)](https://badgen.net/bundlephobia/min/@kurpachsv/react-gallery)](https://bundlephobia.com/result?p=@kurpachsv/react-gallery@0.0.15)
[![npm bundle size (minified + gzip)](https://badgen.net/bundlephobia/minzip/@kurpachsv/react-gallery)](https://bundlephobia.com/result?p=@kurpachsv/react-gallery@0.0.15)

# react-gallery

A simple, fast and flexibility images gallery.

## Preview

<img src="https://github.com/kurpachsv/react-gallery/raw/master/preview.png" alt="Preview" />

<img src="https://github.com/kurpachsv/react-gallery/raw/master/preview-masonry.png" alt="Preview masonry" />


See [storybook](https://kurpachsv.github.io/react-gallery) for live demonstration.

## Usage

```bash
npm i --save @kurpachsv/react-gallery
```

```javascript
import {Gallery} from '@kurpachsv/react-gallery';
```

```javascript
class App extends Component {
    render() {
        return (
            <Gallery
                images={
                    // ...
                }
            />
        );
    }
}
```

## Properties

Property        |       Type            |       Default         |       Description
:-----------------------|:--------------|:--------------|:--------------------------------
images | array  | undefined | required; array of images
containerWidth | number  | 1000  | optional; size in px of images container
minHeight | number | 200 | optional; minimum image height
maxHeight | number | 250 | optional; maximum image height
minWidth | number | 200 | optional; minimum image width (for masonry layout)
gutter | number  | 5  | optional; size in % between images
imageRenderer | function | default implementation |  optional; component/function for render of image
enableMasonry | bool | false | optional; turn on/off masonry layout mode
disableObserver | bool | false | optional; turn on/off lazy loading and intersection observer for images
disableActualImage | bool | false | optional; show/hide actual images, but not the placeholders
className | string | '' | optional; container class name
columnClassName | string | '' | optional; item class name
rowClassNamesName | string | '' | optional; row class name (for default layout)

## License

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Copyright (c) Sergei Kurpach, 2018
