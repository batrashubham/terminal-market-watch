module.exports = {
    roots: ['<rootDir>/tests'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    collectCoverageFrom: ['src/**/*.ts'],
    coverageDirectory: 'coverage',
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
