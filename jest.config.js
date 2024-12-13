module.exports = {
  preset: "jest-expo",
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["ts", "tsx", "js"],
  coverageReporters: ["text", "lcov", "clover", "html"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
};
