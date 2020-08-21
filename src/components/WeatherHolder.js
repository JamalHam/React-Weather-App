import React from 'react'
import WeatherCard from './WeatherCard.js';

const WeatherHolder = ({ forcasts }) => {
    const renderedList = forcasts.map((forcast) => {
        return <WeatherCard forcast={forcast} />
    });

    return <div className='ui relaxed divided list'>{renderedList}</div>
}

export default WeatherHolder;