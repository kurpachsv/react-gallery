import React from 'react';
import {storiesOf} from '@storybook/react';

import {
    BasicExample,
    WithDynamicWidthExample,
    MasonryExample,
    MasonryWithDynamicWidthExample,
    MasonryDynamicViewExample,
} from '../examples/src/Examples';

storiesOf('Examples', module)
    .add('Basic example', () => (
        <BasicExample />
    ))
    .add('With dynamic container width', () => (
        <WithDynamicWidthExample />
    ))
    .add('Masonry example', () => (
        <MasonryExample />
    ))
    .add('Masonry with dynamic container width', () => (
        <MasonryWithDynamicWidthExample />
    ))
    .add('Dynamic change masonry mode', () => (
        <MasonryDynamicViewExample />
    ));
