import React from 'react'
import WeatherCard from './WeatherCard.js';

const WeatherHolder = ({ forcasts }) => {
    const renderedList = forcasts.map((forcast) => {
        return <WeatherCard key={forcast.dt} forcast={forcast} />
    });

    return <div className='ui cards'>{renderedList}</div>
}

export default WeatherHolder;