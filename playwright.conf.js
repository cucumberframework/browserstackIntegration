/** @type {import('@playwright/test').PlaywrightTestConfig} */

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // 👈 set your custom test folder path here
  // other settings
});

const config = {
  testDir: './tests',
  expect: {
    timeout: 30000,
  },
  timeout: 90000,
  fullyParallel: true,
  workers: process.env.CI ? 1 : 3,
  retries: process.env.CI ? 2 : 1,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
};
module.exports = config;
