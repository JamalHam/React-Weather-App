import React from 'react';
import SearchBar from './SearchBar';
import WeatherHolder from './WeatherHolder';
import OpenWeatherMap from '../api/OpenWeatherMap.js';

class App extends React.Component {

  state = { forcasts: [] }

  componentDidMount() {
    console.log('component mounted');
  }

  onTermSubmit = async (term) => {
    console.log('attempted submit');
    const response = await OpenWeatherMap.get('/search', {
      params: {
        q: term,
        appid: '7c339de07d4aa0a58250f665c80d5951'
      }
    });
    console.log(response);

    this.setState({
      forcasts: response.data.list
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
