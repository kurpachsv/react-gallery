import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import {uglify} from 'rollup-plugin-uglify';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
    },
    external: [
        'react',
        'react-dom',
        'prop-types',
        'lodash.isequal',
    ],
    globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
        'lodash.isequal': 'isEqual',
    },
    plugins: [
        postcss({
            modules: true,
        }),
        resolve(),
        babel({
            exclude: 'node_modules/**',
        }),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        uglify(),
    ],
};
