import React from "react";
import { useAdminDataContext } from "./AdminProvider";
import { GlobalStyle } from "../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  const navigate = useNavigate();
  const { adminData, updateAdminData } = useAdminDataContext();
  return (
    <>
      <GlobalStyle />
      {adminData.token ? (
        <section>
          <h1>Hello</h1>
        </section>
      ) : (
        <h1>Unauthorised access</h1>
      )}
    </>
  );
};

export default AddUser;
