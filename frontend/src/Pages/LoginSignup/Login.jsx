
import React from "react";
import { GiPadlock } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import Divider from "./Divider";

const Login = ({ onSignupClick }) => {
  return (
    <form>
      <h1 className="text">Login</h1>
      <div className="input-box">
        <input type="email" placeholder="email" required />
        <MdEmail className="icon" />
      </div>
      <div className="input-box">
        <input type="password" placeholder="password" required />
        <GiPadlock className="icon" />
      </div>
      <div className="remember-forgot">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <a href="a">Forgot password? </a>
      </div>
      <button className="submi gray">Login</button>
      <Divider />
      
      <button className="submit" onClick={onSignupClick}>
        Sign up
      </button>
    </form>
  );
};

export default Login;