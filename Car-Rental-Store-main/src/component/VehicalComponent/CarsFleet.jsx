import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CarCard from "./CarCard";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CarImg from "../images/VehicalCollection/car-collection/car-1.png";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ProductsData from "../HOC- higherOrderComponent/ProductsData";
import { GlobalStyle } from "../styles/GlobalStyle";
import StarIcon from "@mui/icons-material/Star";

let initialState = {
  cars: [],
  filters: {
    price: null,
    capacity: null,
    drive: null,
    rating: null,
  },
};
const reducer = (state, action) => {
  const FiltersChecks = (DataArray, filters) => {
    let ResultArray = DataArray;
    if ((filters.price = "hightolow")) {
      ResultArray = PriceHighToLow(ResultArray);
    }
    if ((filters.price = "lowtohigh")) {
      ResultArray = PriceLowToHigh(ResultArray);
    }
    if ((filters.capacity = "capacity2persons")) {
      ResultArray = CapacityTwoPerson(ResultArray);
    }
    if ((filters.capacity = "capacitymorethan2persons")) {
      ResultArray = CapacityTwoPerson(ResultArray);
    }
    if ((filters.drive = "manual")) {
      ResultArray = DriveManual(ResultArray);
    }
    if ((filters.drive = "manual")) {
      ResultArray = DriveManual(ResultArray);
    }
    if ((filters.drive = "automatic")) {
      ResultArray = DriveAutomatic(ResultArray);
    }
    return ResultArray;
  };

  const PriceHighToLow = (DataArray) => {
    return DataArray.sort((a, b) => {
      return b.price - a.price;
    });
  };
  const PriceLowToHigh = (DataArray) => {
    return DataArray.sort((a, b) => {
      return a.price - b.price;
    });
  };

  const CapacityTwoPerson = (DataArray) => {
    return DataArray.filter((docs) => {
      return docs.capacity == 2;
    });
  };

  const CapacityMoreThanTwo = (DataArray) => {
    return DataArray.filter((docs) => {
      return docs.capacity > 2;
    });
  };

  const DriveManual = (DataArray) => {
    return DataArray.filter((docs) => {
      return docs.drive == "Manual";
    });
  };

  const DriveAutomatic = (DataArray) => {
    return DataArray.filter((docs) => {
      return docs.drive == "Automatic";
    });
  };

  switch (action.type) {
    case "SET_DATA":
      return {
        cars: action.payload,
        filters: initialState.filters,
      };

    case "RESET_DATA":
      return {
        cars: action.payload,
        filters: initialState.filters,
      };
    case "hightolow":
      return {
        cars: PriceHighToLow(state.cars),
        filters: {
          ...state.filters,
          price: true,
        },
      };

    case "lowtohigh":
      return {
        cars: PriceLowToHigh(state.cars),
        filters: state.filters,
      };

    case "capacity2persons":
      return {
        cars: CapacityTwoPerson(state.cars),
        filters: state.filters,
      };
    case "capacitymorethan2persons":
      return {
        cars: CapacityMoreThanTwo(state.cars),
        filters: state.filters,
      };
    case "manual":
      return {
        cars: DriveManual(state.cars),
        filters: state.filters,
      };
    case "automatic":
      return {
        cars: DriveAutomatic(state.cars),
        filters: state.filters,
      };
  }
};

const N0MatchFound = ({ dispatch, productList }) => {
  const NotfoundSection = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    h1 {
      font-size: 3rem;
      color: var(--text-color);
    }
    button {
      cursor: pointer;
      border: none;
      height: 3.5rem;
      width: 11rem;
      font-size: 23px;
      font-weight: bold;
      background-color: var(--btn-background-color);
      box-shadow: rgba(255, 83, 48, 0.35) 0px 10px 15px 0px;
      cursor: pointer;
      color: var(--white-color);
      border-radius: 10px;
    }
  `;
  return (
    <>
      <NotfoundSection>
        <h1>No product found</h1>
        <button
          onClick={() => {
            dispatch({ type: "SET_DATA", payload: productList });
          }}
        >
          Reset filters
        </button>
      </NotfoundSection>
    </>
  );
};

const CarsFleet = ({ productList }) => {
  const [CurrentState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_DATA", payload: productList });
  }, [productList]);

  const CarsFleetSection = styled.section`
    width: 100%;
    padding: 0 2rem;
    margin-bottom: 10rem;

    .car-collection-container-heading {
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
      font-family: Rubik;
      font-weight: bold;
      color: blue;
    }
    .car-fleet {
      /* border: 2px solid; */
      /* height: 108rem; */
      width: 100%;
      display: grid;
      grid-template-columns: 24rem auto;
      gap: 4rem;
    }
    .settings {
      /* border: 2px solid; */
      height: 40rem;
      width: 20rem;
      box-shadow: 0 1px 3px rgba(23, 23, 23, 0.24);
      border-radius: 22px;
      padding: 31px 22px;
      position: sticky;
      top: 30px;
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
      color: rgb(0 25 255);
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
      width: 100%;
      display: flex;
      /* grid-template-columns: 24rem 24rem; */
      /* grid-template-rows: 21rem 21rem; */
      /* gap: 3rem 10rem; */
      gap: 24px;
      justify-items: center;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .setting__body {
      /* border: 2px solid; */
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 20px;
    }
    .filter__by__price {
      /* border: 2px solid; */
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .filters__heading {
      font-size: 17px;
      font-family: "Rubik";
      line-height: 32px;
    }
    .filter__details {
      font-size: 15px;
      font-family: "Rubik";
      color: var(--text-color);
      display: flex;
      align-items: center;
      gap: 2px;
      justify-content: center;
    }
    .filter__details span {
      margin: 0px 10px;
    }
    .filter__by__price aside,
    .filter__by__capacity aside,
    .filter__by__drive aside,
    .filter__by__rating aside {
      display: flex;
      gap: 7px;
    }
    .filter__by__price aside:last-child {
      display: flex;
      flex-direction: column;
    }
    .price__range {
      display: flex;
      justify-content: space-between;
    }
    .filter__by__capacity,
    .filter__by__rating,
    .filter__by__drive {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      gap: 10px;
    }
    .filter__by__rating {
      gap: 3px;
    }
    input {
      cursor: pointer;
    }
    .reset__btn {
      display: flex;
      align-items: center;
    }
  `;
  return (
    <>
      <GlobalStyle />
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
                <h1>Filter by</h1>
                <div>
                  <button
                    className="reset__btn"
                    onClick={() =>
                      dispatch({ type: "SET_DATA", payload: productList })
                    }
                  >
                    <RestartAltIcon />
                    Reset All
                  </button>
                </div>
              </div>
              <div className="setting__body">
                <div className="filter__by__price">
                  <h1 className="filters__heading">Price</h1>
                  <aside>
                    <input
                      type="radio"
                      name="price__filter"
                      onClick={() => dispatch({ type: "hightolow" })}
                    />{" "}
                    <p className="filter__details">high to low</p>
                  </aside>
                  <aside>
                    <input
                      type="radio"
                      name="price__filter"
                      onClick={() => dispatch({ type: "lowtohigh" })}
                    />{" "}
                    <p className="filter__details">low to high</p>
                  </aside>
                  <aside>
                    <input
                      type="range"
                      name="price_range_filter"
                      min={2999}
                      max={7999}
                    />
                    <div className="price__range">
                      <p className="filter__details">2999</p>
                      <p className="filter__details">6999</p>
                    </div>
                  </aside>
                </div>
                <div className="filter__by__capacity">
                  <h1 className="filters__heading">Capacity</h1>
                  <aside>
                    <input
                      type="radio"
                      name="Capacity__filter"
                      onClick={() => dispatch({ type: "capacity2persons" })}
                    />{" "}
                    <p className="filter__details">2 persons</p>
                  </aside>
                  <aside>
                    <input
                      type="radio"
                      name="Capacity__filter"
                      onClick={() =>
                        dispatch({ type: "capacitymorethan2persons" })
                      }
                    />{" "}
                    <p className="filter__details">more than 2 persons</p>
                  </aside>
                </div>
                <div className="filter__by__drive">
                  <h1 className="filters__heading">Drive</h1>
                  <aside>
                    <input
                      type="radio"
                      name="drive__filter"
                      onClick={() => dispatch({ type: "manual" })}
                    />{" "}
                    <p className="filter__details">Manual</p>
                  </aside>
                  <aside>
                    <input
                      type="radio"
                      name="drive__filter"
                      onClick={() => dispatch({ type: "automatic" })}
                    />{" "}
                    <p className="filter__details">Automatic</p>
                  </aside>
                </div>
                <div className="filter__by__rating">
                  <h1 className="filters__heading">Ratings</h1>
                  <aside>
                    <input
                      type="radio"
                      name="rating__filter"
                      onClick={() => dispatch({ type: "ratingmorethan4" })}
                    />{" "}
                    <p className="filter__details">
                      <StarIcon style={{ color: "orange" }} />
                      <StarIcon style={{ color: "orange" }} />
                      <StarIcon style={{ color: "orange" }} />
                      <StarIcon style={{ color: "orange" }} />
                      <span>& Up</span>
                    </p>
                  </aside>
                  <aside>
                    <input
                      type="radio"
                      name="rating__filter"
                      onClick={() => dispatch({ type: "ratingmorethan3" })}
                    />{" "}
                    <p className="filter__details">
                      {" "}
                      <StarIcon style={{ color: "orange" }} />
                      <StarIcon style={{ color: "orange" }} />
                      <StarIcon style={{ color: "orange" }} />
                      <span>& Up</span>
                    </p>
                  </aside>
                  <aside>
                    <input
                      type="radio"
                      name="rating__filter"
                      onClick={() => dispatch({ type: "ratingmorethan2" })}
                    />{" "}
                    <p className="filter__details">
                      <StarIcon style={{ color: "orange" }} />
                      <StarIcon style={{ color: "orange" }} />
                      <span>& Up</span>
                    </p>
                  </aside>
                  <aside>
                    <input
                      type="radio"
                      name="rating__filter"
                      onClick={() => dispatch({ type: "ratingmorethan1" })}
                    />{" "}
                    <p className="filter__details">
                      <StarIcon style={{ color: "orange" }} />
                      <span>& Up</span>
                    </p>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div className="car-fleet-container">
            {CurrentState.cars.length ? (
              CurrentState.cars.map((carsData, index) => {
                return (
                  <CarCard key={index} carsData={carsData} CarImg={CarImg} />
                );
              })
            ) : (
              <N0MatchFound dispatch={dispatch} productList={productList} />
            )}
          </div>
        </div>
      </CarsFleetSection>
    </>
  );
};

export default ProductsData(CarsFleet);
