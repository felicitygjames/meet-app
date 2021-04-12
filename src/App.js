import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import './App.scss';
import './Media-Queries.scss';
import { getEvents, extractLocations } from './api';
import logo from './img/logo.svg';
import PieGraph from './PieGraph';
import ScatterGraph from './ScatterGraph';

class App extends Component {
  constructor() {
    super()

    this.state = {
      events: [],
      locations: [],
      eventNumber: 32,
      currentLocation: 'all'
    }
  }
 
  getScatterData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(',').shift();
      return { city, number };
    })
    return data;
  }

  getPieData = () => {
    const programs = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const { events } = this.state;
    const data = programs.map((program) => {
      const value = events.filter((event) => event.summary.includes(program)).length;
      return {name: program, value}
    });
    return data;
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      const { eventNumber } = this.state;
      if (this.mounted) {
        const filteredEvents = events.slice(0, eventNumber);
        this.setState({
          events: filteredEvents,
          locations: extractLocations(events)
        })
      }
    });
  }

  

  updateEvents = (location, eventCount) => {
    const { currentLocation, eventNumber } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents = (location === 'all') 
        ? events 
        : events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, eventNumber);
        this.setState({
          events: filteredEvents,
          currentLocation: location
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents = (currentLocation === 'all') 
        ? events 
        : events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          eventNumber: eventCount
        });
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { events, locations, eventNumber } = this.state;
    return (
      <div className="App">
        <div className="app__navigation-bar">
            <div className="logo__container">
              <img className="logo" src={logo} alt="meet up logo"/>
            </div>
            <div className="nav-inputs__container">
                <CitySearch locations={locations} updateEvents={this.updateEvents}/>
                <NumberOfEvents eventNumber={eventNumber} updateEvents={this.updateEvents} />
            </div>
        </div>
        <div className="data-visualization__container">
          <h1>Data Visualization</h1>
          <div className="charts__container">
            <PieGraph data={this.getPieData()} />
            <ScatterGraph data={this.getScatterData()} />
          </div>
        </div>
        
        
        <EventList events={events}/>
      </div>
    )
  }
}

export default App;
