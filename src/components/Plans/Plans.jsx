import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container">
        <div className="blur plan-blur-1"></div>
        <div className="blur plan-blur-2"></div>
      <div className="program-header">
        <span className="stroke-text">Ready to start</span>
        <span>Your journey</span>
        <span className="stroke-text">Now with us</span>
      </div>
      {/* plan cards */}
      <div className="plans">
        {plansData.map((Plan, i) => (
          <div className="plan" key={i}>
            {Plan.icon}
            <span>{Plan.name} </span>
            <span>$ {Plan.price}</span>

            <div className="features">
              {Plan.features.map((features, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{features}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -></span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
