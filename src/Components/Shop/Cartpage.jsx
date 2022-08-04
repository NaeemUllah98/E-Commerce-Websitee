import React from 'react'
export default function Cartpage() {
  return (
    <>
    <section className="page-banner">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <span className="round-shape" />
          <h2 className="banner-title">Cart</h2>
          <div className="bread-crumb"><a href="#">Home</a> / <a href="#">Products</a> / Add To Cart</div>
        </div>
      </div>
    </div>
  </section>
     <section className="cart-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <form className="woocommerce-cart-form" action="#">
          <table className="cart-table">
            <thead>
              <tr>
                <th className="product-name-thumbnail">Product Name</th>
                <th className="product-price">Unit Price</th>
                <th className="product-quantity">Quantity</th>
                <th className="product-total">Total</th>
                <th className="product-remove">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr className="cart-item">
                <td className="product-thumbnail-title">
                  <a href="#">
                    <img src="assets/images/cart/1.jpg" alt />
                  </a>
                  <a className="product-name" href="#">Wirless Headset</a> 
                </td>
                <td className="product-unit-price">
                  <div className="product-price clearfix">
                    <span className="price">
                      <span><span className="woocommerce-Price-currencySymbol">$</span>79.00</span>
                    </span>           
                  </div>
                </td>
                <td className="product-quantity clearfix">
                  <div className="quantityd clearfix">
                    <button className="qtyBtn btnMinus"><span>-</span></button>
                    <input name="qty" defaultValue={1} title="Qty" className="input-text qty text carqty" type="text" />
                    <button className="qtyBtn btnPlus">+</button>
                  </div>
                </td>
                <td className="product-total">
                  <div className="product-price clearfix">
                    <span className="price">
                      <span><span className="woocommerce-Price-currencySymbol">$</span>42.00</span>
                    </span>           
                  </div>
                </td>
                <td className="product-remove">
                  <a href="#" />
                </td>
              </tr>
              <tr className="cart-item">
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
                <td className="product-quantity clearfix">
                  <div className="quantityd clearfix">
                    <button className="qtyBtn btnMinus"><span>-</span></button>
                    <input name="qty" defaultValue={1} title="Qty" className="input-text qty text carqty" type="text" />
                    <button className="qtyBtn btnPlus">+</button>
                  </div>
                </td>
                <td className="product-total">
                  <div className="product-price clearfix">
                    <span className="price">
                      <span><span className="woocommerce-Price-currencySymbol">$</span>42.00</span>
                    </span>           
                  </div>
                </td>
                <td className="product-remove">
                  <a href="#" />
                </td>
              </tr>
              <tr>
                <td colSpan={6} className="actions">
                  <button type="submit" className="button clear-cart">Clear Shopping Cart</button>
                  <button type="submit" className="button update">Update Shopping Cart</button>
                  <button type="submit" className="button continue-shopping">Continue Shopping</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col-md-6">
              <div className="coupon">
                <h3>Counpon discount</h3>
                <p>
                  Enter your code if you have one. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <input type="text" name="coupon_code" placeholder="Enter Your code Here" /> 
                <button type="submit" className="button" name="apply_coupon">Apply coupon</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cart-totals">
                <h2>Cart Totals</h2>
                <table className="shop-table">
                  <tbody>
                    <tr className="cart-subtotal">
                      <th>Sub Total</th>
                      <td data-title="Subtotal">
                        <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>42.00</span>
                      </td>
                    </tr>
                    <tr className="order-total">
                      <th>Grand Total</th>
                      <td data-title="Subtotal">
                        <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>48.00</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="wc-proceed-to-checkout">
                  <a href="#" className="checkout-button">Proceed to checkout</a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
