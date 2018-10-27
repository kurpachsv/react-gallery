import React from 'react';
import {storiesOf} from '@storybook/react';

import {
    BasicExample,
    WithDynamicWidthExample,
    MasonryExample,
    MasonryWithDynamicWidthExample,
} from '../examples/src/Examples';

storiesOf('Examples', module)
    .add('Basic example', () => (
        <BasicExample />
    ))
    .add('Example with dynamic container width', () => (
        <WithDynamicWidthExample />
    ))
    .add('Masonry example', () => (
        <MasonryExample />
    ))
    .add('Masonry example with dynamic container width', () => (
        <MasonryWithDynamicWidthExample />
    ));
