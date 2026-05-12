import { test, expect } from '@playwright/test';

const TEST_USER_EMAIL = process.env.TEST_USER_EMAIL;
const TEST_USER_PASSWORD = process.env.TEST_USER_PASSWORD;

test.describe('Authentication flows (E2E)', () => {
  test('LOGIN PAGE VISIBLE — shows email, password and submit button', async ({ page }) => {
    await page.goto('/login');

    // Prefer role-based textbox lookups; fall back to label if needed.
    const emailInput = page.getByRole('textbox', { name: /email/i }).first();
    const passwordInput = page.getByRole('textbox', { name: /password/i }).first();
    const submit = page.getByRole('button', { name: /sign in/i });

    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(submit).toBeVisible();
  });

  test('REDIRECT AFTER LOGIN — successful login redirects to dashboard or projects', async ({ page }) => {
    test.skip(!TEST_USER_EMAIL || !TEST_USER_PASSWORD, 'Skipping credentialed test: set TEST_USER_EMAIL and TEST_USER_PASSWORD');

    await page.goto('/login');

    // Fill using best-available role-based locators
    await page.getByRole('textbox', { name: /email/i }).fill(TEST_USER_EMAIL!);
    await page.getByRole('textbox', { name: /password/i }).fill(TEST_USER_PASSWORD!);

    await Promise.all([
      page.waitForURL((url) => url.pathname === '/' || url.pathname.startsWith('/projects')),
      page.getByRole('button', { name: /sign in/i }).click(),
    ]);

    // Verify landing path is either root dashboard or /projects
    await expect(page).toHaveURL(/(^.*(\/|\/projects)(\/?$))/);
  });

  test('SIDEBAR NAVIGATION — after login sidebar shows Overview, Projects, Settings', async ({ page }) => {
    test.skip(!TEST_USER_EMAIL || !TEST_USER_PASSWORD, 'Skipping credentialed test: set TEST_USER_EMAIL and TEST_USER_PASSWORD');

    await page.goto('/login');
    await page.getByRole('textbox', { name: /email/i }).fill(TEST_USER_EMAIL!);
    await page.getByRole('textbox', { name: /password/i }).fill(TEST_USER_PASSWORD!);

    await Promise.all([
      page.waitForURL((url) => url.pathname === '/' || url.pathname.startsWith('/projects')),
      page.getByRole('button', { name: /sign in/i }).click(),
    ]);

    // Sidebar links are rendered as anchors with visible text
    const overviewLink = page.getByRole('link', { name: /overview/i });
    const projectsLink = page.getByRole('link', { name: /projects/i });
    const settingsLink = page.getByRole('link', { name: /settings/i });

    await expect(overviewLink).toBeVisible();
    await expect(projectsLink).toBeVisible();
    await expect(settingsLink).toBeVisible();
  });
});
