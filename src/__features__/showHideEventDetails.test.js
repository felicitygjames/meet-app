import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/__features__/showHideEventDetails.feature');

defineFeature(feature, test => {
    let AppWrapper, EventListWrapper, EventWrapper, expandButton;

    test('An event item is collapsed by default.', ({ given, when, then }) => {
        given('the list of events have loaded in the app', () => {
            EventListWrapper = mount(<EventList events={mockData} />)
            expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
        });
        when('the user views a specific event', () => {});
        then('the event\'s details are collapsed by default', () => {
            EventWrapper = mount(<Event event={mockData[0]}/>);
            expect(EventWrapper.state('isExpanded')).toBe(false);
        });
    });
    
    test('A user can expand an event to see it\'s details', ({ given, when, and, then }) => {
        
        given('a specified event is viewed', () => {
            EventListWrapper = shallow(<EventList events={mockData} />);
            expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
        });
        and('the details of the specified event are hidden', () => {
            EventWrapper = mount(<Event event={mockData[0]}/>);
            EventWrapper.setState({
                isExpanded: false
            })
        });
        when('the user clicks the "show/hide details" button', () => {
            expandButton = EventWrapper.find('.event-item__details-button');
            expandButton.simulate('click');
        });
        then('the details of the event will be expanded from view', () => {
            expect(EventWrapper.state('isExpanded')).toBe(true);
        });
        and('the button text changes to "hide details"', () => {
            expect(expandButton.html()).toContain("Hide Details");
        });
    });

    test('A user can collapse an event to hides it\'s details', ({ given, when, and, then }) => {
        given('a specified event is viewed', () => {
            EventListWrapper = shallow(<EventList events={mockData} />);
            expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
        });
        and('the details of the specified event are shown', () => {
            EventWrapper = mount(<Event event={mockData[0]}/>);
            EventWrapper.setState({
                isExpanded: true
            })
        });
        when('the user clicks the "show/hide details" button', () => {
            expandButton = EventWrapper.find('.event-item__details-button');
            expandButton.simulate('click');
        });
        then('the details of the event will be collapsed from view', () => {
            expect(EventWrapper.state('isExpanded')).toBe(false);
        });
        and('the button text changes to "show details"', () => {
            expect(expandButton.html()).toContain("Show Details")
        });
    });
})