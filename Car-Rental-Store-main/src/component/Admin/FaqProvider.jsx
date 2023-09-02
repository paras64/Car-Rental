import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const FaqQuestionArray = createContext(undefined);
const FaqProvider = ({ children }) => {
  const [FaqArray, SetFaqArray] = useState([]);
  useEffect(() => {
    const faqdata = axios.get("http://localhost:8000/faq");
    faqdata
      .then((response) => {
        SetFaqArray(response.data);
      })
      .catch((err) => {
        alert("something went wrong");
      });
  }, []);
   
  return (
    <>
      {FaqArray && (
        <FaqQuestionArray.Provider value={{ FaqArray, SetFaqArray }}>
          {children}
        </FaqQuestionArray.Provider>
      )}
    </>
  );
};
export const UseFaqValue = () => useContext(FaqQuestionArray);
export default FaqProvider;
