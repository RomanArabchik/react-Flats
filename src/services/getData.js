import axios from 'axios'
import { getFlats, getHouses, getStreets } from '../store/inputs/actions'

const baseUrl = 'https://dispex.org/api/vtest/Request'

function uniqueBy(arr, cond) {
  return arr.filter((e, i) => arr.findIndex(e2 => cond(e, e2)) === i);
}

function onlyFlats (item) {
  if (item.typeName === 'Квартира') {
    return item
  } 
}

export const requestStreets = () => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/streets`)
    const uniqStreets = uniqueBy(response.data, (o1, o2) => o1.name === o2.name)
    const streetsArr = uniqStreets.map(item => {return {label: item.name, id: item.id}})
    dispatch(getStreets(streetsArr))
  }
}

export const requestHouses = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/houses/${id}`)
    const housesArr = response.data.map(item => {return {label: item.name, id: item.id}})
    dispatch(getHouses(housesArr))
  }
}

export const requestFlats = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/house_flats/${id}`)
    const flats = response.data.filter((item )=> onlyFlats(item))
    const flatsArr = flats.map(item => {return {label: item.name, id: item.id}})
    dispatch(getFlats(flatsArr))
  }
}