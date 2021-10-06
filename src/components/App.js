import React from 'react';
import SearchBar from './SearchBar';
import WeatherHolder from './WeatherHolder';
import OpenWeatherMap from '../api/OpenWeatherMap.js';

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <SearchBar />
        <div className="ui grid">
          <div className="sixteen wide column">
            <WeatherHolder />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
