import React from 'react'
export default function Wishlist() {
  return (
    <>
    <section className="page-banner">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <span className="round-shape" />
          <h2 className="banner-title">Wishlist</h2>
          <div className="bread-crumb"><a href="#">Home</a> / <a href="#">Products</a> / Wishlist</div>
        </div>
      </div>
    </div>
  </section>
    <section className="wishlist-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <form className="woocommerce-wishlist-form" action="#">
          <table className="wishlist-table">
            <thead>
              <tr>
                <th className="product-name-thumbnail">Product Name</th>
                <th className="product-price">Unit Price</th>
                <th className="product-quantity">Availability</th>
                <th className="product-total">&nbsp;</th>
                <th className="product-remove">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr className="wishlist-item">
                <td className="product-thumbnail-title">
                  <a href="#">
                    <img src="assets/images/cart/3.jpg" alt />
                  </a>
                  <a className="product-name" href="#">Gaming Controller</a> 
                </td>
                <td className="product-unit-price">
                  <div className="product-price clearfix">
                    <span className="price">
                      <span><span className="woocommerce-Price-currencySymbol">$</span>42.00</span>
                    </span>           
                  </div>
                </td>
                <td className="product-availity clearfix">
                  <a href="#">In Stock</a>
                </td>
                <td className="add-to-cart">
                  <a href="#">Add To Cart</a>
                </td>
                <td className="product-remove">
                  <a href="#" />
                </td>
              </tr>
              <tr className="wishlist-item">
                <td className="product-thumbnail-title">
                  <a href="#">
                    <img src="assets/images/cart/2.jpg" alt />
                  </a>
                  <a className="product-name" href="#">VRBOX Gaming</a> 
                </td>
                <td className="product-unit-price">
                  <div className="product-price clearfix">
                    <span className="price">
                      <span><span className="woocommerce-Price-currencySymbol">$</span>142.00</span>
                    </span>           
                  </div>
                </td>
                <td className="product-availity clearfix">
                  <span>Out Of Stock</span>
                </td>
                <td className="add-to-cart">
                  <a href="#">Add To Cart</a>
                </td>
                <td className="product-remove">
                  <a href="#" />
                </td>
              </tr>
              <tr className="wishlist-item">
                <td className="product-thumbnail-title">
                  <a href="#">
                    <img src="assets/images/cart/1.jpg" alt />
                  </a>
                  <a className="product-name" href="#">Wireless Headest</a> 
                </td>
                <td className="product-unit-price">
                  <div className="product-price clearfix">
                    <span className="price">
                      <span><span className="woocommerce-Price-currencySymbol">$</span>79.00</span>
                    </span>           
                  </div>
                </td>
                <td className="product-availity clearfix">
                  <a href="#">In Stock</a>
                </td>
                <td className="add-to-cart">
                  <a href="#">Add To Cart</a>
                </td>
                <td className="product-remove">
                  <a href="#" />
                </td>
              </tr>
              <tr className="wishlist-item">
                <td className="product-thumbnail-title">
                  <a href="#">
                    <img src="assets/images/cart/4.jpg" alt />
                  </a>
                  <a className="product-name" href="#">Gaming Mouse</a> 
                </td>
                <td className="product-unit-price">
                  <div className="product-price clearfix">
                    <span className="price">
                      <span><span className="woocommerce-Price-currencySymbol">$</span>75.00</span>
                    </span>           
                  </div>
                </td>
                <td className="product-availity clearfix">
                  <a href="#">In Stock</a>
                </td>
                <td className="add-to-cart">
                  <a href="#">Add To Cart</a>
                </td>
                <td className="product-remove">
                  <a href="#" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
