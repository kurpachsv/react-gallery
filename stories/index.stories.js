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
        columnMaxHeight={number('Max column height (for prevent pictures degradation, if last row is not filled)', 200)}
        columnsMaxCount={number('Max columns count', 5)}
        gutterInPercent={number('Gutter in %', 0.5)}
        disableObserver={boolean('Disable Intersection Observer', false)}
        disableActualImage={boolean('Disable actual images', false)}
        enableDetailView={boolean('Enable detail view', false)}
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
        fixedSize={number('Fixed size', 210)}
        fixedBottom={number('Fixed bottom size', 50)}
        columnsMaxCount={number('Max columns count', 5)}
        fixedGutter={number('Gutter in px', 10)}
        disableObserver={boolean('Disable Intersection Observer', false)}
        disableActualImage={boolean('Disable actual images', false)}
        enableDetailView={boolean('Enable detail view', true)}
        images={images}
    />
));
