import {  Usuario } from '../components/Usuarios'
import {types} from '../types/types'

export const registro=(id,nombre,email,telefono)=>{
return{
    type: types.Registrar,
    payload:{
        id,
        nombre,
        email,
        telefono
    }
}
}

export const registroEstudiante=(id,nombre,email,telefono)=>{
    return(dispatch)=>{
        console.log(id,nombre, email,telefono)
        dispatch(registro(id,nombre, email,telefono));
    }
}