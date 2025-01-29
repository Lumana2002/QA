import { expect } from "@playwright/test";

exports.ContactPage = class ContactPage{
    constructor(page){
        this.page = page;
        this.addContact = '//button[@id="add-contact"'
        this.firstName = '#firstname';
        this.lastName = '#lastname';
        this.dob = '//input[@placeholder="yyy-MM-dd"]';
        this.email = '//input';
        this.firstName = '#firstname';
        this.firstName = '#firstname';
        this.firstName = '#firstname';
        this.firstName = '#firstname';
    }

    async contactAdd(firstName, lastName, dateOfBirth, email, phone, address){
        await this.page.locator(this.addContact).click();
        await this.page.locator(this.firstName).fill(firstName);
        await this.page.locator(this.lastName).fill(lastName);
        await this.page.locator(this.dob).fill(dateOfBirth);
        await this.page.locator(this.email).fill(email);
        await this.page.locator(this.phone).fill(phone);
        await this.page.locator(this.address).fill(address);
        await this.page.locator(this.city).fill(city);
        await this.page.locator(this.state).fill(state);
        await this.page.locator(this.postal).fill(postal);
        await this.page.locator(this.country).fill(country);
        await this.page.locator(this.Save).click();
        
    }
}