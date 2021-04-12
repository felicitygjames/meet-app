import React, { Component } from 'react';
import loading from './img/loading-icon.png'
import { WarningAlert } from './Alert';
import Event from './Event';

class EventList extends Component {

    state = {
        infoText: ""
    }

    closeAlert = () => {
        this.setState({
            infoText: ''
        })
    }

    checkConnection = () => {
        if (!navigator.onLine) {
            this.setState({
                infoText: "No Internet Connection. Viewing events offline. Connect to internet for updated event list."
            })
        } else {
            this.setState({
                infoText: ''
            })
        }
    }

    componentDidMount() {
        this.checkConnection();
    }

    render() {
        const { events } = this.props;

        return (
            <>
                { this.state.infoText
                ? <WarningAlert text={this.state.infoText} close={this.closeAlert}/>
                : null  
                }
                <h1 className="event-list__title">Events this week ( Next 7 Days )</h1>
                { (!events)
                ? 
                <div className="loading__container">
                    <img src={loading} className="loading-icon" alt="loading icon"/>
                    <h1>Loading Events</h1>
                </div>
                : 
                    <ul className="event-list">
                        {events.map((event) => {
                            return (
                                <li key={event.id}>
                                    <Event event={event}/>
                                </li>
                            )
                        })}
                    </ul>
                }
            </>
        )
    }
}

export default EventList;
