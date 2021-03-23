import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCity, setCountry, setUnit, fetchWeather } from '../actions';
import WeatherCard from './WeatherCard.js';

//const WeatherHolder = ({ forcasts }) => {



class WeatherHolder extends Component {
    render() {
        return (
            <div className='cardHolder'>{this.props.weatherArray.map((forcast) => <WeatherCard key={forcast.key} forcast={forcast} />)}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { city: state.weather.city, unit: state.weather.unit, country: state.weather.country, weatherArray: state.weather.weatherArray }
}

export default connect(mapStateToProps, { setCity, setCountry, setUnit, fetchWeather })(WeatherHolder);