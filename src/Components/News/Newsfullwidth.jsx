import React from 'react'

export default function Newsfullwidth() {
  return (
    <>
    <div>
    <section className="popup-search-sec">
    <div className="popup-search-overlay" />
    <div className="overlay-popup">
      <a href="javascript:void(0);" className="search-closer">x</a>
      <div className="middle-search">
        <div className="popup-search-form">  
           <form method="get" action="#">
            <input type="search" name="s" id="s" placeholder="Search..." />
            <button type="submit"><i className="twi-search" /></button>
          </form>Search Form End 
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
          <h2 className="banner-title">News Full Width Details</h2>
          <div className="bread-crumb"><a href="index.html">Home</a> / Blog</div>
        </div>
      </div>
    </div>
  </section> 
  {/* Banner End */}
  {/* Blog Section Start */}
  <section className="blog-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-news">
            <div className="news-thumb">
              <img src="assets/images/blog/1.jpg" alt="" />
            </div>
            <div className="news-details">
              <span className="post-meta">By<a href="#"> Admin</a>, 1 week a go</span>
              <h4>
                <a href="single-post.html">
                  Nam ac elit a ante commodo Condimentum a vehicula tristique
                </a>
              </h4>   
              <a className="read-more" href="single-post.html">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-news">
            <div className="news-thumb">
              <img src="assets/images/blog/2.jpg" alt="" />
            </div>
            <div className="news-details">
              <span className="post-meta">By<a href="#"> Admin</a>, 1 week a go</span>
              <h4>
                <a href="single-post.html">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </a>
              </h4>   
              <a className="read-more" href="single-post.html">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-news">
            <div className="news-thumb">
              <img src="assets/images/blog/3.jpg" alt="" />
            </div>
            <div className="news-details">
              <span className="post-meta">By<a href="#"> Admin</a>, 1 week a go</span>
              <h4>
                <a href="single-post.html">
                  Ut enim ad minim venium eos qui odit lorem telica comuo fira mende
                </a>
              </h4>   
              <a className="read-more" href="single-post.html">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-news">
            <div className="news-thumb">
              <img src="assets/images/blog/4.jpg" alt="" />
            </div>
            <div className="news-details">
              <span className="post-meta">By<a href="#"> Admin</a>, 1 week a go</span>
              <h4>
                <a href="single-post.html">
                  Nam ac elit a ante commodo Condimentum a vehicula tristique
                </a>
              </h4>   
              <a className="read-more" href="single-post.html">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-news">
            <div className="news-thumb">
              <img src="assets/images/blog/5.jpg" alt="" />
            </div>
            <div className="news-details">
              <span className="post-meta">By<a href="#"> Admin</a>, 1 week a go</span>
              <h4>
                <a href="single-post.html">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </a>
              </h4>   
              <a className="read-more" href="single-post.html">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-news">
            <div className="news-thumb">
              <img src="assets/images/blog/6.jpg" alt="" />
            </div>
            <div className="news-details">
              <span className="post-meta">By<a href="#"> Admin</a>, 1 week a go</span>
              <h4>
                <a href="single-post.html">
                  Ut enim ad minim venium eos qui odit lorem telica comuo fira mende
                </a>
              </h4>   
              <a className="read-more" href="single-post.html">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-top-20">
        <div className="col-lg-12 text-center">
          <a href="#" className="goru-btn">view more</a>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Section End */}
  
  {/* Back To Top */}
  <a href="#" id="backtotop"><i className="twi-angle-double-up2" /></a>
</div>

    </>
  )
}
