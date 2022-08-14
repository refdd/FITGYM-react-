import React from "react";
import "./Plane.css";
import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
function Plane() {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan">
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))} 
            </div>
            <div>
              <span>See More Benefits -> </span>
            </div>
            <button className="btn"> Join Now </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plane;
