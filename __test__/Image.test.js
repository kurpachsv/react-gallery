import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import Image from '../src/Image';

describe('Image', () => {
    it('should render correctly', () => {
        const output = shallow(
            <Image
                src="mockUrl"
                alt="mockTitle"
            />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
