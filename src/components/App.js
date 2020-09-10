import React from 'react';
import SearchBar from './SearchBar';
import WeatherHolder from './WeatherHolder';
import OpenWeatherMap from '../api/OpenWeatherMap.js';

class App extends React.Component {

  state = { forcasts: [] }

  componentDidMount() {
    console.log('component mounted');
  }

  onTermSubmit = async (term, degree, country) => {
    console.log('attempted submit');
    const response = await OpenWeatherMap.get('/search', {
      params: {
        q: term + ',' + country,
        units: degree,
        appid: '7c339de07d4aa0a58250f665c80d5951',
      }
    });
    console.log(response);

    let weatherArray = [];
    let weatherNameList = [];

    const respArr = response.data.list

    for (var i = 0; i < respArr.length; i++) {
      const date = respArr[i].dt_txt;
      const cutDate = date.split(" ")[0];
      console.log(date.split(" ")[0]);

      if (weatherNameList.indexOf(cutDate) !== -1) {
        console.log('weather piece  ' + cutDate + ' already exists!!!');

        let arrRef = weatherArray.find(x => x.dt_txt === cutDate);

        if (arrRef.temp_min > respArr[i].main.temp_min) {
          arrRef.temp_min = respArr[i].main.temp_min;
        }

        if (respArr[i].main.temp_max > arrRef.temp_max) {
          arrRef.temp_max = respArr[i].main.temp_max
        }

      } else {
        weatherArray.push({
          dt_txt: cutDate,
          temp: respArr[i].main.temp,
          temp_max: respArr[i].main.temp_max,
          temp_min: respArr[i].main.temp_min,
          icon: respArr[i].weather[0].icon,
          description: respArr[i].weather[0].description,
          condition: respArr[i].weather[0].main,
          key: respArr[i].dt
        });

        weatherNameList.push(cutDate);
      }
    }

    console.log('logging self built array');
    console.log(weatherArray);

    this.setState({
      forcasts: weatherArray
    })
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="sixteen wide column">
            <WeatherHolder forcasts={this.state.forcasts} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
