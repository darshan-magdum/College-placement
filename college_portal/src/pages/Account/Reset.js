import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../componets/Navbar/Navbar";
import Footer from "../../componets/Footer/Footer";
import { Forget } from "./Forget";


export const Reset = () => {
  return (
    <>
      <NavBar />

      <div className="form-body">
        <div className="signup-form">
          <div className="container">
            <div className="header">
              <h1>Reset Password</h1>
              
            </div>
            <form>
              <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input type="password" placeholder="Enter New Password" name="Password" />
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Confirm Password" name="password" />
              </div>
              <input className="signup-btn" type="submit" value="RESET" />
            </form>
            <p>
              Don't have an account? <Link to="/Signup">sign up</Link>
            </p>
            <Link to="/Login">Back to Login</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
