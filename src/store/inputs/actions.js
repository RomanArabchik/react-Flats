export const GET_STREETS = 'GET_STREETS'
export const GET_HOUSES = 'GET_HOUSES'
export const GET_FLATS = 'GET_FLATS'
export const CLEAR = 'CLEAR'
export const CLEAR_FLATS = 'CLEAR_FLATS'
export const SET_STREET = 'SET_STREET'
export const SET_HOUSE = 'SET_HOUSE'
export const SET_FLAT = 'SET_FLAT'

export const getStreets = (streets) =>({type: GET_STREETS, payload: streets})
export const getHouses = (houses) =>({type: GET_HOUSES, payload: houses})
export const getFlats = (flats) =>({type: GET_HOUSES, payload: flats})
export const setStreet = (value) => ({type: SET_STREET, payload: value})
export const setHouse = (value) => ({type: SET_HOUSE, payload: value})
export const setFlat = (value) => ({type: SET_FLAT, payload: value})
export const clear = () => ({type: CLEAR})
export const clearFlats = () => ({type: CLEAR_FLATS})
