module.exports = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/*.{js,jsx}'],
    setupFiles: ['./__test__/raf.js', './__test__/setup.js'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less)$': 'identity-obj-proxy',
    },
};
