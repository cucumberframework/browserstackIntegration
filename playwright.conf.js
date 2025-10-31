/** @type {import('@playwright/test').PlaywrightTestConfig} */

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // 👈 set your custom test folder path here
  // other settings
});

const config = {
  testDir: './tests',
  expect: {
    timeout: 30000, // Set the timeout for expect assertions to 10 seconds (in milliseconds)
  },
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
};

module.exports = config;
