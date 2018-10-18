[![npm version](https://badge.fury.io/js/%40kurpachsv%2Freact-gallery.svg)](https://badge.fury.io/js/%40kurpachsv%2Freact-gallery)
[![Build Status](https://travis-ci.org/kurpachsv/react-gallery.svg?branch=master)](https://travis-ci.org/kurpachsv/react-gallery)
[![Coverage Status](https://coveralls.io/repos/github/kurpachsv/react-gallery/badge.svg?branch=master)](https://coveralls.io/github/kurpachsv/react-gallery?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/0cdc600293ec5b061fc0/maintainability)](https://codeclimate.com/github/kurpachsv/react-gallery/maintainability)

# react-gallery

A simple, fast and flexibility images gallery.

## Preview

![preview](preview.png "Previw")

See [storybook](https://kurpachsv.github.io/react-gallery/?selectedKind=Examples&selectedStory=Basic%20Example&full=0&addons=1&stories=1&panelRight=0) for live demonstration.

## Usage

`npm i --save @kurpachsv/react-gallery`

```
import {Gallery} from '@kurpachsv/react-gallery';
```

```javascript
const imageRenderer = image => {
    return (
        <Fragment>
            <img src={image.src} alt={image.alt} />
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
class Example extends Component {
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

## License

MIT, Copyright (c) 2018, Sergei Kurpach