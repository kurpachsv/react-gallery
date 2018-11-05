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
        containerWidth={number('Container width', 1000)}
        minHeight={number('Minimum image height', 200)}
        maxHeight={number('Maximum image height (for last row)', 250)}
        gutter={number('Gutter in %', 0.5)}
        disableObserver={boolean('Disable Intersection Observer', false)}
        disableActualImage={boolean('Disable actual images', false)}
        images={images}
    />
));

stories.add('with masonry layout', () => (
    <Gallery
        enableMasonry
        containerWidth={number('Container width', 1000)}
        maxWidth={number('Maximum image width', 200)}
        gutter={number('Gutter in %', 0.5)}
        disableObserver={boolean('Disable Intersection Observer', false)}
        disableActualImage={boolean('Disable actual images', false)}
        images={images}
    />
));
