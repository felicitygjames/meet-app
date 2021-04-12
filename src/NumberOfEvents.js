import React, { Component } from 'react';
import { ErrorAlert } from './Alert';
import filter from './img/filter-icon.svg';
import up from './img/up2-icon.svg';
import down from './img/down2-icon.svg';

class NumberOfEvents extends Component {

    state = {
        eventCount: 32,
        infoText: ''
    }

    handleCountChanged = async (event) => {
        const { updateEvents } = this.props;
        const value = event.target.value;
        console.log(value);
        if (value < 1 || value > 32 ) {
            this.setState({
                eventCount: value,
                infoText: "Please select a number between 1 and 32."
            })
        } else {
            this.setState({
                eventCount: value,
                infoText: ''
            })
        }
        await updateEvents(null, value);
    }

    closeAlert = () => {
        this.setState({
            infoText: ''
        })
    }

    render() {
        const { eventCount } = this.state;
        return (
            <div className="event-number__container">
                { this.state.infoText 
                ? <ErrorAlert text={this.state.infoText} close={this.closeAlert} />
                : null }
                <img className="filter_icon" src={filter} alt="filter icon"/>
                <div className="custom-spinners">
                    <img className="arrow" src={up} alt="up"/>
                    <img className="arrow" src={down} alt="down"/>
                </div>
                <input
                    className="number-of-events__input"
                    type="number"
                    id="event-number"
                    value={eventCount}
                    max={32}
                    min={1}
                    onChange={this.handleCountChanged}>
                </input>
            </div>
        )
    }
}

export default NumberOfEvents;