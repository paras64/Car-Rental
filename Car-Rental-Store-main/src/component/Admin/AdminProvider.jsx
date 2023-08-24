import React, { createContext, useContext, useState } from "react";
const AdminDataContext = createContext();

export const useAdminDataContext = () => {
  return useContext(AdminDataContext);
};

const AdminProvider = ({ children }) => {
  const [adminData, setAdminData] = useState({
    email: "",
    password: "",
    token: "",
    message: "",
  });

  const updateAdminData = (newData) => {
    setAdminData((prevData) => {
      return {
        ...prevData,
        ...newData,
      };
    });
  };
  return (
    <>
      <AdminDataContext.Provider value={{ adminData, updateAdminData }}>
        {children}
      </AdminDataContext.Provider>
    </>
  );
};

export default AdminProvider;
