import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import logo from "./images/Logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export default function Navbar() {
  const [UserDetails, SetUserDetails] = useState(undefined);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("UserDetails"));
    if (data) {
      SetUserDetails(data);
    }
  }, []);
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };
  const gotoRegister = () => {
    navigate("/register");
  };
  const gotoOrders = () => {
    navigate("/orders");
  };
  const HeaderTop = styled.header`
    #navbar {
      display: flex;
      margin: 10px 35px;
      align-items: center;
      justify-content: space-between;
    }

    /* Left section of the navbar */
    /* .left-section {
      display: flex;
      align-items: center;
      margin: 18px 27px;
    }

    .logo-img {
      height: 58px;
      margin-left: -27px;
      width: 154px;
    } */

    #logo-heading {
      color: red;
      font-size: 20px;
    }

    /* Middle Section of the navbar
 */
    .navbar-links {
      height: 2.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 37.3rem;
    }

    .navbar-links li {
      list-style: none;
    }

    .navbar-links li a {
      text-decoration: none;
      font-size: 17px;
      font-weight: 600;
      color: var(--black-color);
      font-family: sans-serif;
    }

    /* Right section of the game 
  */
    .right-section {
      display: flex;
      justify-content: center;
      gap: 25px;
      height: 50px;
      width: 15.2rem;
      font-family: Rubik, sans-serif;
    }

    #right-btn {
      border-radius: 5px;
      width: 116px;
      font-size: 16px;
      border: none;
      background-color: var(--btn-background-color);
      font-weight: bold;
      box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
      cursor: pointer;
      color: var(--white-color);
    }

    #left-btn {
      /* width: 65px; */
      font-size: 16px;
      font-weight: bold;
      background-color: transparent;
      border: none;
      cursor: pointer;
      padding-top: 16px;
      display: flex;
      align-items: center;
      /* border: 2px solid; */
      height: 5.5rem;
      gap: 25px;
      flex-direction: column;
      width: 6rem;
    }
    .user-btn_second {
      opacity: 0;
      transition: opacity 0.2s;
    }
    #left-btn:hover {
      .user-btn_second {
        opacity: 1;
      }
    }
    .navbar-links li a:hover,
    .sign_in:hover,
    .user-btn_first:hover,
    .user-btn_second:hover {
      color: var(--btn-background-color);
    }

    #right-btn:hover {
      box-shadow: 0 10px 15px 0 rgba(211, 57, 26, 0.35);
    }
  `;

  return (
    <>
      <GlobalStyle />
      <HeaderTop id="header">
        <nav id="navbar">
          <div className="left-section">
            <NavLink to="https://car-rental-store.vercel.app/">
              <img src={logo} className="logo-img" alt="Logo" />
            </NavLink>
          </div>
          <div className="mid-section">
            <ul className="navbar-links">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/vehicalsmodels">Vehical Models</NavLink>
              </li>
              <li>
                <NavLink to="/testimonial">Testimonial</NavLink>
              </li>
              <li>
                <NavLink to="/ourteam">OurTeam</NavLink>
              </li>
              <li>
                <NavLink to="/support">Support</NavLink>
              </li>
            </ul>
          </div>
          <div className="right-section">
            {!UserDetails ? (
              <>
                <button
                  onClick={() => gotoLogin()}
                  className="btn"
                  id="left-btn"
                >
                  <p className="sign_in">Sign In</p>
                </button>
                <button
                  onClick={() => gotoRegister()}
                  className="btn"
                  id="right-btn"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                <div className="btn user" id="left-btn">
                  <p className="user-btn_first">
                    Hello, {UserDetails.firstname}
                  </p>
                  <p
                    className="user-btn_second"
                    onClick={() => {
                      localStorage.clear();
                      navigate("/login");
                    }}
                  >
                    Log Out
                  </p>
                </div>
                <Button className="btn" id="right-btn"  onClick={()=>gotoOrders()}> 
                  Orders
                </Button>
              </>
            )}
          </div>
        </nav>
      </HeaderTop>
    </>
  );
}
