export default {
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'node',
  coverageProvider: 'v8',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)']
}
