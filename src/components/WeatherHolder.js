import React from 'react'
import WeatherCard from './WeatherCard.js';

const WeatherHolder = ({ forcasts }) => {
    const renderedList = forcasts.map((forcast) => {
        return <WeatherCard key={forcast.key} forcast={forcast} />
    });

    return <div className='cardHolder'>{renderedList}</div>
}

export default WeatherHolder;