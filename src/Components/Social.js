import React from 'react'
import "./Social.css";
function Social() {
  return (
    <div className="social-container">
        <h3 className="social-text">Social Posts</h3>
        <div className="social-post-flex-large">
        <div className="social-post-flex">
          <div>
        <img className="social-post" src="https://www.psafinancial.com/wp-content/uploads/2016/09/compressed-social-media-girl.jpg" alt="product"/>
        <p className="rock-text">How to rock the lip look that turns heads </p>
        </div>
        <div className="makeup-margin">
        <img className="makeup-post" src="https://static.onecms.io/wp-content/uploads/sites/14/2020/08/20/makeup-header-2000.jpg" alt="product"/>
        <p className="find-perfect-text">Find the perfect shade for the season</p>
        </div>
        </div>
        <div className="social-post-flex">
          <div>
        <img className="makeup-post-two" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-index-makeup-essentials-1645556621.jpg?crop=0.444xw:0.888xh;0.260xw,0.0673xh&resize=640:*" alt="product"/>
        <p className="the-eye">The 5 eye shadow secrets you never knew</p>
        </div>
        <div className="makeup-margin">
        <img className="makeup-post-three" src="https://image.shutterstock.com/image-photo/makeup-artist-applies-powder-blush-260nw-1805797540.jpg" alt="product"/>
        <p className="the-pop-tips">The pro-tips for at home hair dying</p>
        </div>
        </div>
        </div>
        <div className="subscribe-box">
            <p className="follow-us-text">FOLLOW US ON INSTAGRAM</p>
        </div>
    </div>
  )
}

export default Social