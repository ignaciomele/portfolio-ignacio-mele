export default {
    testEnvironment: 'jsdom',
    testMatch: [
        '**/tests/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test|tests).[tj]s?(x)',
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}