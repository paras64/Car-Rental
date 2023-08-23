import React, { useState } from "react";
import "./LoginStyle.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import axios from "axios";
const AdminLogin = () => {
  let message;
  const [adminData, SetAdminData] = useState({
    email: "",
    password: "",
    message: "",
  });
  const handleChange = (e) => {
    SetAdminData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (adminData.email && adminData.password) {
      const doc = axios.post("http://localhost:8000/admin/login", adminData);
      doc
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          SetAdminData({
            email: "",
            password: "",
            message: err.response.data.message,
          });
        });
      console.log(adminData);
    } else {
      SetAdminData((prevData) => {
        return {
          ...prevData,
          message: "Please complete the required fields",
        };
      });
    }
  };
  return (
    <>
      <GlobalStyle />
      <section className="admin_login_section">
        <div className="admin_login__hero"></div>
        <div className="admin_login">
          <div className="admin_login__form">
            <h1 className="login__heading">Login</h1>
            <form className="login__form">
              <input
                type="email"
                value={adminData.email}
                name="email"
                placeholder="enter your email"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                value={adminData.password}
                placeholder="enter your password"
                onChange={handleChange}
                required
              />
              <button className="admin_login__btn" onClick={handleClick}>
                Continue
              </button>
            </form>
            <p>{adminData.message}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
