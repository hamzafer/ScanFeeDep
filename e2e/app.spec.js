import { test, expect } from '@playwright/test';

test('renders app', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));

  await page.goto('/');

  await expect(page.getByRole('heading', { name: /welcome to/i })).toBeVisible();
  await expect(page.locator('#root')).not.toBeEmpty();
  expect(errors).toEqual([]);
});
