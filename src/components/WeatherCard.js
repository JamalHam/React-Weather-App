import React from 'react';

const WeatherCard = ({ forcast }) => {
    return (
        <div class="ui card">
            <div class="content">
                <div class="header">Forcast</div>
            </div>
            <div class="content">
                <h4 class="ui sub header">Date: {forcast.dt_txt}</h4>
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
                                weather: {forcast.weather.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="extra content">
                <button className="ui button">View Weather API</button>
            </div>
        </div>
    )
}

export default WeatherCard;
