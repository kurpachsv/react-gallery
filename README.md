[![npm version](https://badge.fury.io/js/%40kurpachsv%2Freact-gallery.svg)](https://badge.fury.io/js/%40kurpachsv%2Freact-gallery)
[![Build Status](https://travis-ci.org/kurpachsv/react-gallery.svg?branch=master)](https://travis-ci.org/kurpachsv/react-gallery)
[![Coverage Status](https://coveralls.io/repos/github/kurpachsv/react-gallery/badge.svg?branch=master)](https://coveralls.io/github/kurpachsv/react-gallery?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/0cdc600293ec5b061fc0/maintainability)](https://codeclimate.com/github/kurpachsv/react-gallery/maintainability)
[![Dependency Status](https://david-dm.org/kurpachsv/react-gallery.svg)](https://david-dm.org/kurpachsv/react-gallery)
[![npm bundle size (minified)](https://badgen.net/bundlephobia/min/@kurpachsv/react-gallery@latest)](https://bundlephobia.com/result?p=@kurpachsv/react-gallery@latest)
[![npm bundle size (minified + gzip)](https://badgen.net/bundlephobia/minzip/@kurpachsv/react-gallery@latest)](https://bundlephobia.com/result?p=@kurpachsv/react-gallery@latest)

# react-gallery

A simple, fast and flexibility image gallery.

## Preview

<img src="https://github.com/kurpachsv/react-gallery/raw/master/preview.png" alt="Preview" />

<img src="https://github.com/kurpachsv/react-gallery/raw/master/preview-masonry.png" alt="Preview masonry" />


See [storybook](https://kurpachsv.github.io/react-gallery) for live demonstration.

## Basic Usage

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
                    // your images array
                }
            />
        );
    }
}
```
For image must be specify `width`, `height` and `src` attributes.


## Properties

Property        |       Type            |       Default         |       Description
:-----------------------|:--------------|:--------------|:--------------------------------
images | array  | undefined | required; array of images
columnsMaxCount | number  | 5  | optional; max value of columns count
columnMaxHeight | number  | 200  | optional; max column height in px (for prevent pictures degradation, if last row is not filled)
gutterInPercent | number  | 0.5  | optional; value in % of space between images
imageRenderer | function | default implementation |  optional; component/function for render of image
enableMasonry | bool | false | optional; turn on/off masonry layout mode
disableObserver | bool | false | optional; turn on/off lazy loading and intersection observer for images
disableActualImage | bool | false | optional; show/hide actual images, but not the placeholders
className | string | '' | optional; container class name
columnClassName | string | '' | optional; item class name
rowClassName | string | '' | optional; row class name (for default layout)
enableFixed | bool | false | optional; turn on/off fixed layout mode
fixedBottom | number | 50 | optional; size in px of bottom margin
enableDetailView | bool | false | optional; turn on/off detail view mode for fixed or masonry layout
detailsViewRenderer | function | default implementation | optional; component/function for render of detail view

## Renderers

For better flexibility, you can override default image renderer, [here](https://github.com/kurpachsv/react-gallery/blob/master/src/Renderer.js#L7) is a default implementation:
Also you can override default details renderer, [here](https://github.com/kurpachsv/react-gallery/blob/master/src/Renderer.js#L26) is a default implementation.

## License

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Copyright (c) Sergei Kurpach, 2019
