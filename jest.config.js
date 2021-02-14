module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/components$1",
    "^@/pages(.*)$": "<rootDir>/pages$1",
    "^@/utils(.*)$": "<rootDir>/utils$1",
  },
};
