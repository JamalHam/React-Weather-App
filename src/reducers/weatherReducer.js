import {
    CITY,
    CARD_DATA,
    COUNTRY,
    UNIT
} from '../actions/types';

const INITIAL_STATE = {
    city: 'toronto',
    country: 'ca',
    unit: 'metric',
    weatherArray: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CITY:
            return { ...state, city: action.payload.city}
        case COUNTRY:
            return { ...state, country: action.payload.country }
        case UNIT:
            return { ...state, unit: action.payload.unit }
        case CARD_DATA:
            return { ...state, weatherArray: [ ...action.payload.weatherArray ] }
        default:
            return { ...state }
    }
}
    