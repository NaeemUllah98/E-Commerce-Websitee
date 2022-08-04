import React from 'react'

export default function Newsdetails() {
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
          <h2 className="banner-title">News Details</h2>
          <div className="bread-crumb"><a href="index.html">Home</a> / Blog</div>
        </div>
      </div>
    </div>
  </section> 
  {/* Banner End */}
  {/* Blog Section Start */}
  <section className="blog-details-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="single-blog">
            <div className="blog-thumb">
              <img src="assets/images/blog/blog-details.jpg" alt="" />
            </div>
            <div className="blog-post-meta">
              <span><img src="assets/images/blog/author.jpg" alt="" />By <a href="#">Admin</a>, 1 week a go </span>
              <span className="cate"><a href="#">Smarphones</a></span>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="social-share">
                  <h5>Share:</h5>
                  <a href="#"><i className="twi-facebook-f" /></a>
                  <a href="#"><i className="twi-twitter" /></a>
                  <a href="#"><i className="twi-google-plus-g" /></a>
                  <a href="#"><i className="twi-behance" /></a>
                </div>
              </div>
              <div className="col-lg-9 col-md-9">
                <div className="blog-content">
                  <h3 className="blog-title">
                    Proin vitae dignissim enim, a iaculis sapien. nisi et dign
                    sim efficitur, sapien lorem porta lorem.
                  </h3>
                  <p>
                    Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus.
                  </p>
                  <p>
                    Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor.
                  </p>
                  <h4>Features:</h4>
                  <ul>
                    <li>5.5 “ Screen, 1080 x 1920 screen size</li>
                    <li>10 cm height</li>
                    <li>7 hours calling time</li>
                    <li>20 MP Camera</li>
                    <li>12 MP Selfie Camera</li>
                  </ul>
                  <div className="post-tag">
                    <h5>Tag: <a href="#"> Smartphone</a></h5>
                  </div>
                </div>
                <div className="comment-area">
                  <h4 className="comment-title">COMMENT: <span>2</span></h4>
                  <ol className="comment-list">
                    <li>
                      <div className="single-comment">
                        <img src="assets/images/blog/c1.jpg" alt="" />
                        <h5><a href="#">Jason Statham</a><span>July 06th, 2017</span></h5>
                        <div className="comment">
                          <p>
                            Proin vitae dignissim enim, a iaculis sapien. nisi et dignissim efficitur, sapien lorem  et tristique nulla lectus fauc-ibus est Pellentesque dapibus
                          </p>
                        </div>
                        <a className="comment-reply-link" href="#">Reply</a>
                      </div>
                      <ul className="children">
                        <li>
                          <div className="single-comment">
                            <img src="assets/images/blog/c2.jpg" alt="" />
                            <h5><a href="#">Herbie Darbage</a><span>July 06th, 2017</span></h5>
                            <div className="comment">
                              <p>
                                Proin vitae dignissim enim, a iaculis sapien. nisi et dignissim efficitur, sapien lorem  et tristique nulla lectus faucibus est Pellentesque dapibus
                              </p>
                            </div>
                            <a className="comment-reply-link" href="#">Reply</a>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="single-comment">
                        <img src="assets/images/blog/c1.jpg" alt="" />
                        <h5><a href="#">Jason Statham</a><span>July 06th, 2017</span></h5>
                        <div className="comment">
                          <p>
                            Proin vitae dignissim enim, a iaculis sapien. nisi et dignissim efficitur, sapien lorem  et tristique nulla lectus fauc-ibus est Pellentesque dapibus
                          </p>
                        </div>
                        <a className="comment-reply-link" href="#">Reply</a>
                      </div>
                    </li>
                  </ol>
                  <div className="comment-form-wrapper">
                    <h5>LEAVE A COMMENT</h5>
                    <form action="#" method="post" className="row comment-form">
                      <div className="col-lg-6 col-md-6">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <textarea name="message" placeholder="Your message" defaultValue={""} />
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <input type="submit" name="submit" defaultValue="post" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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
