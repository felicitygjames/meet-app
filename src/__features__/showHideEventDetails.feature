Feature: Show and Hide Event Details

Scenario: An event item is collapsed by default.
Given the list of events have loaded in the app
When the user views a specific event
Then the event's details are collapsed by default

Scenario: A user can expand an event to see it's details
Given a specified event is viewed
And the details of the specified event are hidden
When the user clicks the "show/hide details" button
Then the details of the event will be expanded from view
And the button text changes to "hide details"

Scenario: A user can collapse an event to hides it's details
Given a specified event is viewed
And the details of the specified event are shown
When the user clicks the "show/hide details" button
Then the details of the event will be collapsed from view
And the button text changes to "show details"