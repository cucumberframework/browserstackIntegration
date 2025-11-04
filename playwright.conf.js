// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  expect: {
    timeout: 30000,
  },
  timeout: 90000,
  fullyParallel: true,
  workers: process.env.CI ? 1 : 3,
  retries: process.env.CI ? 2 : 1,

  // ✅ Add reporters here
  reporter: [
    ['list'],
    ['junit', { outputFile: 'test-results/results.xml' }]
  ],

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },
});
