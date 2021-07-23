import React from 'react'
import {Form, Button} from 'react-bootstrap';
import {useForm} from '../hooks/useForm'

import {registroUsuarios} from '../actions/actions'
import { useDispatch } from 'react-redux';
export const Usuario =()=>{
    const dispatch=useDispatch();
    const [formValues, handleInputChange, reset]= useForm({
        id:'',
        nombre:'',
        email:'',
        telefono:''
    });
    const {id,nombre,email,telefono}=formValues;
    
    const handleRegistro=(e)=>{
        e.preventDefault();
        console.log(id,nombre,email,telefono)
       dispatch(registroUsuarios(id,nombre,email,telefono))
        reset();
    }
   
return(
<div>
    <h1>Modulo Usuario</h1>
    <Form onSubmit={handleRegistro}>
  
     
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
<Form.Control
type="text"
name="Nombre"
value={nombre}
onChange={handleInputChange}
/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Apellido</Form.Label>
<Form.Control
type="text"
name="email"
value={email}
onChange={handleInputChange}
/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTelephone">
        <Form.Label>Telefono</Form.Label>
<Form.Control
type="text"
name="Telefono"
value={telefono}
onChange={handleInputChange}
/>
        </Form.Group>
        <Button variant ="primary" type="submit">
            Guardar
        </Button>
    </Form>
    </div>

)
} 
export const registroUsuario=(id,nombre,email,telefono)=>{
     
}
