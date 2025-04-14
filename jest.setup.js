import "@testing-library/jest-dom";

jest.mock("primereact/resources/themes/lara-light-indigo/theme.css", () => {});
jest.mock("primereact/resources/primereact.min.css", () => {});
jest.mock("primeicons/primeicons.css", () => {});

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "@happy-dom/jest-environment",
};