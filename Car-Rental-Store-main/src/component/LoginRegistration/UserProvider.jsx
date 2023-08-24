import React, { createContext, useContext, useState } from "react";
const UserDataContext = createContext();
export const useUserDataContext = () => {
  return useContext(UserDataContext);
};
const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    orderdetails: [],
    password: "",
    token: "",
  });
  const updateUserData = (newData) => {
    setUserData((prevData) => {
      return { ...prevData, ...newData };
    });
  };
  return (
    <UserDataContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserProvider;
