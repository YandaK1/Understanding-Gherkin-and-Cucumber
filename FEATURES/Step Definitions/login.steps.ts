import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test'

Given('I am on the merchant login page', async function () {
    await this.page.goto('/login.html')
});

When('I sign in with valid merchant credentials', async function () {
    await this.page.getByPlaceholder('Enter merchant username').fill('admin')
    await this.page.getByPlaceholder('Enter password').fill('password123')
    await this.page.getByRole('button', { name: 'Sign In' }).click()
});

 

Then('I should stay on the login page and see the welcome message', async function () {
    await expect(this.page).toHaveURL(/login.html/);
    await expect(this.page.getByText('Welcome back, Admin')).toBeVisible();
});