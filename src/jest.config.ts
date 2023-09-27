import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  testMatch: [
    '**/tests/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test|tests).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};

export default config;