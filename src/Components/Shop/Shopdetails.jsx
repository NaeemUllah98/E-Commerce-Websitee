import React from 'react'
export default function Shopdetails() {
  return (
    <>
   <div>
   <section className="page-banner">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <span className="round-shape" />
          <h2 className="banner-title">Shop Details</h2>
          <div className="bread-crumb"><a href="#">Home</a> / <a href="#">Products</a> / Shop Details</div>
        </div>
      </div>
    </div>
  </section>   
  {/* Banner End */}
  {/* Shop Section Start */}
  <section className="single-product-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12">
          <div id="product-slider" className="carousel slide product-slider" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="ps-img">
                  <img src="assets/images/shop/single-product.jpg" alt />
                </div>
              </div>
              <div className="carousel-item">
                <div className="ps-img">
                  <img src="assets/images/shop/single-product.jpg" alt />
                </div>
              </div>
              <div className="carousel-item">
                <div className="ps-img">
                  <img src="assets/images/shop/single-product.jpg" alt />
                </div>
              </div>
            </div>
            <ol className="carousel-indicators clearfix">
              <li data-target="#product-slider" data-slide-to={0} className="active"><img src="assets/images/shop/s1.png" alt /></li>
              <li data-target="#product-slider" data-slide-to={1}><img src="assets/images/shop/s2.png" alt /></li>
              <li data-target="#product-slider" data-slide-to={2}><img src="assets/images/shop/s2.png" alt /></li>
            </ol>
          </div>
        </div>
        <div className="col-lg-5 col-md-12">
          <div className="sin-product-details">
            <h3>Gaming Controller</h3>
            <div className="woocommerce-product-rating">
              <div className="star-rating">
                <i className="twi-star" />
                <i className="twi-star" />
                <i className="twi-star" />
                <i className="twi-star" />
                <span>
                  <i className="twi-star" />
                </span>
              </div>
              <a href="#" className="woocommerce-review-link"><span className="count">03</span> customer reviews
              </a>
            </div>
            <div className="product-price clearfix">
              <span className="price">
                <span><span className="woocommerce-Price-currencySymbol">$</span>999.00</span>
              </span>         
            </div>
            <div className="pro-excerp">
              <p>
                Sed id interdum urna. Nam ac elit a ante commodo tristique. tum vehicula a hendrerit ac nisi. hendrerit ac nisi Lorem ipsum dolor sit perdiet nibh vel magna lacinia ultrices. Sed id interdum urna.
              </p>
            </div>
            <div className="product-color">
              <h5>Color</h5>
              <div className="color-1" />
              <div className="color-2" />
              <div className="color-3" />
            </div>
            <div className="product-size">
              <h5>Size:</h5>
              <div className="size-wrapper">
                <div className="size-btn clearfix">
                  <input type="radio" id="x" name="size" defaultValue="x" />
                  <label htmlFor="x">x</label>  
                </div>
                <div className="size-btn clearfix">
                  <input type="radio" id="xr" name="size" defaultValue="xr" />
                  <label htmlFor="xr">XR</label>    
                </div>
                <div className="size-btn clearfix">
                  <input defaultChecked="checked" type="radio" id="xs" name="size" defaultValue="xs" />
                  <label htmlFor="xs">xs</label>    
                </div>
                <div className="size-btn clearfix">
                  <input type="radio" id="xm" name="size" defaultValue="xm" />
                  <label htmlFor="xm">xm</label>    
                </div>
              </div>
            </div>
            <div className="product-cart-qty">
              <div className="quantityd clearfix">
                <button className="qtyBtn btnMinus"><span>-</span></button>
                <input name="qty" defaultValue={1} title="Qty" className="input-text qty text carqty" type="text" />
                <button className="qtyBtn btnPlus">+</button>
              </div>
              <a href="#" className="add-to-cart-btn">Add To Cart</a>
              <a href="#" className="Whislist"><i className="twi-heart" /></a>
              <a href="#" className="compare"><i className="twi-random" /></a>
            </div>
            <div className="pro-socila">
              <a href="#"><i className="twi-facebook" /></a>
              <a href="#"><i className="twi-twitter-square" /></a>
              <a href="#"><i className="twi-pinterest-square" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row"><div className="col-lg-12"><div className="divider" /></div></div>
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <div className="product-tabarea">
            <ul className="nav nav-tabs productTabs" id="productTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="descriptions-tab" data-toggle="tab" href="#descriptions" role="tab" aria-controls="descriptions" aria-selected="true">Description</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews (2)</a>
              </li>
            </ul>
            <div className="tab-content" id="productTabContent">
              <div className="tab-pane fade show active" id="descriptions" role="tabpanel" aria-labelledby="descriptions-tab">
                <div className="descriptionContent">
                  <p>
                    Sed id interdum urna. Nam ac elit a ante commodo tristique. condimentum vehicula a hendrerit ac nisi. hendrerit ac nisi Lorem ipsum dolor sit amet Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. 
                  </p>
                  <p>
                    Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="descriptions-tab">
                <div className="comment-area">
                  <h4 className="comment-title">2 Reviews to “Gaming Controller”</h4>
                  <ol className="comment-list">
                    <li>
                      <div className="single-comment">
                        <img src="assets/images/blog/c1.jpg" alt />
                        <h5><a href="#">Jason Statham</a><span>July 06th, 2017</span></h5>
                        <div className="comment">
                          <p>
                            sapien lorem  et tristique nulla lectus fauc-ibus est Pellentesque dapibus
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-comment">
                        <img src="assets/images/blog/c1.jpg" alt />
                        <h5><a href="#">Jason Statham</a><span>July 06th, 2017</span></h5>
                        <div className="comment">
                          <p>
                            Proin vitae dignissim enim, a iaculis sapien. nisi et dignissim efficitur
                          </p>
                        </div>
                      </div>
                    </li>
                  </ol>
                  <div className="comment-form-wrapper">
                    <h5>Add Reivew</h5>
                    <form action="#" method="post" className="row comment-form">
                      <div className="col-lg-6 col-md-6">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <textarea name="message" placeholder="Reviews" defaultValue={""} />
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <input type="submit" name="submit" defaultValue="Submit Review" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="product-speciality">
            <h5>Specifications</h5>
            <ul>
              <li>5.5 “ screen size</li>
              <li>170 x 80 x15 cm</li>
              <li>IOS 13 pre -installed</li>
              <li>3 Cameras Installed</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="related-product-area">
            <h3>Related Products</h3>
            <div className="related-slider owl-carousel">
              <div className="single-shop-product">
                <div className="sp-thumb">
                  <img src="assets/images/shop/5.jpg" alt className />
                  <div className="pro-badge">
                    <p className="sale">Sale</p>
                  </div>
                </div>
                <div className="sp-details">
                  <h4>VRBOX Gaming</h4>
                  <div className="product-price clearfix">
                    <span className="price">
                      <del><span><span className="woocommerce-Price-currencySymbol">$</span>42.00</span></del>
                      <ins><span><span className="woocommerce-Price-currencySymbol">$</span>38.00</span></ins>
                    </span>         
                  </div>
                  <div className="sp-details-hover">
                    <a className="sp-cart" href="#"><i className="twi-cart-plus" /><span>Add to cart</span></a>
                    <a className="sp-wishlist" href="#"><i className="twi-heart2" /></a>
                  </div>
                </div>
              </div>
              <div className="single-shop-product">
                <div className="sp-thumb">
                  <img src="assets/images/shop/1.jpg" alt className />
                  <div className="pro-badge">
                    <p className="hot">Hot</p>
                  </div>
                </div>
                <div className="sp-details">
                  <h4>Gaming Mouse</h4>
                  <div className="product-price clearfix">
                    <span className="price">
                      <del><span><span className="woocommerce-Price-currencySymbol">$</span>42.00</span></del>
                      <ins><span><span className="woocommerce-Price-currencySymbol">$</span>38.00</span></ins>
                    </span>         
                  </div>
                  <div className="sp-details-hover">
                    <a className="sp-cart" href="#"><i className="twi-cart-plus" /><span>Add to cart</span></a>
                    <a className="sp-wishlist" href="#"><i className="twi-heart2" /></a>
                  </div>
                </div>
              </div>
              <div className="single-shop-product">
                <div className="sp-thumb">
                  <img src="assets/images/shop/8.jpg" alt className />
                </div>
                <div className="sp-details">
                  <h4>Wirless Headset</h4>
                  <div className="product-price clearfix">
                    <span className="price">
                      <span><span className="woocommerce-Price-currencySymbol">$</span>122.00</span>
                    </span>         
                  </div>
                  <div className="sp-details-hover">
                    <a className="sp-cart" href="#"><i className="twi-cart-plus" /><span>Add to cart</span></a>
                    <a className="sp-wishlist" href="#"><i className="twi-heart2" /></a>
                  </div>
                </div>
              </div>
              <div className="single-shop-product">
                <div className="sp-thumb">
                  <img src="assets/images/shop/5.jpg" alt className />
                  <div className="pro-badge">
                    <p className="sale">Sale</p>
                  </div>
                </div>
                <div className="sp-details">
                  <h4>VRBOX Gaming</h4>
                  <div className="product-price clearfix">
                    <span className="price">
                      <del><span><span className="woocommerce-Price-currencySymbol">$</span>42.00</span></del>
                      <ins><span><span className="woocommerce-Price-currencySymbol">$</span>38.00</span></ins>
                    </span>         
                  </div>
                  <div className="sp-details-hover">
                    <a className="sp-cart" href="#"><i className="twi-cart-plus" /><span>Add to cart</span></a>
                    <a className="sp-wishlist" href="#"><i className="twi-heart2" /></a>
                  </div>
                </div>
              </div>
              <div className="single-shop-product">
                <div className="sp-thumb">
                  <img src="assets/images/shop/1.jpg" alt className />
                  <div className="pro-badge">
                    <p className="hot">Hot</p>
                  </div>
                </div>
                <div className="sp-details">
                  <h4>Gaming Mouse</h4>
                  <div className="product-price clearfix">
                    <span className="price">
                      <del><span><span className="woocommerce-Price-currencySymbol">$</span>42.00</span></del>
                      <ins><span><span className="woocommerce-Price-currencySymbol">$</span>38.00</span></ins>
                    </span>         
                  </div>
                  <div className="sp-details-hover">
                    <a className="sp-cart" href="#"><i className="twi-cart-plus" /><span>Add to cart</span></a>
                    <a className="sp-wishlist" href="#"><i className="twi-heart2" /></a>
                  </div>
                </div>
              </div>
              <div className="single-shop-product">
                <div className="sp-thumb">
                  <img src="assets/images/shop/8.jpg" alt className />
                </div>
                <div className="sp-details">
                  <h4>Wirless Headset</h4>
                  <div className="product-price clearfix">
                    <span className="price">
                      <span><span className="woocommerce-Price-currencySymbol">$</span>122.00</span>
                    </span>         
                  </div>
                  <div className="sp-details-hover">
                    <a className="sp-cart" href="#"><i className="twi-cart-plus" /><span>Add to cart</span></a>
                    <a className="sp-wishlist" href="#"><i className="twi-heart2" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}
