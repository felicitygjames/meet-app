import React, { Component } from 'react';
import location from './img/location-icon.svg';
import calendar from './img/calendar-icon.svg';
import up from './img/up-icon.svg';
import down from './img/down-icon.svg';

class Event extends Component {

    state = {
        isExpanded: false
    }

     handleExpandEvent = () => {
        if (this.state.isExpanded) {
            this.setState({
                isExpanded: false
            })
        } else {
            this.setState({
                isExpanded: true
            })
        }
    }

    render() {
        const { isExpanded } = this.state;
        const { event } = this.props;
        return (
            <div className="event-item__container" tabIndex={0}>
                <div className="event-data__collapsed">
                    <div className="event-data__flex">
                        <h1>{event.summary}</h1>
                        <div className="date__container">
                            <img className="date_icon" src={calendar} alt="calendar icon"/>
                            <p>{new Date(event.start.dateTime).toLocaleDateString(
                                'en-gb', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'utc'})}
                            </p>
                        </div>
                    </div>
                    <div className="location__container">
                        <img className="location_icon" src={location} alt="location icon"/>
                        <p>{event.location}</p>
                    </div>
                    
                </div>
                { isExpanded ? <div className="event-data__expanded">
                    <div className="line"/>
                    <p>{event.description}</p>
                    <a href={event.htmlLink} target="_blank" rel="noreferrer">See details on Google Calender</a>
                </div> : null}
                <div className="more-less__button" onClick={this.handleExpandEvent}>
                    <img src={isExpanded ? up : down} alt="caret"/>
                    <button className="event-item__details-button">
                        {isExpanded ? "Less" : "More"}
                    </button>
                </div>
            </div>
        )
    }
}

export default Event;


