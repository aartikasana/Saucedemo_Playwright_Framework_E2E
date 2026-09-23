# SauceDemo Playwright Automation Framework

This project is a Playwright-based end-to-end automation suite for the SauceDemo website. It follows a Page Object Model (POM) structure and validates a complete purchase flow from login to order confirmation.

## Overview

The test suite covers:
- User login
- Product listing and sorting
- Adding products to the cart
- Cart validation
- Checkout information entry
- Order summary validation
- Order confirmation message

## Prerequisites

Before running the tests, make sure you have:
- Node.js installed
- npm installed
- A browser supported by Playwright

## Installation

From the project root, install dependencies:

```bash
npm install
```

## Running the Tests

Run the full test suite:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/E2EsauceDemo.spec.js
```

Open Playwright's test runner UI:

```bash
npx playwright test --ui
```

Open the HTML report:

```bash
npx playwright show-report
```

## Project Structure

```text
Framework/
├── fixtures/
│   └── myfixtures.js
├── pages/
│   ├── BasePage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── ConfirmationPage.js
│   ├── loginPage.js
│   ├── OrderSummaryPage.js
│   └── ProductPage.js
├── tests/
│   └── E2EsauceDemo.spec.js
├── package.json
├── playwright.config.js
├── playwright-report/
├── test-results/
└── README.md
```

## Test Configuration

The Playwright configuration is defined in `playwright.config.js` and includes:
- Test directory: `./tests`
- Chromium project configuration
- HTML reporter enabled
- Trace capture on first retry

## Fixture Usage

The custom fixture in `fixtures/myfixtures.js` provides a reusable logged-in browser state for tests that start from the authenticated dashboard. This helps reduce duplication across test cases.

## Notes

- The project uses the SauceDemo demo site as its test target.
- The main E2E scenario is implemented in `tests/E2EsauceDemo.spec.js`.
- Page-specific logic is separated into page object classes under `pages/` to keep the tests readable and maintainable.

## License

This project is currently configured with the ISC license in `package.json`.
