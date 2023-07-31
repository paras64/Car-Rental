import React from "react";
import styled from "styled-components";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CarCard from "./CarCard";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CarImg from "../images/VehicalCollection/car-collection/car-1.png";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ProductsData from "../HOC- higherOrderComponent/ProductsData";
const CarsFleet = ({productList}) => {
  const CarsFleetSection = styled.section`
    /* border: 2px solid black; */
    /* height: 100%; */
    width: 100%;
    padding: 0 2rem;
    margin-bottom:10rem;

    .car-collection-container-heading {
      /* border: 2px solid; */
      padding: 0px 24px;
      height: 5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
    }
    .car-collection-container-heading h1 {
      font-size: 2.1rem;
      display: flex;
      align-items: center;
      font-family: "Poppins", san-serif;
    }
    .car-collection-container-heading a {
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-family: Rubik ;
      font-weight: bold;
      color: blue;
    }
    .car-fleet {
      /* border: 2px solid; */
      /* height: 108rem; */
      width: 100%;
      display: grid;
      grid-template-columns: 24rem auto;
    }
    .settings {
      /* border: 2px solid; */
      height: 40rem;
      width: 20rem;
      box-shadow: 0 1px 3px rgba(23, 23, 23, 0.24);
      border-radius: 22px;
      padding: 15px 22px;
    }
    .settings-container {
      /* border: 2px solid; */
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .first-setting {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      align-items: center;
      /* border: 2px solid; */
      height: 4rem;
      color:rgb(0 25 255);;
      font-family: Rubik, sans-serif;
      border-bottom: 1px solid #d1b0b0;
    }
    .first-setting > h1 {
      color: var(--black-color);
      font-size: 1.4rem;
    }
    .first-setting > div {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .first-setting > div > button {
      outline: none;
      background: none;
      border: none;
      font-size: 13px;
      font-weight: bold;
      font-family: rubik, sans-serif;
      color: rgb(0 25 255);
      cursor: pointer;
    }
    .car-fleet-container {
      /* border: 2px solid; */
      /* height: 106rem; */
      width: 100%;
      display: grid;
      grid-template-columns: 24rem 24rem;
      grid-template-rows: 21rem 21rem;
      gap: 1rem 6rem;
      justify-items: center;
    }
  `;
  return (
    <>
      <CarsFleetSection>
        <div className="car-collection-container-heading">
          <h1>
            <DirectionsCarIcon
              style={{ color: "red", fontSize: "40px", marginRight: "10px" }}
            />
            Car Collection
          </h1>
          <a href="">
            See All Collection
            <ArrowCircleRightIcon
              style={{ color: "blue", fontSize: "25px", marginLeft: "10px" }}
            />
          </a>
        </div>
        <div className="car-fleet">
          <div className="settings">
            <div className="settings-container">
              <div className="first-setting">
                <h1>Filters</h1>
                <div>
                  <RestartAltIcon />
                  <button>Reset All</button>
                </div>
              </div>
            </div>
          </div>
          <div className="car-fleet-container">
          {
            productList.map((carsData, index)=>{
              return ( 
                <CarCard carsData={carsData} CarImg={CarImg} />
              )
            })
          }

            {/* <CarCard CarImg={CarImg} />
            <CarCard CarImg={CarImg} />
            <CarCard CarImg={CarImg} />
            <CarCard CarImg={CarImg} /> */}
          </div>
        </div>
      </CarsFleetSection>
    </>
  );
};

export default ProductsData(CarsFleet);
