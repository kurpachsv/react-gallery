import './raf';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;

// eslint-disable-next-line no-console
console.error = message => {
    throw new Error(message);
};
