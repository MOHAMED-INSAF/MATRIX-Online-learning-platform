import React from "react";
import  './Login.css';
import { FaUserCircle } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";



const Login = () => {
return(
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" required />
                <FaUserCircle className="icon"/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="password" required />
                <GiPadlock className="icon"/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="a">Forgot password? </a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account?<a href="a">Register</a></p>
            </div>
        </form>
    </div>
);
};
export default Login;