import {types} from '../types/types'
import {db} from '../firebase/firebaseConfig'


export const registroUsuarios=(id,nombre,email,telefono)=>{
    
return async (dispatch)=>{
    const nuevoUsuario={
       id: id,
        nombre:nombre,
        email:email,
        telefono: telefono
    }
   await db.collection('/Usuario').add(nuevoUsuario);
   console.log(id,nombre, email,telefono)
   dispatch(registro(id,nombre, email,telefono));
}
      
    
}
export const registro = (id,nombre, email,telefono)=>{
    return{
        type: types.Registrar,
        payload:{ 
         id,
        nombre,
        email,
        telefono}
    }
}