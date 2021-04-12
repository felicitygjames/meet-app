import puppeteer from 'puppeteer';

describe('filter a list of events', () => {
    let browser, page;
    beforeAll(async () => {
        jest.setTimeout(3000000000);
        browser = await puppeteer.launch({
            // headless: false,
            // slowMo: 500,
            // ignoreDefaultArgs: ['--disable-extensions']
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/', {
            waitUntil: 'load',
            timeout: 0
        });
    });
    afterAll(async () => {
        browser.close();
    });
    test('When a user hasn\'t searched for a city, show upcoming events from all cities.', async () => {
        const searchInput = await page.$('.city-search__container');
        const events = await page.$('.event-list');
        expect(await searchInput.$$eval('.city-search__input', el => el.innerText)).toEqual(undefined);
        expect(await events.$$eval('.event-item__container', el => el.length)).toBe(2);
    });
    test('User should see a list of suggestions when they search for a city.', async () => {
        const query = 'Berlin'
        await page.type('.city-search__input', query);
        const suggestions = await page.$('.city-search__suggestions');
        expect( await suggestions.$$eval('.city-suggestion', el => el.length)).toBe(2);
    });
    test('User can select a city from the suggested list.', async () => {
        const suggestion = 'Berlin, Germany';
        const input = await page.$('.city-search__input');
        input.click();
        await page.click('.city-suggestion:first-child');
        expect(await page.$eval('.city-search__input', el => el.value)).toBe(suggestion);
        const events = await page.$('.event-list');
        expect(await events.$$eval('.event-item__container', el => el.length)).toBe(1);
    })

})

describe('show/hide an event details', () => {
    let browser, page;
    beforeAll(async () => {
        jest.setTimeout(300000);
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event-item__container');
    })
    afterAll(async () => {
        browser.close();
    })
    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event-item__container .event-data__expanded');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event-item__container .event-item__details-button');
        const eventDetails = await page.$('.event-item__container .event-data__expanded');
        expect(eventDetails).toBeDefined();
        expect(await page.$eval('.event-item__details-button', el => el.innerText)).toBe('Hide Details');
    });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.event-item__container .event-item__details-button');
        const eventDetails = await page.$('.event-item__container .event-data__expanded');
        expect(eventDetails).toBeNull();
        expect(await page.$eval('.event-item__details-button', el => el.innerText)).toBe('Show Details');
    })
})

describe('specify a number of events', () => {
    let browser, page;
    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.number-of-events__input');
        await page.waitForSelector('.event-list');
    });
    afterAll(async () => {
        browser.close();
    });
    test('When the user hasn\'t sepcified a number of events, 32 will be the default number', async () => {
        expect(await page.$eval('#event-number', el => el.value)).toEqual("32");
    });
    test('A user can change the number of events they want to see', async () => {
        await page.$eval('#event-number', el => el.value = 1);
        expect(await page.$eval('#event-number', el => el.value)).toEqual("1");
    })
})