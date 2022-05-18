import React from 'react'
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
        <div className="logo-upbox-flex">
        <img className="logo" src="https://png.pngtree.com/png-clipart/20200722/original/pngtree-triple-cube-box-logo-sign-symbol-icon-png-image_4969887.jpg" alt="logo"/>
        <h6 className="upbox-text-two-double">UPBOX</h6>
        <img className="instagram-facebook-logo" src="https://library.kissclipart.com/20180914/pyq/kissclipart-facebook-twitter-instagram-youtube-logo-png-clipar-efd6031476d0bb67.jpg" alt="social-handle"/>
        </div>
        <div className="upbox-find-us-all-flex">
        <div className="footer-upbox"> 
            <div className="upbox-main-heading">
            <h5 className="upbox-heading">UPBOX</h5>
            <p className="bag">Upbox Bag</p>
            <p className="bag">Upbox box platinum</p>
            <p className="bag">Upbox boc VIP</p>
            <p className="bag">Deals</p>
            <p className="bag">Seasonal Items</p>
            <p className="bag">Upbox Promise</p>
            </div>
            <div className="product-main-heading">
            <h5 className="upbox-heading">Product</h5>
            <p className="bag">Get the App</p>
            <p className="bag">Loyalty Program</p>
            <p className="bag">Affiliates</p>
            <p className="bag">Press</p>
            </div>
        </div>
        <div className="footer-upbox">
            <div className="follow-us-main-heading">
            <h5 className="upbox-heading">Find Us On</h5>
            <p className="bag">Instagram</p>
            <p className="bag">Facebook</p>
            <p className="bag">Tiktok</p>
            <p className="bag">Snapchat</p>
            <p className="bag">Twitter</p>
            </div>
            <div className="help-main-heading">
            <h5 className="upbox-heading">Help</h5>
            <p className="bag">Return</p>
            <p className="bag">FAQ</p>
            <p className="bag">Contact</p>
            <p className="bag">Community</p>
            <p className="bag">Video</p>
            </div>
            </div>
            </div>
            </div>
  )
}

export default Footer