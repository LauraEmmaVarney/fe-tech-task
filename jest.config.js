module.exports = {
  "moduleFileExtensions": [
    "js",
    "json",
    "vue"
  ],
  "transform": {
    ".*\\.(vue)$": "vue-jest",
    ".*\\.(js)$": "babel-jest"
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/resources/js"
  },
  verbose: true,
  testEnvironment: 'jsdom',
  "snapshotSerializers": ["jest-serializer-vue"]
};