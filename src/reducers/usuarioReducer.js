 import {types} from '../types/types'

export const usuarioReducer= (state=[], action)=>{

    switch(action.type){
        case types.Registrar:
    return{
        id: action.payload.id,
        nombre:action.payload.nombre,
        email: action.payload.email,
        telefono: action.payload.telefono
   }
default:return state}
}
