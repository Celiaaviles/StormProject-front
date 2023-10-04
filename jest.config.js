/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['src/**/*.tsx', 'src/**/*.ts'],
  coveragePathIgnorePatterns: [
    'index.html',
    'app.tsx',
    'main.tsx',
    'logged.ts',
    'token.ts',
    'types.ts',
    'user.model.ts',
    'storm.model.ts',
    'vite-env.d.ts',
    'createstorm.tsx',
    'app.routes.tsx',
  ],
};
