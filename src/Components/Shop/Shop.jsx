 import React from 'react'
import {Link} from 'react-router-dom'
// import Shopfullwidth from './Shopfullwidth'
// import Shopdetails from './Shopdetails'
// import Shopleftbar from './Shopleftbar'
// import Shoprightbar from './Shoprightbar'
// import Checkout from './Checkout'
// import Cartpage from './Cartpage'
// import Wishlist from './Wishlist'

export default function Shop() {
  return (
    <>
    <Shop/>
{/* <Shopfullwidth/>  
<Shopdetails/>
<Shopleftbar/>
<Shoprightbar/>
<Checkout/>
<Cartpage/>
<Wishlist/> */}
<section className="page-banner">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <span className="round-shape" />
        <h2 className="banner-title">Shop</h2>
        <div className="bread-crumb"><Link to="Home">Home</Link> / <Link to="Home">Products</Link> / Gaming</div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
