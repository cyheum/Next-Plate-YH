import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['.yarn', '<rootDir>/'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '@/components': '<rootDir>/src/components/index.ts',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/styles': '<rootDir>/src/styles/index.ts',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/hooks': '<rootDir>/src/hooks/index.ts',
    '^@/store/(.*)$': '<rootDir>/src/store/$1',
    '^@/store': '<rootDir>/src/store/index.ts',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/utils': '<rootDir>/src/utils/index.ts',
  },
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: ['<rootDir>/.yarn/'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
};

export default createJestConfig(customJestConfig);
