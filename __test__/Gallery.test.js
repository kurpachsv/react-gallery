import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Gallery from '../src/Gallery';
import {getImages} from '../__mocks__/images';

describe('Gallery', () => {
    it('should render correctly', () => {
        const imageRenderer = () => null;
        const output = shallow(
            <Gallery
                imageRenderer={imageRenderer}
                images={getImages(100, 100, 'eee', 1)}
            />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
