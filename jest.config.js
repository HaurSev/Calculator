export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["node_modules/(?!(your-module-to-transform)/)"],
};
