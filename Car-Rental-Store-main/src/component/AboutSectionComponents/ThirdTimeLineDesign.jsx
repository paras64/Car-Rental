import React from 'react';
import styled from "styled-components";
import FirstImg from "../images/About section images/Timeline/second-2.png";

const ThirdTimeLineDesign = () => {
    const ThirdTimeLineDesignSection = styled.section`
    /* border: 2px solid; */
    height: 100%;
    width: 100%;
    padding: 10px;
    .third-timeline {
      /* border: 2px solid; */
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .third-timeline-container-first {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      /* padding: 10px; */
      font-family: poppins, sans-serif;
    }
    .third-timeline-container-first-content-first {
      /* border: 2px solid; */
      padding: 10px 20px;
      width: 100%;
      height: 100%;
    }
    .third-timeline-container-first-content-first h1 {
      font-size: 2rem;
    }
    .third-timeline-container-first-content-first h2 {
      font-size: 20px;
      margin:15px 0px;

      text-transform: uppercase;
    }
    .third-timeline-container-first-content-first p {
      font-family: Rubik, sans-serif;
      font-size: 17px;
      line-height: 22px;
      font-weight: 300;
      text-align: left;
      margin: 0.8rem 0px;
      color: var(--text-color);
    }
    .third-timeline-container-first-content-third {
      height: 100%;
    width: 100%;
      /* border: 2px solid; */
    }

    .third-timeline-container-first-content-third img {
      height: 27rem;
    width: 43rem;
}
 
    .third-timeline-container-third {
      /* border: 2px solid; */
      padding: 10px 25px;
      font-family: "Poppins";
    }
    .third-timeline-container-third-content-first {
    }
    .third-timeline-container-third-content-third h1 {
      text-transform: uppercase;
    }
  `;

  return (
    <ThirdTimeLineDesignSection>
      <div className="third-timeline">
        <div className="third-timeline-container-first">
          <div className="third-timeline-container-first-content-first">
            <h2>The Little Steps</h2>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <p>
              Lorem lorum. Deserunt modi quibusdam, rerum quae incidunt,
              excepturi ducimus, assumenda quidem consectetur voluptate
              provident.
              Lorem lorum. Deserunt modi quibusdam, rerum quae incidunt,
              excepturi ducimus, assumenda quidem consectetur voluptate
              provident.
              Lorem lorum. Deserunt modi quibusdam, rerum quae incidunt,
              excepturi ducimus, assumenda quidem consectetur voluptate
              provident.
              Lorem lorum. Deserunt modi quibusdam, rerum quae incidunt,
              excepturi ducimus, assumenda quidem consectetur voluptate
              provident.
            </p>
          </div>
          <div className="third-timeline-container-first-content-third">
            <img src={FirstImg} alt="" />
          </div>
        </div>
      </div>
    </ThirdTimeLineDesignSection>
  );
}

export default ThirdTimeLineDesign
