import React from 'react';

const WeatherCard = ({ forcast }) => {
    const cardStyle = {
        backgroundColor: 'white'
    };

    //date text
    const readableDate = (dateText) => {
        const date = new Date(dateText);
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
        const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);

        return `${month}-${day}-${year}`
    }

    //const KELVIN = 273;

    return (
        <div className="weatherCard">
            <div className="image" style={cardStyle}>
                <img src={'/icons/' + forcast.icon + ".svg"} alt={forcast.condition} />
            </div>
            <div className="content">
                <h4 className="cardHeading">{readableDate(forcast.dt_txt)}</h4>
                <div className="event">
                    <div className="content">
                        <div className="summary">
                            Hi/Low: {forcast.temp_max} &#176;/{forcast.temp_min} &#176;
                        </div>
                    </div>
                </div>
                <div className="event">
                    <div className="content">
                        <div className="summary">
                            {forcast.description}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WeatherCard;
