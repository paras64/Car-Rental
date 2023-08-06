import React, { useState } from "react";
import "./Style.css";
import { GlobalStyle } from "../styles/GlobalStyle";
import axios from "axios";
const TestimonialForm = () => {
  const [feedbackData, SetFeedbackData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedbackData);
    if (
      feedbackData.firstname &&
      feedbackData.lastname &&
      feedbackData.email &&
      feedbackData.message
    ) {
      if (
        feedbackData.message.split("").length < 220 ||
        feedbackData.message.split("").length > 320
      ) {
        alert(
          "Message should be at least 220 characters and at most 320 characters"
        );
        return;
      }
      const doc = axios.post(
        "http://localhost:8000/testimonials/addtestimonial",
        feedbackData
      );
      doc
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please complete the fields");
      return;
    }
  };
  const resetAll = (e) => {
    e.preventDefault();
    SetFeedbackData({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    SetFeedbackData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <GlobalStyle />
      <section className="feedback-component">
        <div className="testimonial-form-container">
          <div className="content">
            <div className="content-container">
              <h1 className="content-container-heading-first">
                Please helps us Improve
              </h1>
              <h1 className="content-container-heading-second">
                Give Us Your Feedback
              </h1>
              <form className="testimonial-feedback-form">
                <div className="testimonial-feedback-hero">
                  <div>
                    <label htmlFor="firstname">Firstname</label>
                    <input
                      type="text"
                      value={feedbackData.firstname}
                      name="firstname"
                      id="firstname"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastname">Lastname</label>
                    <input
                      type="text"
                      value={feedbackData.lastname}
                      name="lastname"
                      id="lastname"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="testimonial-feedback-hero">
                  <label htmlFor="feedback">Email</label>
                  <input
                    type="email"
                    value={feedbackData.email}
                    name="email"
                    id="feedback"
                    onChange={handleChange}
                  />
                </div>
                <div className="testimonial-feedback-hero">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="8"
                    onChange={handleChange}
                    value={feedbackData.message}
                    className="text-message"
                  ></textarea>
                  <p className="count-character">
                    min: 220 || {feedbackData.message.split("").length}
                    /320 characters
                  </p>
                </div>
                <div className="testimonial-feedback-hero">
                  <button onClick={resetAll}>Reset All</button>
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className="testimonial-slideshow"></div>
        </div>
      </section>
    </>
  );
};

export default TestimonialForm;
