import { CLEAR, GET_FLATS, GET_HOUSES, GET_STREETS, SET_FLAT, SET_HOUSE, SET_STREET, CLEAR_FLATS } from './actions'

const initialState = {
  streets: [],
  houses: [],
  flats: [],
  street: '',
  house: '',
  flat: ''
}


export const inputsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STREETS: return {...state, streets: action.payload};
    case GET_HOUSES: return {...state, houses: action.payload};
    case GET_FLATS: return {...state, flats: action.payload};
    case CLEAR: return {...state, houses: [], flats: []};
    case CLEAR_FLATS: return {...state, flats: []};
    case SET_STREET: return {...state, street: action.payload};
    case SET_HOUSE: return {...state, house: action.payload};
    case SET_FLAT: return {...state, flat: action.payload};
    default: return state;
  }
}