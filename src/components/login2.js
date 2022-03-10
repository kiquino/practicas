import React from 'react';
import axios, { Axios } from 'axios';

const LoginForm = () => {

    const [invalidForm, setInvalidForm] = React.useState(true);
    const [datos,setDatos] = React.useState({
        email:"",
        password:""
    });


    const sendRequest = () => {
        // Agregar lógica
        axios.post('http://challenge-react.alkemy.org/', datos)
    }

    const handleChange = (event) => {
        // Actualizar el estado del formulario en base a los cambios de inputs 
        setDatos((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
       if (datos.password.length >= 6 && datos.email.includes('@')) {
           setInvalidForm(false);
       } else {
           setInvalidForm(true);
           
       }
    }



    return (
        <form>
            <input type="email" name='email' onChange={ handleChange } value={datos.email} />
            <input type="password" name='password' onChange={ handleChange } value={datos.password} />
            <button disabled={ invalidForm } onClick={ sendRequest } > Enviar </button>
       
        </form>
        
      
    )

}
export default LoginForm;