import React from 'react'
import "./Header.css";

function Header() {
  return (
    <div className="main-header">
        <img className="logo" src="https://png.pngtree.com/png-clipart/20200722/original/pngtree-triple-cube-box-logo-sign-symbol-icon-png-image_4969887.jpg" alt="logo"/>
        <h6 className="upbox-text">UPBOX</h6>
        <img className="hambergur-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" alt="logo"/>
        <p className="this-month">THIS MONTH</p>
        <p className="this-month-text">SKIN</p>
        <p className="this-month-text">HAIR</p>
        <p className="this-month-text">BATH</p>
        <p className="this-month-text">SALE</p>
        <div className="header-login">
          <p className="header-login-text">LOG IN ></p>
        </div>
    </div>
  )
}

export default Header