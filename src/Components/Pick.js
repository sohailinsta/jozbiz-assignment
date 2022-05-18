import React from 'react'
import "./Pick.css";
function Pick() {
  return (
    <div className="pick-container">
        <h3 className="pick-text">Pick Your Plan</h3>
        <div className="monthly-box-flex">
        <div className="monthly-plan">
            <div className="monthly-text">Monthly</div>
            <div className="monthly-price">$18/mo</div>
            <div className="find-your-box">
                <p className="find-text">Find Your Box</p>
            </div>
        </div>
        <div className="monthly-plan-two">
            <div className="monthly-text">Monthly</div>
            <div className="monthly-price">$18/mo</div>
            <div className="find-your-box">
                <p className="find-text">Find Your Box</p>
            </div>
        </div>
        </div>
        <p className="plan-text">Your plan auto-renews at the end of 30 days from the 1st day you signed-up.</p>
    </div>
  )
}

export default Pick