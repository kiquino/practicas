import React from "react";
import {Link} from "react-router-dom";

const Login = () => { 
    return(
        <div className="login">
            <h1>Login</h1>

            <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <Link to="/init"><button>Login</button></Link>
            </form>
            </div>
    )
}
export default Login;