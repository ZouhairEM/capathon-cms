## [0.2.5] - 2025-08-21

### Added

- Updated `FaqSection.jsx` to align with the new design.

## [0.2.4] - 2025-08-21

### Added

- Updated `HeroSection.jsx` to align with the new design.

## [0.2.3] - 2025-08-14

### Added

- Added `OrganiserSection.jsx` that shows the current organisers of the Capathon.

## [0.2.2] - 2025-07-24

### Added

- Added `PastEventsSection.jsx` that renders images and description of past events.

## [0.2.1] - 2025-07-10

### Added

- Added `CtaSection.jsx`.

## [0.2.0] - 2025-05-22

### Added

- Connected repo to Contentful.

## [0.1.20] - 2025-05-19

### Added

- Added custom Capathon colors to `styles.css`.

## [0.1.19] - 2025-05-13

### Fixed & added

- Resolved code smells.
- Added `prettier.config.mjs`.
- Added prettier-plugin-tailwindcss plugin.

## [0.1.18] - 2025-05-09

### Added

- Added `HeroSection.jsx` that renders titles and a highlight section.

## [0.1.17] - 2025-05-08

### Fixed

- Enhanced unit test performance in `countdown.test.js`.

## [0.1.16] - 2025-05-08

### Fixed

- Fixed the `db.json` structuring
- Fixed the destructuring in `page.js`

## [0.1.15] - 2025-05-06

### Fixed

- Resolved hydration error in `Countdown.jsx`.

## [0.1.14] - 2025-05-2

### Fixed

- Connected the `FaqSection` component to fetch dynamic header and answer from a local JSON Server.
- Implemented data fetching in `page.js` using `fetch()`.

## [0.1.13] - 2025-04-30

### Added

- Added `signupsection.jsx` which includes text and signUp button.

### Fixed

- Changed body to main for semantic html.
- Added mockdata to `signup.test.js`.

## [0.1.12] - 2025-04-23

### Added

- Added `navbar.jsx` with a logo, navigation menu, and sign-up button.
- Modularized `GetData()` function

## [0.1.11] - 2025-04-18

### Added

- Basic container styling for the main page in `styles.css`.
- Responsiveness classes to container styling & `Countdown.jsx`.

## [0.1.10] - 2025-04-18

### Fixed

- Resolved the issue with lowercase and uppercase component files by explicitly staging and commiting them to Git.

## [0.1.9] - 2025-04-16

### Added

- Faq component
- test for the faq component

### Fixed

- Resolved issues with Tailwing an Reactnative styling
- Resolved issues with CSS parsing issue

## [0.1.8] - 2025-04-11

### Added

- Connected the `Countdown` component to fetch dynamic `targetDate` from a local JSON Server.
- Implemented data fetching in `page.js` using `fetch()`.

### Fixed

- Resolved issues with the countdown test by adding mock date with a static target date.

## [0.1.7] - 2025-04-08

### Added

- Configured Cypress for end-to-end testing.
- Created an E2E test file for the home page.
- Added a test for the visibility of the countdown component.

### Fixed

- Resolved hydration error in the `Countdown` component by initializing state with the correct time.
- Added `endOfLine: "auto"` setting to `eslint.config.mjs` to handle line endings automatically.

## [0.1.6] - 2025-04-03

### Added

- Installed JSON Server.
- Created `db.json`.
- Added script to `package.json` for running JSON Server.

## [0.1.5] - 2025-03-31

### Added

- add prettier to lint
- add npm run test to husky hook

## [0.1.4] - 2025-03-31

### Added

- Implemented countdown component for event timer.
- Styled countdown with a blue theme for better visual appeal.
- Created `countdown.test.js` to verify countdown functionality.

## [0.1.3] - 2015-03-24

### Added

- Typescript config file.

## [0.1.2] - 2025-03-27

### Added

- Added and configured Jest test for component functionality.

## [0.1.1] - 2025-03-25

### Added

- Integrated PrimeReact with Next.js.
- Added PrimeReactProvider to `layout.js`.

### Changed

- Updated `page.js` to include a PrimeReact button for testing.
- Modified `layout.js` to wrap the application with PrimeReactProvider.

## [0.1.0] - 2025-03-14

### Added

- Created initial project with Next.js.
- Installed technical dependencies:
  - Node.js
  - Jest
  - Cypress
  - Storyblok
  - Tailwind CSS
  - ESLint
  - PrimeReact
- Configured initial project structure and environment.
- Added CHANGELOG.md file to track changes.
