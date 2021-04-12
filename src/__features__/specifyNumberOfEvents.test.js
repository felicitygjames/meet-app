import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/__features__/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper, NumberOfEventsWrapper;
    test('When the user hasn\'t sepcified a number of events, 32 will be the default number', ({ given, and, when, then }) => {
        given('the app has loaded', () => {
            AppWrapper = mount(<App/>);
            NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        });
        and('the user hasn\'t specified a number of events to view', () => {});
        when('the list of events is loaded into the app', () => {
            expect(AppWrapper.find(EventList)).toHaveLength(1);
        });
        then('the number of events listed will be 32', (arg0) => {
            expect(NumberOfEventsWrapper.find('.number-of-events__input').prop('value')).toBe(32);
        });
    });

    test('A user can change the number of events they want to see', ({ given, when, then }) => {
        given('the list of events have loaded in the app', () => {
            AppWrapper = mount(<App/>);
            NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            expect(AppWrapper.find(EventList)).toHaveLength(1);
        });
        when('the user selects a number from the event number input', () => {
            let eventObj = { target: { value: 1 }}
            NumberOfEventsWrapper.find('.number-of-events__input').simulate('change', eventObj);
        });
        then('the number of events will change to reflect the number selected by the user.', () => {
            expect(NumberOfEventsWrapper.state('eventCount')).toBe(1)
        });
    });
})