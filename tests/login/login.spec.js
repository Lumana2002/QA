// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pageObjects/login.po';
import testData from '../../fixtures/loginFixture.json';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
})

test.describe('Valid login tests', () => {
    test('Login using valid username and password', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(testData.validUser.userName, testData.validUser.password);
        await login.verifyValidation();
    })
})

test.describe('Invalid login tests', () => {
    test('Login using invalid username and valid password', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(testData.invalidUser.userName, testData.validUser.password);
        await login.verifyInvalidLogin();
    });

    test('Login using valid username and invalid password', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(testData.validUser.userName, testData.invalidUser.password);
        await login.verifyInvalidLogin();
    });

    test('Login using invalid username and invalid password', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(testData.invalidUser.userName, testData.invalidUser.password);
        await login.verifyInvalidLogin();
    });

    test('Login using no username and no password and click login', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login("","");
        await login.verifyInvalidLogin();
    });

    test('Login using no username and click on login', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(testData.invalidUser.userName, testData.invalidUser.password);
        await login.verifyInvalidLogin();
    });

    test('Login using invalid username and invalid password', async ({ page }) => {
        const login = new LoginPage(page);
        await login.login(testData.invalidUser.userName, testData.invalidUser.password);
        await login.verifyInvalidLogin();
    });
})



