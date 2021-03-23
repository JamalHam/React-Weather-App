import React from 'react';
import { connect } from 'react-redux';
import { setCity, setCountry, setUnit, fetchWeather } from '../actions';

class SearchBar extends React.Component {
    // state = {
    //     term: '',
    //     degree: 'celsius',
    //     country: 'ca'
    // }

    onInputChange = (event) => {
        //this.setState({ term: event.target.value });
        this.props.setCity(event.target.value);
    }

    onDegreeChange = (event) => {
        //this.setState({ degree: event.target.value });
        this.props.setUnit(event.target.value);
    }

    onCountryChange = (event) => {
        //this.setState({ country: event.target.value });
        this.props.setCountry(event.target.value)
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        //this.props.onFormSubmit(this.state.term, this.state.degree, this.state.country);
        this.props.fetchWeather(this.props.city, this.props.country, this.props.unit)
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>City</label>
                        <input
                            type="text"
                            value={this.props.city}
                            onChange={this.onInputChange}
                            placeholder="Type in your city to get weather!"
                        />
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Unit</label>
                            <select onChange={this.onDegreeChange} className="ui search dropdown">
                                <option value="metric">Celsius</option>
                                <option value="imperial">Fahrenheit</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Country</label>
                            <select onChange={this.onCountryChange} className="ui search dropdown">
                                <option value="CA">Canada</option>
                                <option value="US">United States</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { city: state.weather.city, unit: state.weather.unit, country: state.weather.country, weatherArray: state.weather.weatherArray }
}

export default connect(mapStateToProps, { setCity, setCountry, setUnit, fetchWeather })(SearchBar);
