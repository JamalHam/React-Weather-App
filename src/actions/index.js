import {
    CITY,
    CARD_DATA,
    COUNTRY,
    UNIT
} from './types';
import OpenWeatherMap from '../api/OpenWeatherMap.js';
import weatherArray from '../weatherArray';

export const setCity = (text) => ({
    type: CITY,
    payload: {
        city: text
    }
});

export const setUnit = (text) => ({
    type: UNIT,
    payload: {
        unit: text
    }
});

export const setCountry = (text) => ({
    type: COUNTRY,
    payload: {
        country: text
    }
});


export const fetchWeather = (city, country, degree) => async dispatch => {
    const response = await OpenWeatherMap.get('/search', {
        params: {
          q: city + ',' + country,
          units: degree,
          appid: '7c339de07d4aa0a58250f665c80d5951',
        }
      });

      console.log('response incoming!------------------------------------');
      console.log(response);
      const wArray = weatherArray(response);

    dispatch({ 
        type: CARD_DATA, 
        payload:  {
            weatherArray: wArray
        }
    });
}