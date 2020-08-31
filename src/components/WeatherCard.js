import React from 'react';

const WeatherCard = ({ forcast }) => {
    const cardStyle = {
        backgroundColor: 'white'
    };

    //const KELVIN = 273;

    return (
        <div className="ui card">
            <div className="content">
                <div className="header">Forcast</div>
            </div>
            <div className="image" style={cardStyle}>
                <img src={"https://openweathermap.org/img/wn/" + forcast.icon + "@4x.png"} alt={forcast.condition} />
            </div>
            <div className="content">
                <h4 className="ui sub header">Date: {forcast.dt_txt}</h4>
                <div className="ui small feed">
                    <div className="event">
                        <div className="content">
                            <div className="summary">
                                temp: {forcast.temp_min} &#176;/{forcast.temp_max} &#176;
                            </div>
                        </div>
                    </div>
                    <div className="event">
                        <div className="content">
                            <div className="summary">
                                weather: {forcast.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="extra content">
                <button className="ui button">View Weather API</button>
            </div>
        </div >
    )
}

export default WeatherCard;
