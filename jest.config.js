module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/tests', '<rootDir>/src'],
    testMatch: [
        '**/tests/**/*.(ts|tsx|js)',
        '**/__test__/**/*.(ts|tsx|js)',
        '**/*.(test|spec).(ts|tsx|js)',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/dist/',
        'setupTests.ts'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    collectCoverageFrom: [
        'src/**/*.(ts|tsx)',
        '!src/**/*.d.ts'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'html'],
    moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/src/$1'
    }
};