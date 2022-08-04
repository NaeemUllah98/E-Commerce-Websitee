import React from 'react'

export default function About() {
  return (
    <>
 <section className="page-banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="round-shape" />
          <h2 className="banner-title">About</h2>
          <div className="bread-crumb"><a href="#">Home</a> / About</div>
        </div>
      </div>
    </div>
  </section> 
  <section className="history-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <h3 className="sec-title">Our History</h3>
          <p>
            Sed id interdum urna. Nam ac elit a ante commodo tristique. condimentum vehicula a hendrerit ac nisi. hendrerit ac nisi Lorem ipsum dolor sit amet Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna.
          </p>
          <p>
            Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet.
          </p>
          <a href="#" className="goru-btn">start now</a>
        </div>
        <div className="col-lg-5">
          <div className="history-thumb">
            <img src="assets/images/about/1.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="row m-top-113">
        <div className="col-lg-12">
          <div className="video-banner" style={{backgroundImage: 'url(assets/images/about/video-bg.jpg)'}}>
            <a className="popup-video" href="https://www.youtube.com/embed/LXb3EKWsInQ" data-rel="lightcase"><i className="twi-play-circle" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* History Section End */}
  {/* Service Section Start */}
  <section className="service-section service-ab">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-service">
            <img src="assets/images/home/truck2.png" alt="" />
            <h4>100% Free Shipping</h4>
            <p>We ship all our products for free as long as you buying within the USA.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-service">
            <img src="assets/images/home/headphone2.png" alt="" />
            <h4>24/7 Support</h4>
            <p>Our support team is extremely active, you will get response within 2 minutes.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-service">
            <img src="assets/images/home/undo2.png" alt="" />
            <h4>30 Day Return</h4>
            <p>Our 30 day return program is open from customers, just fill up a simple form.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Service Section End */}
  {/* Client Section Start */}
  <section className="client-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="client-logo owl-carousel">
            <a href="#"><img src="assets/images/home/client-logo/1.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo/2.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo/3.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo/4.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo/5.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo/1.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo/2.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo/3.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo/4.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo/5.png" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>


    </>
  )
}
