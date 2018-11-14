import isBrwser from './isBrowser';

if (isBrwser) {
    // eslint-disable-next-line global-require
    require('intersection-observer');
}

export {default as Image} from './Image';
export {default as Gallery} from './Gallery';
export {defaultRenderer} from './Renderer';
