module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ["**/*.test.(ts|tsx)"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    "^.+\\.(ts|js)x?$": "ts-jest"
  },
  "moduleDirectories": [
    "node_modules",
    "src"
  ],
  "moduleNameMapper": {
    "^src/(.*)": "<rootDir>\\src\\$1"
  }
};
