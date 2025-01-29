import { test } from '@playwright/test';
import { LoginPage } from '../../pageObjects/login.po';
import { ContactPage } from '../../pageObjects/contact.po';
const testData = require('../../fixtures/contactFixture.json');
const contacTestData = require('../../fixtures/contactFixture.json');
// const { authenticateUser, createEntity, deleteEntity, getEntity, validateEntity }
// let accessToken;

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('/');
    await login.login(testData.validateUser.useName, testData.validUser.password);
    await login.verifValidLogin();
})

test.describe('Contact testcases', () => {
    test('Contact Add test', async ({ page, context, request }) => {
        const contact = new ContactPage(page);
        await contact.contactAdd(contactTestData.contact.firstName);
        await contact.viewContact();
        await contact.validateContactCreated(contactTestData.contact.firstName);
        accessToken = await authenticateUser(testData.validUser.userName);
    })
})