import React from 'react';

const WeatherCard = ({ forcast }) => {
    const cardStyle = {
        backgroundColor: 'white'
    };

    return (
        <div className="ui card">
            <div className="content">
                <div className="header">Forcast</div>
            </div>
            <div className="image" style={cardStyle}>
                <img src={"https://openweathermap.org/img/wn/" + forcast.weather[0].icon + "@4x.png"} alt={forcast.weather[0].main} />
            </div>
            <div className="content">
                <h4 className="ui sub header">Date: {forcast.dt_txt}</h4>
                <div className="ui small feed">
                    <div className="event">
                        <div className="content">
                            <div className="summary">
                                temp: {forcast.main.temp}
                            </div>
                        </div>
                    </div>
                    <div className="event">
                        <div className="content">
                            <div className="summary">
                                weather: {forcast.weather[0].description}
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
