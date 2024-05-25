import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "../../componets/Navbar/Navbar";
import Footer from "../../componets/Footer/Footer";

export const Signup = () => {
  const [data, setData] = useState({
    Name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "", // Changed from "Contact" to "contact"
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      setError("Password and Confirm Password must be the same.");
      return;
    }

    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      setSuccess(true);
      toast.success("Signup successful!", { autoClose: 2000 });

      setTimeout(() => {
        navigate(`/login?success=${success}`);
      }, 2000);
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <NavBar />
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="form-body">
        <div className="signup-form custom-padding">
          <div className="container">
            <div className="header">
              <h1>Create an account</h1>
              <p>Get started for free!</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  required
                  pattern="[A-Za-z\s]+"
                  title="Please enter only alphabetic characters"
                  placeholder="Enter Full Name"
                  name="Name"
                  onChange={handleChange}
                />
              </div>

              <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                  required
                  placeholder="Enter Contact Number"
                  name="contact"
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  required
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleChange}
                />
              </div>
              {error && <div className="text-danger">{error}</div>}
              <input className="signup-btn" type="submit" value="SIGN UP" />
            </form>
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
