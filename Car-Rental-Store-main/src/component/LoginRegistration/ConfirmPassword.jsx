import React, { useState, useRef } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./Style.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import axios from "axios";
const ConfirmPassword = () => {
  const navigate = useNavigate();

  const [visibility, SetVisibility] = useState({
    firstPasswordBox: false,
    SecondPasswordBox: false,
  });
  const { userEmail } = useParams();
  console.log(userEmail);
  const [confirmPassword, setconfirmPassword] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const passwordData = useRef([]);

  const VisibilityToggle = (index) => {
    console.log(index);
    if (index == 0) {
      if (confirmPassword.newPassword) {
        if (visibility.firstPasswordBox) {
          passwordData.current[index].type = "password";
          SetVisibility((prevdata) => {
            return {
              ...prevdata,
              firstPasswordBox: false,
            };
          });
        } else {
          passwordData.current[index].type = "text";
          SetVisibility((prevdata) => {
            return {
              ...prevdata,
              firstPasswordBox: true,
            };
          });
        }
      } else {
        return;
      }
    } else {
      if (confirmPassword.confirmNewPassword) {
        if (visibility.SecondPasswordBox) {
          passwordData.current[index].type = "password";
          SetVisibility((prevdata) => {
            return {
              ...prevdata,
              SecondPasswordBox: false,
            };
          });
        } else {
          passwordData.current[index].type = "text";
          SetVisibility((prevdata) => {
            return {
              ...prevdata,
              SecondPasswordBox: true,
            };
          });
        }
      } else {
        return;
      }
    }
  };

  const resetAll = (e) => {
    e.preventDefault();
    setconfirmPassword({
      newPassword: "",
      confirmNewPassword: "",
    });
  };
  const handleChange = (e) => {
    setconfirmPassword((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };
  const updateRef = (index) => (ref) => {
    passwordData.current[index] = ref;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword.newPassword && confirmPassword.confirmNewPassword) {
      if (confirmPassword.newPassword === confirmPassword.confirmNewPassword) {
        const doc = axios.post(`http://localhost:8000/forgotpassword/update`, {
          newPassword: confirmPassword.newPassword,
          confirmNewPassword: confirmPassword.confirmNewPassword,
          userEmail,
        });
        doc
          .then((response) => {
            console.log(response.data);
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("Password does not matched");
      }
    } else {
      alert("Please complete the fields");
    }
  };
  return (
    <>
      <GlobalStyle />
      <section className="confirm-password">
        <div className="confirm-password-container">
          <h1 className="update-heading">Update Password</h1>
          <form className="update-password-form">
            <div>
              <label htmlFor="password">New Password</label>
              <article className="password-article">
                <input
                  ref={updateRef(0)}
                  type="password"
                  name="newPassword"
                  id="password"
                  value={confirmPassword.newPassword}
                  onChange={handleChange}
                />
                {visibility.firstPasswordBox ? (
                  <VisibilityIcon
                    onClick={() => VisibilityToggle(0)}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => VisibilityToggle(0)}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </article>
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <article className="password-article">
                <input
                  ref={updateRef(1)}
                  type="password"
                  name="confirmNewPassword"
                  id="password"
                  value={confirmPassword.confirmNewPassword}
                  onChange={handleChange}
                />
                {visibility.SecondPasswordBox ? (
                  <VisibilityIcon
                    onClick={() => VisibilityToggle(1)}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <VisibilityOffIcon
                    onClick={() => VisibilityToggle(1)}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </article>
            </div>
            <div>
              <button onClick={resetAll}>Reset All</button>
              <button onClick={handleSubmit}>Update</button>
            </div>
          </form>
          <div className="message">
            <p>{}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmPassword;
