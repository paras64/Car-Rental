import React from "react";
import styled from "styled-components";
import ProductsData from "../HOC- higherOrderComponent/ProductsData";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
const AdminHome = () => {
  const navigate = useNavigate();

  const AdminHomeSection = styled.section`
    /* border: 2px solid blue; */
    height: 100%;
    width: 100%;
    padding: 3rem 4rem;
    .admin__home {
      /* border: 2px solid blue; */
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 25rem;
    }
    .admin__home__content {
      /* border: 2px solid blue; */
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 5rem 5rem;
      gap: 2rem;
    }
    .admin__home__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border-width: thin;
      border-radius: 5px;
      cursor: pointer;
      font-size: 15px;
      font-family: "RUBIK";
      font-weight: bold;
      gap: 6px;
      background: linear-gradient(to right, rgb(225 215 215), rgb(246 246 246))
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
    }
    .admin__home__btn:hover {
      background-color: #dee9e6;
      color: var(--black-color);
    }
    .recent__orders_details {
      border: 2px solid blue;
    }
  `;
  return (
    <AdminHomeSection>
      <div className="admin__home">
        <div className="admin__home__content">
          <button
            className="admin__home__btn"
            onClick={() => navigate("/admin/dashboard/addproduct")}
          >
            Add New Product <AddCircleIcon />
          </button>
          <button
            className="admin__home__btn"
            onClick={() => navigate("/admin/dashboard/modifyproduct")}
          >
            Modify Products <AutoFixHighIcon />
          </button>

          <button className="admin__home__btn">
            Add New User <AddCircleIcon />
          </button>
          <button
            className="admin__home__btn"
            onClick={() => navigate("/admin/dashboard/modifyfaq")}
          >
            Add/Modify FAQs
            <AutoFixHighIcon />
          </button>
          <button className="admin__home__btn">
            View Contacts <VisibilityIcon />
          </button>
          <button className="admin__home__btn">
            Delete Testimonials <DeleteIcon />
          </button>
        </div>
        <div className="recent__orders_details"></div>
      </div>
    </AdminHomeSection>
  );
};

export default ProductsData(AdminHome);
