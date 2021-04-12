# Meet App Project Description

To build a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

# User Stories

## Feature 1

### As a USER, I should be able to FILTER EVENTS BY CITY, so that I CAN SEE THE LIST OF EVENTS THAT TAKE PLACE IN THAT CITY.

#### `SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.`
**Given** user hasn’t searched for any city.

**When** the user opens the app.

**Then** the user should see a list of all upcoming events.

#### `SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.`
**Given** the main page is open.

**When** user starts typing in the city textbox.

**Then** the user should see a list of cities (suggestions) that match what they’ve typed.

#### `SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.`
**Given** the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing.

**When** the user selects a city (e.g., “Berlin, Germany”) from the list.

**Then** their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city.

## Feature 2

### As a USER, I should be able to SHOW/HIDE AN EVENTS DETAILS, so that I CAN SEE MORE DETAILS OF A SPECIFIC EVENT OF MY CHOOSING.

#### `SCENARIO 1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT.`
**Given** the list of events have loaded in the app

**When** the user views a specific event

**Then** the event’s details are collapsed by default

#### `SCENARIO 2: USER CAN EXPAND AN EVENT TO SEE ITS DETAILS.`
**Given** a specified event is viewed.

**When** the user clicks the “show/hide details” button and the details are hidden.

**Then** the details of the event will be shown to the user, and button will be changed to hide details.

#### `SCENARIO 3: USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS.`
**Given** a specified event is viewed.

**When** the user clicks the “show/hide details” button and the details are shown.

**Then** the details of the event will be collapsed from view, and button changes to show details.

## Feature 3

### As a USER, I should be able to SPECIFY A NUMBER OF EVENTS TO SHOW, so that I CAN ONLY SHOW A SPECIFIC NUMBER OF EVENTS AT A TIME.

#### `SCENARIO 1: WHEN THE USER HASN’T SPECIFIED A NUMBER, 32 IS THE DEFAULT NUMBER.`
**Given** the list of events have been loaded in the app.

**When** the user doesn’t specify a number of events to be shown.

**Then** the number of events shown to the user is 32.

##### `SCENARIO 2: USERS CAN CHANGE THE NUMBER OF EVENTS THEY WANT TO SEE.`
**Given** the lost of events have been loaded in the app.

**When** the user specifies a number of events to be viewed by selecting option in menu.

**Then** the number selected by the user will be the number of events shown.

## Feature 4

### As a USER, I should be able to USE THE APP WHEN OFFLINE, so that I CAN ACCESS EVENT INFORMATION WHEN I DON'T HAVE AN INTERNET CONNECTION.

#### `SCENARIO 1: SHOW CACHED DATA WHEN THERE’S NO INTERNET CONNECTION.`
**Given** the user has no internet connection.

**When** the user tries to load a list of events cached into the app.

**Then** the cached data will be shown to the user.

#### `SCENARIO 2: SHOW ERROR WHEN A USER CHANGES THE SETTINGS (CITY, TIME RANGE).`
**Given** the user has no internet connection.

**When** the user changes settings (city, time range).

**Then** an error will be shown to the user.

## Feature 5

### As a USER, I should be able to SHOW A CHART OF UPCOMING EVENTS IN EACH CITY, so that I CAN SEE AN OVERALL VIEW OF EVENTS WITHIN EACH CITY.

#### `SCENARIO 1: SHOW A CHART WITH THE NUMBER OF UPCOMING EVENTS IN EACH CITY.`
**Given** the list of events have been loaded in the app.

**When** the user clicks on the button to view chart of events.

**Then** a chart with number of visits in each city will be shown to the user.



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
