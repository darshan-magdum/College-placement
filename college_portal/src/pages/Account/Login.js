import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../componets/Navbar/Navbar";
import Footer from "../../componets/Footer/Footer";
//import { Forget } from "./Forget";


export const Login = () => {
  return (
    <>
      <NavBar />

      <div className="form-body">
        <div className="signup-form">
          <div className="container">
            <div className="header">
              <h1>Login to your account</h1>
              <p>Enter Below details</p>
            </div>
            <form method="post">
              <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" name="password" />
              </div>
              <input className="signup-btn" type="submit" value="LOGIN" />
            </form>
            <p>
              Don't have an account? <Link to="/Signup">sign up</Link>
            </p>
            <Link to="/Forget">Forgot Password?</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
