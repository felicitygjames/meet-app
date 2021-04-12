Feature: Specify Number of Events

    This feature will let users change the amount of events that are listed visually with a number input.

Scenario: When the user hasn't sepcified a number of events, 32 will be the default number
Given the app has loaded
And the user hasn't specified a number of events to view
When the list of events is loaded into the app
Then the number of events listed will be 32

Scenario: A user can change the number of events they want to see
Given the list of events have loaded in the app
When the user selects a number from the event number input
Then the number of events will change to reflect the number selected by the user.