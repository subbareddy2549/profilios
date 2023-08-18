import React from 'react';
import portifilio from "./portifilio.css";
import Pic from "../../Assets/Pic.jpg";
import Pic1 from "../../Assets/Pic1.jpg";
import Pic2 from "../../Assets/Pic2.jpg";


export const Portifilio = () => {
  return (
    <section id='portifilio'>
      <div className="container portifilio_container">
        <h5>Projects</h5>
      <div className="project">
        <img src={Pic} alt="pro" />
        <img src={Pic1} alt="pro1" />
        <img src={Pic2} alt="pro2" />
      </div>
      </div>
    </section>
  )
}
