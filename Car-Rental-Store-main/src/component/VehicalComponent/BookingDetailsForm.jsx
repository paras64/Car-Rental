import React from "react";
import "./Style.css";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { GlobalStyle } from "../styles/GlobalStyle";
const BookingDetailsForm = () => {
  return (
    <>
      <GlobalStyle />
      <section className="booking-form">
        <div className="booking-form-container">
          <div className="booking-form-content">
            <div className="booking-form-content__hero" id="hero__one">
              <h1 className="booking-form__heading">COMPLETE RESERVATION</h1>
              <CloseIcon id="close-icon" />
            </div>
            <div className="booking-form-content__hero" id="hero__two">
              <p className="hero__two__para">
                <InfoIcon id="hero__two__para-icon" /> Upon completing this
                reservation enquiry, you will receive:
              </p>
              <p className="hero__two__message">
                Your rental voucher to produce on arrival at the rental desk and
                a toll-free customer support number.
              </p>
            </div>
            <div className="booking-form-content__hero" id="hero__three">
              <div className="hero__three__details">
                <h1 className="hero__three__details__heading">
                  Location & Date
                </h1>
                <div className="hero__three__details_present">
                  <h1>
                    <AccessTimeIcon />
                    Pick-Up Date & Time
                  </h1>
                  <div>
                    <input type="time" />
                    <input type="date" />
                  </div>
                </div>
                <div className="hero__three__details_present">
                  <h1>
                    <AccessTimeIcon /> Drop-Off Date & Time
                  </h1>
                  <div>
                    <input type="time" />
                    <input type="date" />
                  </div>
                </div>
                <div className="hero__three__details_present">
                  <h1>
                    <LocationOnIcon /> Pick-Up Location
                  </h1>
                  <select
                    name="PickUpLocation"
                    defaultValue="selected"
                    id="PickUpLocation_form"
                  >
                    <option value="selected" disabled>
                      Select location
                    </option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Indore">Indore</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Koltata">Koltata</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>
                <div className="hero__three__details_present">
                  <h1>
                    <LocationOnIcon /> Drop-Off Location
                  </h1>
                  <select
                    name="PickUpLocation"
                    defaultValue="selected"
                    id="DropOffLocation_form"
                  >
                    <option value="selected" disabled>
                      Select location
                    </option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Indore">Indore</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Koltata">Koltata</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>
              </div>
              <div className="hero__three__car-details">
                <h1>
                  <span>Car :-</span> Mustang Gt 
                </h1>
                <img
                  src="http://localhost:3000/static/media/corvette.2f2354d29a573409e50d.png"
                  alt="car_img"
                />
              </div>
            </div>
            <div className="booking-form-content__hero" id="hero__forth">
              <h1 id="hero__forth__details__heading">Personal Information</h1>
              <form className="hero__forth_personal_details_form">
                <div className="hero__forth_personal_details_form__sub">
                  <div>
                    <label htmlFor="firstname">
                      Firstname <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="Enter your first name"
                      required
                    />
                    <p>This field is required</p>
                  </div>
                  <div>
                    <label htmlFor="lastname">
                      lastname <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Enter your last name"
                      required
                    />
                    <p>This field is required</p>
                  </div>
                </div>
                <div className="hero__forth_personal_details_form__sub">
                  <div>
                    <label htmlFor="phone">
                      Phone Number <span>*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      required
                    />
                    <p>This field is required</p>
                  </div>
                  <div>
                    <label htmlFor="age">
                      Age <span>*</span>
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      min={18}
                      placeholder="Enter your Age"
                      required
                    />
                    <p>This field is required</p>
                  </div>
                </div>
                <div className="hero__forth_personal_details_form__sub">
                  <div>
                    <label htmlFor="bookemail">
                      Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      id="bookemail"
                      name="email"
                      min={18}
                      placeholder="Enter your Email"
                      required
                    />
                    <p>This field is required</p>
                  </div>
                </div>
                <div className="hero__forth_personal_details_form__sub">
                  <div>
                    <label htmlFor="address">
                      Address <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Enter your Address"
                      required
                    />
                    <p>This field is required</p>
                  </div>
                </div>
                <div className="hero__forth_personal_details_form__sub">
                  <input type="checkbox" name="updates" id="updates" />
                  <p>Please send me latest news and updates</p>
                </div>
                <div className="hero__forth_personal_details_form__sub button_hero">
                  <button>Reset All</button>
                  <button>Reserve Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingDetailsForm;
