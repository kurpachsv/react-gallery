import React from 'react';
import styled from 'styled-components';
import {storiesOf} from '@storybook/react';
import {withKnobs, boolean, number} from '@storybook/addon-knobs';
import {Gallery} from '@kurpachsv/react-gallery';
import {MoonLoader} from 'react-spinners';
import {getImages} from '../__mocks__/images';

const images = getImages();

const stories = storiesOf('Gallery', module);
stories.addDecorator(withKnobs);

export const LoaderWrapper = styled.div`
    position: fixed;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
`;

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
        withLoader={boolean('Turn on loader', true)}
        loader={
            <LoaderWrapper>
                <MoonLoader
                    sizeUnit="px"
                    size={100}
                    loading
                />
            </LoaderWrapper>
        }
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
        withLoader={boolean('Turn on loader', true)}
        loader={
            <LoaderWrapper>
                <MoonLoader
                    sizeUnit="px"
                    size={100}
                    loading
                />
            </LoaderWrapper>
        }
    />
));

stories.add('with fixed layout', () => (
    <Gallery
        enableFixed
        fixedBottom={number('Fixed bottom size', 50)}
        columnsMaxCount={number('Max columns count', 5)}
        gutterInPercent={number('Gutter in %', 0.5)}
        disableObserver={boolean('Disable Intersection Observer', false)}
        disableActualImage={boolean('Disable actual images', false)}
        enableDetailView={boolean('Enable detail view', true)}
        images={images}
        withLoader={boolean('Turn on loader', true)}
        loader={
            <LoaderWrapper>
                <MoonLoader
                    sizeUnit="px"
                    size={100}
                    loading
                />
            </LoaderWrapper>
        }
    />
));
