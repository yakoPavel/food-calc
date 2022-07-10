module.exports = {
  roots: ["./src"],
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1",
  },
  // watchPlugins: [
  //   "jest-watch-typeahead/filename",
  //   "jest-watch-typeahead/testname",
  // ],
};
