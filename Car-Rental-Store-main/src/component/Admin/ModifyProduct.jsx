import React, { useState } from "react";
import "./AdminStyle/ModifyProduct.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import { useAdminDataContext } from "./AdminProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ModifyProduct = () => {
  const navigate = useNavigate();
  const { adminData } = useAdminDataContext();
  const [valueModify, setValueModify] = useState({
    name: "",
    value: "",
  });

  const ResetAll = (e) => {
    if (e) {
      e.preventDefault();
    }
    setValueModify({
      name: "",
      value: "",
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (valueModify.name && valueModify.value) {
      if (
        valueModify.name == "year" ||
        valueModify.name == "price" ||
        valueModify.name == "capacity" ||
        valueModify.name == "discountPercentage" ||
        valueModify.name == "rating" ||
        valueModify.name == "stocks"
      ) {
        setValueModify((prevData) => {
          return {
            ...prevData,
            value: Number(valueModify.value),
          };
        });
      }
      console.log(valueModify);
    } else {
      alert("Please complete the fields");
    }
  };
  return (
    <>
      <GlobalStyle />
      {adminData.token ? (
        <section className="modify__product__section">
          <div className="modify_product__container">
            <form className="modify_product__form">
              <div className="modify_product__heading__cyprus">
                <h1 className="modify_product_heading"> Modify Product</h1>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                  }}
                >
                  Go Back
                </button>
              </div>
              <aside className="modify_product__hero">
                <label htmlFor="modify_product">
                  Select the Product <span className="required__class">*</span>
                </label>
                <select
                  name="modify_product"
                  id="modify_product"
                  onChange={(e) => {
                    e.preventDefault();
                    setValueModify((prevData) => {
                      return {
                        ...prevData,
                        name: e.target.value,
                      };
                    });
                  }}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="title">title</option>
                  <option value="year">year</option>
                  <option value="price">price</option>
                  <option value="category">category</option>
                  <option value="model">model</option>
                  <option value="capacity">capacity</option>
                  <option value="discountPercentage">discountPercentage</option>
                  <option value="rating">rating</option>
                  <option value="brand">brand</option>
                  <option value="thumbnail">thumbnail</option>
                  <option value="weight">weight</option>
                  <option value="speed">speed</option>
                  <option value="color">color</option>
                  <option value="mileage">mileage</option>
                  <option value="available">available</option>
                  <option value="drive">drive</option>
                  <option value="stocks">stocks</option>
                  <option value="images-1">image-1</option>
                  <option value="images-2">image-2</option>
                </select>
                {!valueModify.name && (
                  <p class="required__field">This field is required</p>
                )}
              </aside>
              <aside className="modify_product__hero">
                <label htmlFor="newvalue">
                  Enter the new value <span className="required__class">*</span>
                </label>
                <input
                  type={
                    valueModify.name == "year" ||
                    valueModify.name == "price" ||
                    valueModify.name == "capacity" ||
                    valueModify.name == "discountPercentage" ||
                    valueModify.name == "rating" ||
                    valueModify.name == "stocks"
                      ? "number"
                      : "text"
                  }
                  min={0}
                  value={valueModify.value}
                  name="newvalue"
                  id="newvalue"
                  onChange={(e) => {
                    e.preventDefault();
                    setValueModify((prevData) => {
                      return {
                        ...prevData,
                        value: e.target.value,
                      };
                    });
                  }}
                />
                {!valueModify.value && (
                  <p class="required__field">This field is required</p>
                )}
              </aside>
              <aside className="modify_product__hero">
                <button className="modify_reset__btn" onClick={ResetAll}>
                  Reset All
                </button>
                <button className="modify_submit__btn" onClick={handleClick}>
                  Continue
                </button>
              </aside>
            </form>
          </div>
        </section>
      ) : (
        <h1>Unauthorised access</h1>
      )}
    </>
  );
};

export default ModifyProduct;
