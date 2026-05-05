import { Given, When, Then } from '@cucumber/cucumber'
import {expect} from '@playwright/test'

Given('I am on the merchant payment page', async function(){
    await this.page.goto('https://quality-engineering-labs.vercel.app/payment.html')
})

When('a Merchant makes a purchase', async function(){
    await this.page.getByTestId('input-phone').fill('0821234567')
    await this.page.getByTestId('select-product').selectOption('Airtime')
    await this.page.getByTestId('select-provider').selectOption('MTN')
    await this.page.getByTestId('quick-R50').click()
    await this.page.getByRole('button', { name: 'Process Sale' }).click()
})

Then('the Merchant should see a successful purchase message', async function(){
    await expect (this.page.getByText('Sale Processed Successfully!')).toBeVisible()
});
