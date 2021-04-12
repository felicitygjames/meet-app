import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event/> component', () => {
    const event = {
        kind: 'calendar#event',
        etag: '"3181161784712000"',
        id: '4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z',
        status: 'confirmed',
        htmlLink: 'https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20',
        created: '2020-05-19T19:17:46.000Z',
        updated: '2020-05-27T12:01:32.356Z',
        summary: 'Learn JavaScript',
        description: 'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.',
        location: 'London, UK',
        creator: {
          email: 'fullstackwebdev@careerfoundry.com',
          self: true
        },
        organizer: {
          email: 'fullstackwebdev@careerfoundry.com',
          self: true
        },
        start: {
          dateTime: '2020-05-19T16:00:00+02:00',
          timeZone: 'Europe/Berlin'
        },
        end: {
          dateTime: '2020-05-19T17:00:00+02:00',
          timeZone: 'Europe/Berlin'
        },
        recurringEventId: '4eahs9ghkhrvkld72hogu9ph3e',
        originalStartTime: {
          dateTime: '2020-05-19T16:00:00+02:00',
          timeZone: 'Europe/Berlin'
        },
        iCalUID: '4eahs9ghkhrvkld72hogu9ph3e@google.com',
        sequence: 0,
        reminders: {
          useDefault: true
        }
      };
    
    let EventWrapper, expandButton, eventContainer;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={event}/>);
        eventContainer = EventWrapper.find('.event-item__container');
        expandButton = EventWrapper.find('.event-item__details-button');
    })

    test('render expand event button', () => {
        expect(expandButton).toHaveLength(1);
    })

    test('render event basic information', () => {
        expect(eventContainer.find('.event-data__collapsed')).toHaveLength(1);
    })

    test('state is changed when button is clicked', () => {
        EventWrapper.setState({
            isExpanded: false
        })
        expandButton.simulate('click');
        expect(EventWrapper.state('isExpanded')).toBe(true);
    })

    test('render extra information when button is clicked and state is changed to true', () => {
        EventWrapper.setState({
            isExpanded: false
        })
        expandButton.simulate('click');
        expect(EventWrapper.find('.event-data__expanded')).toHaveLength(1);
    })

    test('hide extra information when button is clicked and state is changed to false', () => {
        EventWrapper.setState({
            isExpanded: true
        })
        expandButton.simulate('click');
        expect(EventWrapper.find('.event-data__expanded')).toHaveLength(0);
    })
})