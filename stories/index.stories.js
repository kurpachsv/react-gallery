import React from 'react';
import {storiesOf} from '@storybook/react';

import {BasicExample, WithDynamicWidthExample} from '../examples/src/Examples';

storiesOf('Examples', module)
    .add('Basic Example', () => (
        <BasicExample />
    ))
    .add('Example with dynamic container width', () => (
        <WithDynamicWidthExample />
    ));
