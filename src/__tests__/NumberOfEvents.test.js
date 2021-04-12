import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import {mockData} from '../mock-data';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
    })


    test('render of number of events', () => {
        expect(NumberOfEventsWrapper).toHaveLength(1);
    });

    test('render number of events properly reflected in the state', () => {
        expect(NumberOfEventsWrapper.find('.number-of-events__input').prop('value')).toBe(NumberOfEventsWrapper.state('eventCount'))
    });

    test('change state when the number value changes', () => {
        NumberOfEventsWrapper.setState({
            eventCount: 2
        });
        const eventObject = { target : { value: 1 }}; 
        NumberOfEventsWrapper.find('.number-of-events__input').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('eventCount')).toBe(1);
    })
})