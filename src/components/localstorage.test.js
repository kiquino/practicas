import Swal from "sweetalert2";
const onSuccessfulRequest = (userData, token) => {
    // Método a ejecutar si la petición se realiza correctamente

    localStorage.setItem('token', token);
    localStorage.setItem('userData', userData);

}

const onFailedRequest = () => {
    // Método a ejecutar si la petición falla

    Swal.fire({
        title: 'Error!!',
        text: 'Usuario o contraseña incorrectos',
    })

}
