module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  jest: {
    moduleFileExtensions: [
      "js",
      "json",
      // tell Jest to handle `*.vue` files
      "vue",
    ],
    transform: {
      // process `*.vue` files with `vue-jest`
      ".*\\.(js)$": "babel-jest",
    },
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
    },
  },
};
