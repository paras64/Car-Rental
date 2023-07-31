import React from "react";
import styled from "styled-components";
import Testimonial from "./HomePageComponents/Testimonial";
import AboutHome from "./AboutSectionComponents/AboutHome";
import TestimonialHome from "./TestimonialComponent/TestimonialHome";
import HomeImg from "./images/About section images/aboutHome2.jpg";
import Footer from "./Footer";

const TestimonialComponent = () => {
  const TestimonialComponent = styled.section``;

  return (
    <>
      <AboutHome
        img={
          "https://www.fvw.de/news/media/22/Smartphone-Sunny-Cars-212494-detailp.jpeg"
        }
        headingText={"Ride, Love, "}
        spanText={"Repeat."}
        Subheading={"Driving Dreams, Happy Clients"}
      />
      <TestimonialHome />
      <Testimonial />
      <Footer />
    </>
  );
};

export default TestimonialComponent;
