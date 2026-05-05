Feature: Merchant Successful purchase

Scenario: Merchant purchases a voucher and sees successful message
Given I am on the merchant payment page
When a Merchant makes a purchase
Then the Merchant should see a successful purchase message