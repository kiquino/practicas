import React,{useState} from 'react';

import axios, { Axios } from 'axios';
import { Navigate,Link } from 'react-router-dom';

const LoginForm = () => {

    const [invalidForm, setInvalidForm] = useState(true);
    const [datos,setDatos] = useState({
        email:"",
        password:""
    });


    const sendRequest = () => {
        // Agregar lógica
        // axios.post('http://challenge-react.alkemy.org/', datos)

        let path = '/init';
        Navigate(path);
    }

    const handleChange = (event) => {
        // Actualizar el estado del formulario en base a los cambios de inputs 
        console.log(event)
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
        <div className="login">
        <h1>Login</h1>

        <form>
            <input type="email" name='email'aria-label='aligeri' onChange={ handleChange } value={datos.email} />
            <input type="password" aria-label='dante' name='password' onChange={ handleChange } value={datos.password} />
            <Link to="/init" disabled={ invalidForm } onClick={ sendRequest } > Enviar </Link>
       
        </form>
        </div>
      
    )

}
export default LoginForm;