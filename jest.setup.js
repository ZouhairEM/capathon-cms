import "@testing-library/jest-dom";

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "@happy-dom/jest-environment",
};