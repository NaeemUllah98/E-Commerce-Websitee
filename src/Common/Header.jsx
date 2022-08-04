import React from 'react'
import { Link } from "react-router-dom";
export default function Header() {
  return (    
    <header className="header-01 fix-header">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-2 col-md-2">
        <div className="logo">
        <Link to="/Home1"></Link>
            <img src="assets/images/logo.png" alt="" />
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <nav className="mainmenu mobile-menu">
          <div className="mobile-btn">
            <Link to="/Home1"><span>Menu</span><i className="twi-bars" /></Link>
          </div>
          <ul>
            <li className="active menu-item-has-children">
              <Link to="/Home">Home</Link>
             
              <ul className="sub-menu">
              <Link to="/Home1">Home1</Link>
              <Link to="/Home2">Home2</Link>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to="/Shop">Shop</Link>
              <ul className="sub-menu">
                <li><Link to="/Shopfullwidth">Shop Fullwidth</Link></li>
                <li><Link to="/Shopleftbar">Shop Left Sidebar</Link></li>
                <li><Link to="/Shoprightbar">Shop Right Sidebar</Link></li>
                <li><Link to="/Shopdetails">Shop Details</Link></li>
                <li><Link to="/Cartpage">Cart Page</Link></li>
                <li><Link to="/Checkout">Checkout Page</Link></li>
                <li><Link to="/Wishlist">Wishlist Page</Link></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to="/Pages">Pages</Link>
              <ul className="sub-menu">
                <li><Link to="/About">About Page</Link></li>
                <li><Link to="/Newsletter">Newsletter Page</Link></li>
                <li><Link to="/Loginregister">Login Register Page</Link></li>
                <li><Link to="/Error">404 Page</Link></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to="/News">News</Link>
              <ul className="sub-menu">
                <li><Link to="/Newsrightbar">News Right Sidebar</Link></li>
                <li><Link to="/Newsleftbar">News Left Sidebar</Link></li>
                <li><Link to="/Newsfullwidth">News Full Width</Link></li>
                <li><Link to="/Newsdetails">News Details</Link></li>
              </ul>
            </li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="col-lg-4 col-md-4">
        <div className="header-cogs">
          <a className="search search-toggles" href="#"><i className="twi-search" /></a>
          <a className="select-country" href="#"><img src="assets/images/flag.png" alt="" />Eng</a>
          <a className="select-currency" href="#"><i className="twi-dollar-sign" />Usd</a>
          <a className="user-login" href="#"><i className="twi-user-circle" /><span>Account</span></a>
          <a className="carts" href="#"><span>4</span><img src="assets/images/cart.png" alt="" /></a>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}
