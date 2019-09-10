const { createJestConfig } = require('create-react-styleguide');

module.exports = createJestConfig({
    /* your own config shallowly merged */
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
        '@testing-library/react/cleanup-after-each',
        'jest-styled-components',
    ],
});
