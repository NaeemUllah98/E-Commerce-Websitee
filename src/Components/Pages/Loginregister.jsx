import React from 'react'

export default function Loginregister() {
  return (
    <>
     <div>
  <section className="page-banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="round-shape" />
          <h2 className="banner-title">Login / Register</h2>
          <div className="bread-crumb"><a href="index.html">Home</a> / Login</div>
        </div>
      </div>
    </div>
  </section>    
  {/* Banner End */}
  {/* Login Register Section Start */}
  <section className="login-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <h3 className="sec-title">Login your account</h3>
          <p className="sec-desc">
            Login to your account to discovery all great features in this item
          </p>
          <div className="login-form">
            <form action="#" method="post">
              <input type="text" name="name" placeholder="User Name" />
              <input type="password" name="password" placeholder="Your Password" />
              <div className="keep-log-regi">
                <input type="radio" id="login" name="login" defaultValue="keep-login" />
                <label htmlFor="login">Keep me logged in</label>   
              </div>
              <a href="#">Forgot your password?</a>
              <input type="submit" name="submit" defaultValue="login" />
            </form>
          </div>
          <div className="social-log-regi">
            <h5>OR LOGIN WITH</h5>
            <a href="#"><i className="twi-facebook-f" /></a>
            <a href="#"><i className="twi-twitter" /></a>
            <a href="#"><i className="twi-google-plus-g" /></a>
            <a href="#"><i className="twi-instagram" /></a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <h3 className="sec-title">Register account now</h3>
          <p className="sec-desc">
            Pellentesque habitant morbi tristique senectus et netus et
          </p>
          <div className="register-form">
            <form action="#" method="post">
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" name="full-name" placeholder="Your Name" />
                </div>
                <div className="col-lg-6">
                  <input type="text" name="name" placeholder="User Name" />
                </div>
                <div className="col-lg-6">
                  <input type="number" name="phone" placeholder="Phone" />
                </div>
                <div className="col-lg-6">
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="col-lg-6">
                  <input type="password" name="password" placeholder="Password" />
                </div>
                <div className="col-lg-6">
                  <input type="password" name="retype-password" placeholder="Re Password" />
                </div>
              </div>
              <div className="keep-log-regi">
                <input type="radio" id="register" name="register" defaultValue="keep-register" />
                <label htmlFor="register">
                  I accept the terms and conditions, including the Privacy Policy
                </label>   
              </div>
              <input type="submit" name="submit" defaultValue="register" />
            </form>
          </div>
          <div className="social-log-regi">
            <h5>OR Register WITH</h5>
            <a href="#"><i className="twi-facebook-f" /></a>
            <a href="#"><i className="twi-twitter" /></a>
            <a href="#"><i className="twi-google-plus-g" /></a>
            <a href="#"><i className="twi-instagram" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}
