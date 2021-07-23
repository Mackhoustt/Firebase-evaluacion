//import { configureStore } from '@reduxjs/toolkit';

//import {applymiddleware, combineReducers, createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {Usuario} from '../reducers/usuarioReducer'


export const composeEnhacers = (typeof window!=='undefined' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_)||compose;

const reducers= combineReducers({
  usuario:usuarioReducer
})

export const store=createStore(
  reducers,
  composeEnhacers(
    applyMiddleware(thunk)
  )
)