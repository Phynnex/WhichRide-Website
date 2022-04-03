import React from 'react';
import './style.css'
import HeroImage from '../../assets/hero.svg';

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-heading">
            Compare & book
            <br /> ride-hailing providers{" "}
          </p>
          <p className="hero-paragraph">
            Save money and time with WhichrRide.
            <br />
            Think Compare the market but for taxis.
          </p>
          <button className="hero-btn">Launching Soon</button>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="hero"
            width="500"
            height="540"
            className="hero-img"
          />
        </div>
      </div>
    </>
  );
}



export default Hero;