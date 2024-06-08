import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../componets/Navbar/Navbar";
import Footer from "../../componets/Footer/Footer";

export const Forget = () => {
  return (
    <>
      <NavBar />

      <div className="form-body">
        <div className="signup-form">
          <div className="container">
            <div className="header">
              <h1>Reset Your Password</h1>
              <p>Enter your valid Email to get password reset</p>
            </div>
            <form>
              <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Email" name="email" />
              </div>
              <input
                className="signup-btn btn-primary"
                type="submit"
                value="Get Link"
              />
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
