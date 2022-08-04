import React from 'react'

export default function Contact() {
  return (
    <>
   <div>
  <section className="popup-search-sec">
    <div className="popup-search-overlay" />
    <div className="overlay-popup">
      <a href="javascript:void(0);" className="search-closer">x</a>{/* Close Popup Btn */}
      <div className="middle-search">
        <div className="popup-search-form">{/* Search Form Start */}
          <form method="get" action="#">
            <input type="search" name="s" id="s" placeholder="Search..." />
            <button type="submit"><i className="twi-search" /></button>
          </form>{/* Search Form End */}
        </div>
      </div>
    </div>
  </section>
  {/* Popup Search */}
  {/* Banner Start */}
  <section className="page-banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="round-shape" />
          <h2 className="banner-title">Contact</h2>
          <div className="bread-crumb"><a href="index.html">Home</a> / Contact</div>
        </div>
      </div>
    </div>
  </section>    
  {/* Banner End */}
  {/* History Section Start */}
  <section className="contact-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-7">
          <h3 className="sec-title">Our Store</h3>
          <div className="info-contact">
            <h5>Address: <p> 342 East American Street, New York, USA - 1212</p></h5>
            <h5>Phone: <p> +1 (817) 234 - 234</p></h5>
            <h5>Email: <p> info@goru-store.com</p></h5>
            <h5>Social: 
              <a href="#"><i className="twi-facebook" /></a>
              <a href="#"><i className="twi-twitter-square" /></a>
              <a href="#"><i className="twi-pinterest-square" /></a>
            </h5>
          </div>
        </div>
        <div className="col-lg-5 col-md-5">
          <div className="contact-thumb">
            <img src="assets/images/contact.jpg" alt />
          </div>
        </div>
      </div>
      <div className="row mar-top-bottom">
        <div className="col-lg-12">
          <div className="goru_map grayscale">
            <iframe src="https://maps.google.com/maps?width=720&height=600&hl=en&coord=39.966528,-75.158284&q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&ie=UTF8&t=p&z=16&iwloc=B&output=embed" scrolling="no" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="sec-title">Get In Touch With Us</h2>
          <p className="sec-desc">
            Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia<br /> voluptas sit aspernatur aut 
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="contact-form text-center">
            <form action="#" method="post" id="contact-form" className="row">
              <div className="col-lg-4 col-md-4">
                <input type="text" name="con_name" className="required" placeholder="Enter your name" />
              </div>
              <div className="col-lg-4 col-md-4">
                <input type="email" name="con_email" className="required" placeholder="Your Email" />
              </div>
              <div className="col-lg-4 col-md-4">
                <input type="text" name="con_subject" placeholder="Subject" />
              </div>
              <div className="col-lg-12 col-md-12">
                <textarea name="con_message" className="required" placeholder="Your message here" defaultValue={""} />
              </div>
              <div className="col-lg-12 col-md-12">
                <button type="submit" className="goru-btn">Shoot</button>
                <img src="assets/images/ajax.gif" alt className="goru_loader" />
                <div className="goru_con_message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}
