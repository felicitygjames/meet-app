import React, { Component } from 'react';
import { InfoAlert } from './Alert';
import search from './img/search-icon.svg';

class CitySearch extends Component {

    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined,
        infoText: ""
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if ( suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: "We can't find the city you are looking for. Please try another city."
            })
        } else {
            this.setState({
                query: value,
                suggestions,
                infoText: ""
            });
        }
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            suggestions: [],
            showSuggestions: false,
            infoText: ""
        })
        this.props.updateEvents(suggestion);
    }

    closeAlert = () => {
        this.setState({
            infoText: ''
        })
    }

    render() {
        const { query, suggestions, showSuggestions } = this.state;
        return (
            <div className="city-search__container">
                { this.state.infoText 
                ? <InfoAlert text={this.state.infoText} close={this.closeAlert}/>
                : null }
                <img className="search_icon" src={search} alt="search icon"/>
                <input 
                    onChange={this.handleInputChanged} 
                    type="text" 
                    className="city-search__input"
                    placeholder="Search"
                    value={query}
                    onFocus={() => this.setState({showSuggestions: true})}
                    >
                </input>
                <ul 
                    className="city-search__suggestions"
                    style={showSuggestions ? {} : { display: 'none'}}>
                    {suggestions.map((suggestion) => {
                        return (
                            <li 
                                key={suggestion} 
                                className="city-suggestion"
                                onClick={() => this.handleItemClicked(suggestion)}
                                value={suggestion}
                                >{suggestion}
                            </li>
                        )
                    })}
                    <li 
                        key="all"  
                        className="city-suggestion last"
                        onClick={() => this.handleItemClicked('all')}>
                        <b>See All Cities</b>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CitySearch;