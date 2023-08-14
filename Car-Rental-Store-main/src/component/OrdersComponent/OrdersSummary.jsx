import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const OrdersSummary = () => {
  const [OrdersData, SetOrdersData] = useState({});

  const fetchOrdersData = (UserData) => {
    const { email } = UserData;

    const doc = axios.get(
      `http://localhost:8000/user/getorders?email=${email}`
    );
    doc.then((response) => {});
  };

  useEffect(() => {
    if (localStorage.length) {
      let UserData = JSON.parse(localStorage.getItem("UserDetails"));
      fetchOrdersData(UserData);
    }
  }, []);

  const OrdersSummarySection = styled.section`
    border: 2px solid;
    height: 100%;
    width: 100%;
    .order-summary {
      padding: 0rem 4rem;
      border: 2px solid;
      height: 100%;
      width: 100%;
    }
    .order-summary__content {
      border: 2px solid;
      height: 100%;
      width: 100%;
    }
    .order-summary__heading {
      font-size: 2.1rem;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      font-family: Poppins, san-serif;
      display: flex;
      flex-direction: column;
    }
  `;
  return (
    <>
      <OrdersSummarySection>
        <div className="order-summary">
          <div className="order-summary__content">
            <h1 className="order-summary__heading">Order Summary</h1>
          </div>
        </div>
      </OrdersSummarySection>
    </>
  );
};

export default OrdersSummary;
