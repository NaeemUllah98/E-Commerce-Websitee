import React from 'react'
import {Link} from 'react-router-dom'
export default function Error() {
  return (
    <>
     <div>
     <header className="header-01 fix-header">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-2 col-md-2">
        <div className="logo">
        <Link to="Home"></Link>
            <img src="assets/images/logo.png" alt="" />
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <nav className="mainmenu mobile-menu">
          <div className="mobile-btn">
            <a href="#"><span>Menu</span><i className="twi-bars" /></a>
          </div>
          <ul>
            <li className="active menu-item-has-children">
              <Link to="Home">Home</Link>
             
              <ul className="sub-menu">
              <Link to="Home">Home1</Link>
              <Link to="Home2">Home2</Link>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to="Shop">Shop</Link>
              <ul className="sub-menu">
                <li><Link to="Shopfullwidth">Shop Fullwidth</Link></li>
                <li><Link to="Shopleftbar">Shop Left Sidebar</Link></li>
                <li><Link to="Shoprightbar">Shop Right Sidebar</Link></li>
                <li><Link to="Shopdetails">Shop Details</Link></li>
                <li><Link to="Cart">Cart Page</Link></li>
                <li><Link to="Checkout">Checkout Page</Link></li>
                <li><Link to="Wishlist">Wishlist Page</Link></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to="Pages">Pages</Link>
              <ul className="sub-menu">
                <li><Link to="About">About Page</Link></li>
                <li><Link to="Newsletter">Newsletter Page</Link></li>
                <li><Link to="Loginregister">Login Register Page</Link></li>
                <li><Link to="Error">404 Page</Link></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to="News">News</Link>
              <ul className="sub-menu">
                <li><Link to="Blogrightbar">News Right Sidebar</Link></li>
                <li><Link to="Blogleftbar">News Left Sidebar</Link></li>
                <li><Link to="Blogfullwidth">News Full Width</Link></li>
                <li><Link to="Blogdetails">News Details</Link></li>
              </ul>
            </li>
            <li><Link to="Contact">Contact</Link></li>
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
  <section className="page-banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="round-shape" />
          <h2 className="banner-title">404 - Not found</h2>
          <div className="bread-crumb"><a href="#">Home</a> / 404</div>
        </div>
      </div>
    </div>
  </section>    
  {/* Banner End */}
  {/* 404 Section Start */}
  <section className="error-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="content-404 text-center">
            <img src="assets/images/404.png" alt />
            <h2>Something went wrong</h2>
            <a href="#" className="goru-btn">Go Back Home</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}
