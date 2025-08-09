import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('button', { name: ' My account' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('likithasaran@gmail.com');
  await page.getByRole('textbox', { name: 'E-Mail Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Likimammu@10');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByRole('textbox', { name: 'Last Name*' }).click();
  await page.getByRole('textbox', { name: 'Telephone*' }).click();
  await page.getByRole('textbox', { name: 'Telephone*' }).click();
  await page.getByRole('textbox', { name: 'Telephone*' }).fill('8547961256');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: ' My account' }).click();
  await page.getByRole('button', { name: ' My account' }).click();
  await page.getByRole('button', { name: ' My account' }).click();
  await page.getByRole('link', { name: ' My Account' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
});