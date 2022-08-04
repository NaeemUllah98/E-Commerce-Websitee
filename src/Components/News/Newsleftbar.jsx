import React from 'react'

export default function Newsleftbar() {
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
          <h2 className="banner-title">News Left Bar Details</h2>
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
        <div className="col-lg-4 col-md-5">
          <div className="blog-sidebar bs-left">
            <aside className="widget">
              <h3 className="widget-title">Search</h3>
              <form method="get" className="search-form" action="#">
                <input type="search" name="s" id="s" placeholder="Search anything" />
                <button type="submit"><i className="twi-search" /></button>
              </form>
            </aside>
            <aside className="widget">
              <h3 className="widget-title">Categories</h3>
              <ul>
                <li><a href="#">Smartphones</a></li>
                <li><a href="#">Headset</a></li>
                <li><a href="#">Smartwatch</a></li>
                <li><a href="#">Drones</a></li>
                <li><a href="#">Computer Parts</a></li>
              </ul>
            </aside>
            <aside className="widget recent-post-widget">
              <h3 className="widget-title">Recent Post</h3>
              <div className="single-rc-post">
                <a href="#"><img src="assets/images/blog/r1.jpg" alt="" /></a>
                <h5><a href="#">Nam ac elit a ante commodo</a></h5>
                <span>by <a href="#">admin</a></span>
              </div>
              <div className="single-rc-post">
                <a href="#"><img src="assets/images/blog/r2.jpg" alt="" /></a>
                <h5><a href="#">Tortor nec commodo Condimentum</a></h5>
                <span>by <a href="#">admin</a></span>
              </div>
              <div className="single-rc-post">
                <a href="#"><img src="assets/images/blog/r3.jpg" alt="" /></a>
                <h5><a href="#">Faucibus sed dolor egetCondimentum vehicula tristique</a></h5>
                <span>by <a href="#">admin</a></span>
              </div>
            </aside>
            <aside className="widget">
              <h3 className="widget-title">Tags</h3>
              <div className="tagcloud">
                <a href="#">Phone</a>
                <a href="#">TV</a>
                <a href="#">VRBox</a>
                <a href="#">Headphone</a>
                <a href="#">Drone</a>
              </div>
            </aside>
          </div>
        </div>
        <div className="col-lg-8 col-md-7">
          <div className="row">
            <div className="col-lg-6">
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
            <div className="col-lg-6">
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
            <div className="col-lg-6">
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
            <div className="col-lg-6">
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
            <div className="col-lg-6">
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
            <div className="col-lg-6">
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
