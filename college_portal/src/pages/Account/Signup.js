import React from "react";
import NavBar from "../../componets/Navbar/Navbar";
import Footer from "../../componets/Footer/Footer";
import { Link } from "react-router-dom";


export const Signup = () => {
  return (
    <>
      <NavBar/>
      <div className="form-body">
        <div className="signup-form custom-padding">
          <div className="container">
            <div className="header">
              <h1>Create an account</h1>
              <p>Get started for free!</p>
            </div>
            <form>
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input type="text" required placeholder="Enter Full Name" name="Name" />
              </div>
           
              <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" required placeholder="Email" name="email" />
              </div>
              <div className="input">
              <i className="fa-solid fa-envelope"></i>
    <input type="tel" id="typeNumber" required placeholder="Enter Contact Number" name="Contact" />
</div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input type="password" required placeholder="Password" name="password" />
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input type="password" required placeholder="Confirm Password" name="confirmPassword" />
              </div>
              <input className="signup-btn" type="submit" value="SIGN UP" />
            </form>
            <p>
              Already have an account? <Link to="/login">sign in</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      
    </>
  );
};
