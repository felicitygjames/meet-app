import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import{ mockData } from '../mock-data';
import { extractLocations } from '../api';
 
describe('<CitySearch/> component', () => {
    let CitySearchWrapper, locations;
    beforeAll(() => {
        locations = extractLocations(mockData);
        CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => {}} />);
    })

    test('render text input for searching for cities', () => {
        expect(CitySearchWrapper.find('.city-search__input')).toHaveLength(1);
    })

    test('render search suggestions for cities', () => {
        expect(CitySearchWrapper.find(".city-search__suggestions")).toHaveLength(1);
    })

    test('render text input properly', () => {
        const query = CitySearchWrapper.state('query');
        expect(CitySearchWrapper.find('.city-search__input').prop('value')).toBe(query);
    })

    test('change state when text input changes', () => {
        CitySearchWrapper.setState({
            query: 'Munich'
        });
        const eventObject = { target: { value: 'Berlin' }};
        CitySearchWrapper.find('.city-search__input').simulate('change', eventObject);
        expect(CitySearchWrapper.state('query')).toBe('Berlin');
    })

    test('render list of suggestions correctly', () => {
        CitySearchWrapper.setState({
            suggestions: locations
        });
        const suggestions = CitySearchWrapper.state('suggestions');
        expect(CitySearchWrapper.find('.city-search__suggestions .city-suggestion')).toHaveLength(suggestions.length + 1);
        for ( let i = 0; i < suggestions.length; i += 1) {
            expect(CitySearchWrapper.find('.city-search__suggestions .city-suggestion').at(i).text()).toBe(suggestions[i]);
        }
    })

    test('suggestions list match the query when changed', () => {
        CitySearchWrapper.setState({
            query: '',
            suggestions: []
        });
        CitySearchWrapper.find('.city-search__input').simulate('change', {
            target: { value: 'Berlin' }
        });
        const query = CitySearchWrapper.state('query');
        const filteredLocations = locations.filter((location) => {
            return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
        });
        expect(CitySearchWrapper.state('suggestions')).toEqual(filteredLocations);
    })

    test('selecting a suggestion should change query state', () => {
        CitySearchWrapper.setState({
            query: 'Berlin'
        });
        const suggestions = CitySearchWrapper.state('suggestions');
        CitySearchWrapper.find('.city-search__suggestions .city-suggestion').at(0).simulate('click');
        expect(CitySearchWrapper.state('query')).toBe(suggestions[0]);
    })

    test('selection CitySearch input reveals the suggestions list', () => {
        CitySearchWrapper.find('.city-search__input').simulate('focus');
        expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
        expect(CitySearchWrapper.find('.city-search__suggestions').prop('style')).not.toEqual({ display: 'none'});
    })

    test('selecting a suggestison should hide the suggestions list', () => {
        CitySearchWrapper.setState({
            query: 'Berlin',
            showSuggestions: undefined
        });
        CitySearchWrapper.find('.city-search__suggestions .city-suggestion').at(0).simulate('click');
        expect(CitySearchWrapper.state('showSuggestions')).toBe(false);
        expect(CitySearchWrapper.find('.city-search__suggestions').prop('style')).toEqual({ display: 'none'});
    })

    test('suggestions will appear upon having a focus on city input field', () => {
        CitySearchWrapper.setState({
            query: '',
            suggestions: locations
        });
        CitySearchWrapper.find('.city-search__input').simulate('focus');
        expect(CitySearchWrapper.find('.city-search__suggestions').prop('style')).toEqual({});
    })
})