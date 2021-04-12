import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/__features__/filterEventsByCity.feature');

defineFeature(feature, test => {
    let AppWrapper, CitySearchWrapper, locations;
    test('When a user hasn\'t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
        given('user hasn\'t searched for any city', () => {});
        when('the user opens the app', () => {
            AppWrapper = mount(<App/>);
        });
        then('the user should see a list of upcoming events', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event-item__container')).toHaveLength(mockData.length);
        });
    });

    test('User should see a list of suggestions when they search for a city.', ({ given, when, then }) => {
        given('the main page is open', () => {
            locations = extractLocations(mockData);
            CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />);
        });
        when('the user starts typing in the city textbox', () => {
            CitySearchWrapper.find('.city-search__input').simulate("change", { target: { value: "Berlin"}})
        });
        then('the user should receive a list of cities (suggestions) that match what they\'ve typed', () => {
            expect(CitySearchWrapper.find('.city-search__suggestions .city-suggestion')).toHaveLength(2);
        });
    });

    test('User can select a city from the suggested list.', ({ given, and, when, then }) => {
        given('user was typing "Berlin" in the city textbox', async () => {
            AppWrapper = await mount(<App/>);
            AppWrapper.find('.city-search__input').simulate("change", { target: { value: "Berlin"}})
        });
        and('the list of suggested cities is showing', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.city-search__suggestions .city-suggestion')).toHaveLength(2);
        });
        when('the user selects a city (e.g. "Berlin, Germany") from the list', () => {
           AppWrapper.find('.city-search__suggestions .city-suggestion').at(0).simulate('click');
        });
        then('their city should be changed to that city (i.e., "Berlin, Germany")', () => {
            const CitySearchWrapper = AppWrapper.find(CitySearch);
            expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
        });
        and('the user should receive a list of upcoming events in that city', () => {
            expect(AppWrapper.find('.event-item__container')).toHaveLength(mockData.length);
        });
    });
})