[![npm version](https://badge.fury.io/js/%40kurpachsv%2Freact-gallery.svg)](https://badge.fury.io/js/%40kurpachsv%2Freact-gallery)
[![Build Status](https://travis-ci.org/kurpachsv/react-gallery.svg?branch=master)](https://travis-ci.org/kurpachsv/react-gallery)
[![Coverage Status](https://coveralls.io/repos/github/kurpachsv/react-gallery/badge.svg?branch=master)](https://coveralls.io/github/kurpachsv/react-gallery?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/0cdc600293ec5b061fc0/maintainability)](https://codeclimate.com/github/kurpachsv/react-gallery/maintainability)
[![Dependency Status](https://david-dm.org/kurpachsv/react-gallery.svg)](https://david-dm.org/kurpachsv/react-gallery)
[![npm bundle size (minified + gzip)](https://badgen.net/bundlephobia/minzip/@kurpachsv/react-gallery)](https://bundlephobia.com/result?p=@kurpachsv/react-gallery@latest)

# react-gallery

A simple, fast and flexibility images gallery.

## Preview

<img src="https://github.com/kurpachsv/react-gallery/raw/master/preview.png" alt="Preview" />

<img src="https://github.com/kurpachsv/react-gallery/raw/master/preview-masonry.png" alt="Preview masonry" />


See [storybook](https://kurpachsv.github.io/react-gallery/?selectedKind=Examples&selectedStory=Basic%20Example&full=0&addons=1&stories=1&panelRight=0) for live demonstration.

## Usage

```bash
npm i --save @kurpachsv/react-gallery
```

```javascript
import {Gallery, ImageInView as Image} from '@kurpachsv/react-gallery';
```

```javascript
const imageRenderer = image => {
    return (
        <Fragment>
            <Image {...image} />
            <div
                style={{
                    paddingTop: `${image.placeholderHeight}%`,
                }}
            />
        </Fragment>
    );
};
```

```javascript
class App extends Component {
    render() {
        return (
            <Gallery
                imageRenderer={imageRenderer}
                images={
                    // ...
                }
            />
        );
    }
}
```

For more details see [examples](https://github.com/kurpachsv/react-gallery/blob/master/examples/src/Examples.js).

## Basic properties

Property        |       Type            |       Default         |       Description
:-----------------------|:--------------|:--------------|:--------------------------------
images | array  | undefined | required; array of images
containerWidth | number  | 1000  | optional; size in px of images container
gutter | number  | 5  | optional; size in px between images
imageRenderer | function | undefined | required; component for render of one image

### TODO

- [ ] ~100% coverage
- [x] [Rollup.js](https://rollupjs.org) for bundle
- [x] Masonry layout
- [ ] More examples & documentation 
- [x] Remove [lodash.isequal](https://www.npmjs.com/package/lodash.isequal) from bundle
- [ ] Support TypeScript
- [ ] Add more helpers like [Image](https://github.com/kurpachsv/react-gallery/blob/master/src/Image.js)

## License

MIT, Copyright (c) Sergei Kurpach, 2018
