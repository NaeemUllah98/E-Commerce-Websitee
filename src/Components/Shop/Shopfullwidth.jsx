import React from 'react'

export default function Shopfullwidth() {
  return (
    <>
    <div>
    <section className="page-banner">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <span className="round-shape" />
          <h2 className="banner-title">Shop Full Width</h2>
          <div className="bread-crumb"><a href="#">Home</a> / <a href="#">Products</a> / Shop Full Width</div>
        </div>
      </div>
    </div>
  </section>    
  {/* Banner End */}
  {/* Shop Section Start */}
  <section className="shop-fullwidth">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7">
          <div className="product-cate">
            <h5>Categories</h5>
            <ul>
              <li><a className="active" href="#">All</a></li>
              <li><a href="#">Smartphones</a></li>
              <li><a href="#">Computers</a></li>
              <li><a href="#">Cameras</a></li>
              <li><a href="#">On Sale</a></li>
              <li><a href="#">Others</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-5">
          <div className="sort-view">
            <a className="view-mode active" href="#"><i className="twi-th" /></a>
            <a className="view-mode" href="#"><i className="twi-bars" /></a>
            <div className="sorts">
              <select name="sort">
                <option value>Default Sorting</option>
                <option selected="selected" value>low to high</option>
                <option value>high to low</option>
                <option value>Best Seller</option>
                <option value>Popular Products</option>
              </select>
              <i className="twi-angle-down1" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="single-shop-product">
            <div className="sp-thumb">
              <img src="assets/images/shop/9.jpg" alt className />
              <div className="pro-badge">
                <p className="sale">Sale</p>
              </div>
            </div>
            <div className="sp-details">
              <h4>Gaming Headset</h4>
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
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-shop-product">
            <div className="sp-thumb">
              <img src="assets/images/shop/5.jpg" alt className />
              <div className="pro-badge">
                <p className="hot">Hot</p>
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
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-shop-product">
            <div className="sp-thumb">
              <img src="assets/images/shop/1.jpg" alt className />
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
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-shop-product">
            <div className="sp-thumb">
              <img src="assets/images/shop/2.jpg" alt />
            </div>
            <div className="sp-details">
              <h4>Gaming Controller</h4>
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
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-shop-product">
            <div className="sp-thumb">
              <img src="assets/images/shop/10.jpg" alt className />
              <div className="pro-badge">
                <p className="sale">Sale</p>
              </div>
            </div>
            <div className="sp-details">
              <h4>Gaming Headset</h4>
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
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-shop-product">
            <div className="sp-thumb">
              <img src="assets/images/shop/11.jpg" alt className />
              <div className="pro-badge">
                <p className="hot">Hot</p>
              </div>
            </div>
            <div className="sp-details">
              <h4>Wireless Headset</h4>
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
        <div className="col-lg-3 col-md-6">
          <div className="single-shop-product">
            <div className="sp-thumb">
              <img src="assets/images/shop/12.jpg" alt className />
            </div>
            <div className="sp-details">
              <h4>Gaming Controller</h4>
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
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-shop-product">
            <div className="sp-thumb">
              <img src="assets/images/shop/13.jpg" alt className />
            </div>
            <div className="sp-details">
              <h4>Camera Lens</h4>
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
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-shop-product">
            <div className="sp-thumb">
              <img src="assets/images/shop/14.jpg" alt className />
              <div className="pro-badge">
                <p className="sale">Sale</p>
              </div>
            </div>
            <div className="sp-details">
              <h4>LED TV</h4>
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
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-shop-product">
            <div className="sp-thumb">
              <img src="assets/images/shop/8.jpg" alt className />
              <div className="pro-badge">
                <p className="hot">Hot</p>
              </div>
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
        <div className="col-lg-3 col-md-6">
          <div className="single-shop-product">
            <div className="sp-thumb">
              <img src="assets/images/shop/4.jpg" alt className />
            </div>
            <div className="sp-details">
              <h4>Black Drone</h4>
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
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-shop-product">
            <div className="sp-thumb">
              <img src="assets/images/shop/3.jpg" alt className />
            </div>
            <div className="sp-details">
              <h4>Bluetooth Earphones</h4>
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
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 col-md-12 mt-20">
          <div className="goru-pagination text-center clearfix">
            <a className="prev" href="#"><i className="twi-long-arrow-alt-left" /></a>
            <span className="current">1</span>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a className="next" href="#"><i className="twi-long-arrow-alt-right" /></a>
          </div>
        </div>
      </div>  
    </div>
  </section>
</div>

    </>
  )
}
