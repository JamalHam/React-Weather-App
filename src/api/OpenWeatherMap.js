import axios from 'axios';

//const KEY = '7c339de07d4aa0a58250f665c80d5951';
const url = 'http://api.openweathermap.org/data/2.5/forecast?';

export default axios.create({
    baseURL: url,
    params: {
        part: 'snippet',
        maxResults: 5
    }
});