
import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {usuarioReducer} from '../reducers/usuarioReducer'


export const composeEnhacers = (typeof window!=='undefined' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_)||compose;

const reducers= combineReducers({
  Usuario:usuarioReducer
})

export const store=createStore(
  reducers,
  composeEnhacers(
    applyMiddleware(thunk)
  )
)