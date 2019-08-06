import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, boolean, number} from '@storybook/addon-knobs';
import {Gallery} from '@kurpachsv/react-gallery';
import {getImages} from '../__mocks__/images';

const images = getImages();

const stories = storiesOf('Gallery', module);
stories.addDecorator(withKnobs);

stories.add('with default layout', () => (
    <Gallery
        columnsMaxCount={number('Max columns count', 5)}
        gutterInPercent={number('Gutter in %', 0.5)}
        disableObserver={boolean('Disable Intersection Observer', false)}
        disableActualImage={boolean('Disable actual images', false)}
        enableDetailView={boolean('Enable detail view', false)}
        disableLastRowDetecting={boolean('Disable LastRow Detecting', false)}
        viewportWidth={number('Viewport width', 1000)}
        images={images}
    />
));

stories.add('with masonry layout', () => (
    <Gallery
        enableMasonry
        columnsMaxCount={number('Max columns count', 5)}
        gutterInPercent={number('Gutter in %', 0.5)}
        disableObserver={boolean('Disable Intersection Observer', false)}
        disableActualImage={boolean('Disable actual images', false)}
        images={images}
    />
));

stories.add('with fixed layout', () => (
    <Gallery
        enableFixed
        fixedBottom={number('Fixed bottom size', 50)}
        columnsMaxCount={number('Max columns count', 5)}
        gutterInPercent={number('Horizontal gutter in %', 0.5)}
        fixedBottomGutterInPecent={number('Vertical gutter in %', 3)}
        disableObserver={boolean('Disable Intersection Observer', false)}
        disableActualImage={boolean('Disable actual images', false)}
        enableDetailView={boolean('Enable detail view', true)}
        images={images}
    />
));
