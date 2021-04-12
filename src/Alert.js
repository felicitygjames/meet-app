import React, { Component } from 'react';
import info from './img/info-icon.svg';
import alert from './img/alert-icon.svg';
import connection from './img/connection-icon.svg';
import close from './img/close-icon.svg';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        this.source = ''
    }

    getStyle = () => {
        return {
            backgroundColor: this.color
        }
    }

    render() {
        return (
            <div style={this.getStyle()} className="alert-container">
                <img src={this.source} alt="alert icon"/>
                <p>{this.props.text}</p>
                <img onClick={this.props.close} src={close} className="alert_close" alt="close icon" />
            </div>
        )
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#647D9B';
        this.source = info;
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#C08326';
        this.source = connection
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#7E2121';
        this.source = alert
    }
}


export { InfoAlert, WarningAlert, ErrorAlert };