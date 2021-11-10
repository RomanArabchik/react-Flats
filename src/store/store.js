import {createStore, applyMiddleware} from 'redux';
import { inputsReducer } from './inputs/reducer'
import thunk from 'redux-thunk';


export const store = createStore(inputsReducer, applyMiddleware(thunk))