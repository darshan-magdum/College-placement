import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavBar from "../../componets/Navbar/Navbar";
import Footer from "../../componets/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
console.log("res.data",res.data)

      if (res.role === "admin") {
        toast.success("Login successful!", { autoClose: 3000 }); 
        setTimeout(() => {
          window.location = "/profile/admin";
        }, 3000); 
      }  else {
        toast.success("Login successful!", { autoClose: 3000 }); 
        setTimeout(() => {
          window.location = "/profile";
        }, 3000); 
      }
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
     

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const isSuccess = params.get("success");

    if (isSuccess) {
      setSuccess(true);
    }
  }, [location]);
    
  return (
    <>
      <NavBar />
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="form-body">
        <div className="signup-form">
          <div className="container">
            <div className="header">
            {success && <p className="text-success h6">User signed up successfully!</p>}
              <h1>Login to your account</h1>
              <p>Enter Below details</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              {error && <div className="text-danger">{error}</div>}
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
