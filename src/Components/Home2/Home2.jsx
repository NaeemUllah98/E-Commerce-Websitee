import React from 'react'

export default function Home2() {
  return (
    <>
     <div>
  <header className="header-02 fix-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <a href="javascript:void(0);" className="hamburger" id="hamburger">
            <span />
            <span />
            <span />
          </a>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="logo text-center">
            <a href="index.html">
              <img src="assets/images/logo2.png" alt=""/>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="header-cogs">
            <a className="search search-toggles" href="javascript:void(0);"><i className="twi-search" /></a>
            <a className="select-country" href="javascript:void(0);"><img src="assets/images/flag.png" alt="" />Eng</a>
            <a className="select-currency" href="javascript:void(0);"><i className="twi-dollar-sign" />Usd</a>
            <a className="user-login" href="javascript:void(0);"><i className="twi-user-circle" /><span>Account</span></a>
            <a className="carts" href="javascript:void(0);"><span>4</span><img src="assets/images/cart.png" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Header End */}
  {/* Overlay Menu */}
  <div className="popup_menu">
    <div className="menu_overlay" />
    <div className="menu_top">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 text-left">
            <div className="menu_pop_logo">
              <a href="index.html">
                Goru
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 text-right">
            <a href="javascript:void(0);" id="close_menu" className="menu-close">x</a>
          </div>
        </div>
      </div>
    </div>
    <div className="menu_middle">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="menu_popup">
              <ul>
                <li className="current-menu-item menu-item-has-children animated_menu">
                  <a href="javascript:void(0);">Home</a>
                  <ul className="sub-menu">
                    <li><a href="index.html">Home One</a></li>
                    <li><a href="index2.html">Home Two</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children animated_menu">
                  <a href="javascript:void(0);">Shop</a>
                  <ul className="sub-menu">
                    <li><a href="shop-fullwidth.html">Shop Fullwidth</a></li>
                    <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                    <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                    <li><a href="single-product.html">Shop Details</a></li>
                    <li><a href="cart.html">Cart Page</a></li>
                    <li><a href="checkout.html">Checkout Page</a></li>
                    <li><a href="wishlist.html">Wishlist Page</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children animated_menu">
                  <a href="javascript:void(0);">Pages</a>
                  <ul className="sub-menu">
                    <li><a href="about.html">About Page</a></li>
                    <li><a href="newsletter.html">Newsletter Page</a></li>
                    <li><a href="login-register.html">Login Register Page</a></li>
                    <li><a href="404.html">404 Page</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children animated_menu">
                  <a href="javascript:void(0);">News</a>
                  <ul className="sub-menu">
                    <li><a href="blog-right-sidebar.html">News Right Sidebar</a></li>
                    <li><a href="blog-left-sidebar.html">News Left Sidebar</a></li>
                    <li><a href="blog-fullwidth.html">News Full Width</a></li>
                    <li><a href="blog-details.html">News Details</a></li>
                  </ul>
                </li>
                <li className="animated_menu"><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom_menu">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-xs-12 text-left">
            <div className="f_copy">
              <p>2020 © <a href="#">WpSmasher</a> All rights reserved.</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12 col-xs-12">
            <div className="foo_social text-right">
              <a href="#"><i className="twi-facebook" /></a>
              <a href="#"><i className="twi-twitter" /></a>
              <a href="#"><i className="twi-instagram" /></a>
              <a href="#"><i className="twi-linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Overlay Menu */}
  {/* Popup Search */}
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
  {/* Slider Start */}
  <section className="slider-02">
    {/* Counting Item */}
    <div className="slider-counter">
      <span className="current-item">02</span>
      <span className="bar" />
      <span className="total-item">04</span>
    </div>
    {/* Counting Item */}
    <div className="rev_slider_wrapper">
      <div id="rev_slider_2" className="rev_slider fullwidthabanner" style={{display: 'none'}} data-version="5.4.1">
        <ul>
          <li className="rev-slidebg">
            <div className="tp-caption tp-resizeme textRes" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['-250','-160','-190','-200']" data-fontsize={14} data-fontweight={700} data-letterspacing="1.4" data-lineheight={25} data-width="100%" data-height="auto" data-whitesapce="['normal']" data-color="['#f4723b']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1500,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,20]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,20]" style={{zIndex: 5, whiteSpace: 'normal', textTransform: 'uppercase'}}>Trending</div>
            <div className="tp-caption textRes tp-resizeme poppins" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['-172','-80','-100','-120']" data-fontsize="['50','45','45','34']" data-fontweight={700} data-letterspacing=".5" data-lineheight="['65','55','55','40']" data-width="['500','500','500','100%']" data-height="['auto']" data-whitesapce="['normal']" data-color="['#000000']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1900,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,20]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,20]" style={{zIndex: 5, whiteSpace: 'normal', textTransform: 'none'}}>Latest Inventions,
              Dazzling Design.</div>
            <div className="tp-caption tp-resizeme textRes layer-desc" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['-49','35','10','10']" data-fontsize={18} data-fontweight={400} data-lineheight={30} data-width="['500','500','500','100%']" data-height="['auto']" data-whitesapce="['normal']" data-color="['#666666']" data-type="text" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:2300,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,25]" style={{zIndex: 5, whiteSpace: 'normal', textTransform: 'none'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>
            <div className="tp-caption tp-resizeme textRes" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['60','145','110','150']" data-fontsize={14} data-fontweight={700} data-lineheight=".8" data-width="['auto']" data-height="['auto']" data-whitesapce="['normal']" data-color="['#FFF']" data-type="text" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:2700,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,25]" style={{zIndex: 5}}><a href="#" className="goru-btn">shop now</a>
            </div>
            <div className="tp-caption tp-resizeme slider-image" data-x="['right','right','center','center']" data-hoffset="['-50','50','0','0']" data-y="['middle']" data-voffset="['-90','0','0','0']" data-width="['auto','350','0','0']" data-height="['auto']" data-type="image" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:3500,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,25]" style={{zIndex: 5}}><img src="assets/images/home/layer2.png" alt="" />
            </div>
            <div className="tp-caption tp-resizeme layerimg" data-x="['center']" data-hoffset="['50','100','150','0']" data-y="['middle']" data-voffset="['-330','-250','-260','0']" data-width="['auto']" data-height="['auto']" data-type="image" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:3800,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,25]" style={{zIndex: 5}}><a href="single-product.html"><img src="assets/images/home/layer3.png" alt="" /></a>
            </div>
            <div className="tp-caption tp-resizeme layerimg lm-2" data-x="['right']" data-hoffset="['-120','0','0','0']" data-y="['bottom']" data-voffset="['38','-20','0','0']" data-width="['auto']" data-height="['auto']" data-type="image" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:3800,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,25]" style={{zIndex: 5}}><a href="single-product.html"><img src="assets/images/home/layer4.png" alt="" /></a>
            </div>
          </li>
          <li className="rev-slidebg">
            <div className="tp-caption tp-resizeme textRes" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['-250','-160','-190','-200']" data-fontsize={14} data-fontweight={700} data-letterspacing="1.4" data-lineheight={25} data-width="100%" data-height="auto" data-whitesapce="['normal']" data-color="['#f4723b']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1500,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,20]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,20]" style={{zIndex: 5, whiteSpace: 'normal', textTransform: 'uppercase'}}>Trending</div>
            <div className="tp-caption textRes tp-resizeme poppins" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['-172','-80','-100','-120']" data-fontsize="['50','45','45','34']" data-fontweight={700} data-letterspacing=".5" data-lineheight="['65','55','55','40']" data-width="['500','500','500','100%']" data-height="['auto']" data-whitesapce="['normal']" data-color="['#000000']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1900,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,20]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,20]" style={{zIndex: 5, whiteSpace: 'normal', textTransform: 'none'}}>Latest Inventions,
              Dazzling Design.</div>
            <div className="tp-caption tp-resizeme textRes layer-desc" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['-49','35','10','10']" data-fontsize={18} data-fontweight={400} data-lineheight={30} data-width="['500','500','500','100%']" data-height="['auto']" data-whitesapce="['normal']" data-color="['#666666']" data-type="text" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:2300,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,25]" style={{zIndex: 5, whiteSpace: 'normal', textTransform: 'none'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>
            <div className="tp-caption tp-resizeme textRes" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['60','145','110','150']" data-fontsize={14} data-fontweight={700} data-lineheight=".8" data-width="['auto']" data-height="['auto']" data-whitesapce="['normal']" data-color="['#FFF']" data-type="text" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:2700,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,25]" style={{zIndex: 5}}><a href="#" className="goru-btn">shop now</a>
            </div>
            <div className="tp-caption tp-resizeme slider-image" data-x="['right','right','center','center']" data-hoffset="['-50','50','0','0']" data-y="['middle']" data-voffset="['-90','0','0','0']" data-width="['auto','350','0','0']" data-height="['auto']" data-type="image" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:3500,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,25]" style={{zIndex: 5}}><img src="assets/images/home/layer2.png" alt="" />
            </div>
            <div className="tp-caption tp-resizeme layerimg" data-x="['center']" data-hoffset="['50','100','150','0']" data-y="['middle']" data-voffset="['-330','-250','-260','0']" data-width="['auto']" data-height="['auto']" data-type="image" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:3800,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,25]" style={{zIndex: 5}}><a href="single-product.html"><img src="assets/images/home/layer3.png" alt="" /></a>
            </div>
            <div className="tp-caption tp-resizeme layerimg lm-2" data-x="['right']" data-hoffset="['-120','0','0','0']" data-y="['bottom']" data-voffset="['38','-20','0','0']" data-width="['auto']" data-height="['auto']" data-type="image" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:3800,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,25]" style={{zIndex: 5}}><a href="single-product.html"><img src="assets/images/home/layer4.png" alt="" /></a>
            </div>
          </li>
          <li className="rev-slidebg">
            <div className="tp-caption tp-resizeme textRes" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['-250','-160','-190','-200']" data-fontsize={14} data-fontweight={700} data-letterspacing="1.4" data-lineheight={25} data-width="100%" data-height="auto" data-whitesapce="['normal']" data-color="['#f4723b']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1500,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,20]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,20]" style={{zIndex: 5, whiteSpace: 'normal', textTransform: 'uppercase'}}>Trending</div>
            <div className="tp-caption textRes tp-resizeme poppins" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['-172','-80','-100','-120']" data-fontsize="['50','45','45','34']" data-fontweight={700} data-letterspacing=".5" data-lineheight="['65','55','55','40']" data-width="['500','500','500','100%']" data-height="['auto']" data-whitesapce="['normal']" data-color="['#000000']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1900,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,20]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,20]" style={{zIndex: 5, whiteSpace: 'normal', textTransform: 'none'}}>Latest Inventions,
              Dazzling Design.</div>
            <div className="tp-caption tp-resizeme textRes layer-desc" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['-49','35','10','10']" data-fontsize={18} data-fontweight={400} data-lineheight={30} data-width="['500','500','500','100%']" data-height="['auto']" data-whitesapce="['normal']" data-color="['#666666']" data-type="text" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:2300,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,25]" style={{zIndex: 5, whiteSpace: 'normal', textTransform: 'none'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>
            <div className="tp-caption tp-resizeme textRes" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['60','145','110','150']" data-fontsize={14} data-fontweight={700} data-lineheight=".8" data-width="['auto']" data-height="['auto']" data-whitesapce="['normal']" data-color="['#FFF']" data-type="text" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:2700,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,25]" style={{zIndex: 5}}><a href="#" className="goru-btn">shop now</a>
            </div>
            <div className="tp-caption tp-resizeme slider-image" data-x="['right','right','center','center']" data-hoffset="['-50','50','0','0']" data-y="['middle']" data-voffset="['-90','0','0','0']" data-width="['auto','350','0','0']" data-height="['auto']" data-type="image" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:3500,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,25]" style={{zIndex: 5}}><img src="assets/images/home/layer2.png" alt="" />
            </div>
            <div className="tp-caption tp-resizeme layerimg" data-x="['center']" data-hoffset="['50','100','150','0']" data-y="['middle']" data-voffset="['-330','-250','-260','0']" data-width="['auto']" data-height="['auto']" data-type="image" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:3800,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,25]" style={{zIndex: 5}}><a href="single-product.html"><img src="assets/images/home/layer3.png" alt="" /></a>
            </div>
            <div className="tp-caption tp-resizeme layerimg lm-2" data-x="['right']" data-hoffset="['-120','0','0','0']" data-y="['bottom']" data-voffset="['38','-20','0','0']" data-width="['auto']" data-height="['auto']" data-type="image" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:3800,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,25]" style={{zIndex: 5}}><a href="single-product.html"><img src="assets/images/home/layer4.png" alt="" /></a>
            </div>
          </li>
          <li className="rev-slidebg">
            <div className="tp-caption tp-resizeme textRes" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['-250','-160','-190','-200']" data-fontsize={14} data-fontweight={700} data-letterspacing="1.4" data-lineheight={25} data-width="100%" data-height="auto" data-whitesapce="['normal']" data-color="['#f4723b']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1500,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,20]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,20]" style={{zIndex: 5, whiteSpace: 'normal', textTransform: 'uppercase'}}>Trending</div>
            <div className="tp-caption textRes tp-resizeme poppins" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['-172','-80','-100','-120']" data-fontsize="['50','45','45','34']" data-fontweight={700} data-letterspacing=".5" data-lineheight="['65','55','55','40']" data-width="['500','500','500','100%']" data-height="['auto']" data-whitesapce="['normal']" data-color="['#000000']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1900,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,20]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,20]" style={{zIndex: 5, whiteSpace: 'normal', textTransform: 'none'}}>Latest Inventions,
              Dazzling Design.</div>
            <div className="tp-caption tp-resizeme textRes layer-desc" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['-49','35','10','10']" data-fontsize={18} data-fontweight={400} data-lineheight={30} data-width="['500','500','500','100%']" data-height="['auto']" data-whitesapce="['normal']" data-color="['#666666']" data-type="text" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:2300,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,25]" style={{zIndex: 5, whiteSpace: 'normal', textTransform: 'none'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>
            <div className="tp-caption tp-resizeme textRes" data-x="['left','left','center','center']" data-hoffset="['0']" data-y="['middle']" data-voffset="['60','145','110','150']" data-fontsize={14} data-fontweight={700} data-lineheight=".8" data-width="['auto']" data-height="['auto']" data-whitesapce="['normal']" data-color="['#FFF']" data-type="text" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:2700,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,60,0,25]" style={{zIndex: 5}}><a href="#" className="goru-btn">shop now</a>
            </div>
            <div className="tp-caption tp-resizeme slider-image" data-x="['right','right','center','center']" data-hoffset="['-50','50','0','0']" data-y="['middle']" data-voffset="['-90','0','0','0']" data-width="['auto','350','0','0']" data-height="['auto']" data-type="image" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:3500,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,25]" style={{zIndex: 5}}><img src="assets/images/home/layer2.png" alt="" />
            </div>
            <div className="tp-caption tp-resizeme layerimg" data-x="['center']" data-hoffset="['50','100','150','0']" data-y="['middle']" data-voffset="['-330','-250','-260','0']" data-width="['auto']" data-height="['auto']" data-type="image" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:3800,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,25]" style={{zIndex: 5}}><a href="single-product.html"><img src="assets/images/home/layer3.png" alt="" /></a>
            </div>
            <div className="tp-caption tp-resizeme layerimg lm-2" data-x="['right']" data-hoffset="['-120','0','0','0']" data-y="['bottom']" data-voffset="['38','-20','0','0']" data-width="['auto']" data-height="['auto']" data-type="image" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:3800,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="center" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,25]" style={{zIndex: 5}}><a href="single-product.html"><img src="assets/images/home/layer4.png" alt="" /></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>    
  {/* Slider Start */}
  {/* Categories Section Start */}
  <section className="categorie-section-2">
    {/* Section Heading */}
    <div className="sec-heading rotate-rl"><span>Top</span> Categories</div>
    {/* Section Heading */}
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <a href="#" className="single-cate with-title">
            <span>Camera</span>
            <i className="flaticon-photo-camera" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <a href="#" className="single-cate with-title">
            <span>Drones</span>
            <i className="flaticon-drone" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <a href="#" className="single-cate with-title">
            <span>Gaming</span>
            <i className="flaticon-console" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <a href="#" className="single-cate with-title">
            <span>LED TV</span>
            <i className="flaticon-television" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <a href="#" className="single-cate with-title">
            <span>Routers</span>
            <i className="flaticon-wifi-router" />
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <a href="#" className="single-cate with-title">
            <span>Gaming</span>
            <i className="flaticon-pc" />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Categories Section End */}
  {/* Coupon Discount Start */}
  <section className="coupone-discount-sec-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-5">
          <div className="dis-product-detail">
            <h4>Weekly Deal</h4>
            <div className="product-price clearfix">
              <span className="price">
                <span><span className="woocommerce-Price-currencySymbol">$</span>179.00</span>
              </span>           
            </div>
            <div id="countdown-coupone" className="clearfix" data-day={1} data-month={10} data-year={2020} />
            <a className="goru-btn" href="single-product.html">Shop Now</a>
          </div>
        </div>
        <div className="col-lg-6 col-md-7">
          <div className="dis-pro-thumb copys-text">
            <img src="assets/images/home/1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Coupon Discount End */}
  {/* Popular Section Start */}
  <section className="popular-section-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="sec-title">Most Popular</h2>
          <ul className="product-tab-title nav nav-tabs">
            <li><a className="active" href="#all" data-toggle="tab">All</a></li>
            <li><a href="#smartphones" data-toggle="tab">Smartphones</a></li>
            <li><a href="#camera" data-toggle="tab">Camera</a></li>
            <li><a href="#gadgets" data-toggle="tab">Gadgets</a></li>
            <li><a href="#others" data-toggle="tab">Others</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="tab-content">
            <div className="tab-pane fade show in active" id="all" role="tabpanel">
              <div className="popular-tab-slider-two owl-carousel">
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p7.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p8.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="hot">Hot</p>
                    </div>
                  </div>
                  <div className="sp-details">
                    <h4>Novo Headset A30</h4>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p9.jpg" alt="" />
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p10.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
                    </div>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p7.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p8.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="hot">Hot</p>
                    </div>
                  </div>
                  <div className="sp-details">
                    <h4>Novo Headset A30</h4>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p9.jpg" alt="" />
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p10.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
                    </div>
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
            <div className="tab-pane fade in" id="smartphones" role="tabpanel">
              <div className="popular-tab-slider-two owl-carousel">
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p10.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p9.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="hot">Hot</p>
                    </div>
                  </div>
                  <div className="sp-details">
                    <h4>Novo Headset A30</h4>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p8.jpg" alt="" />
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p7.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
                    </div>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p10.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p9.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="hot">Hot</p>
                    </div>
                  </div>
                  <div className="sp-details">
                    <h4>Novo Headset A30</h4>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p8.jpg" alt="" />
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p7.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
                    </div>
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
            <div className="tab-pane fade in" id="camera" role="tabpanel">
              <div className="popular-tab-slider-two owl-carousel">
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p9.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p7.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="hot">Hot</p>
                    </div>
                  </div>
                  <div className="sp-details">
                    <h4>Novo Headset A30</h4>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p10.jpg" alt="" />
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p8.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
                    </div>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p7.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p8.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="hot">Hot</p>
                    </div>
                  </div>
                  <div className="sp-details">
                    <h4>Novo Headset A30</h4>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p9.jpg" alt="" />
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p10.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
                    </div>
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
            <div className="tab-pane fade in" id="gadgets" role="tabpanel">
              <div className="popular-tab-slider-two owl-carousel">
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p8.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p10.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="hot">Hot</p>
                    </div>
                  </div>
                  <div className="sp-details">
                    <h4>Novo Headset A30</h4>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p7.jpg" alt="" />
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p9.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
                    </div>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p7.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p8.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="hot">Hot</p>
                    </div>
                  </div>
                  <div className="sp-details">
                    <h4>Novo Headset A30</h4>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p9.jpg" alt="" />
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p10.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
                    </div>
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
            <div className="tab-pane fade in" id="others" role="tabpanel">
              <div className="popular-tab-slider-two owl-carousel">
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p10.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p9.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="hot">Hot</p>
                    </div>
                  </div>
                  <div className="sp-details">
                    <h4>Novo Headset A30</h4>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p8.jpg" alt="" />
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p7.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
                    </div>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p8.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p9.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="hot">Hot</p>
                    </div>
                  </div>
                  <div className="sp-details">
                    <h4>Novo Headset A30</h4>
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p10.jpg" alt="" />
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
                <div className="single-popular-product">
                  <div className="sp-thumb">
                    <img src="assets/images/home/p7.jpg" alt="" />
                    <div className="pro-badge">
                      <p className="sale">Sale</p>
                    </div>
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
        </div>
      </div>
    </div>
  </section>
  {/* Popular Section End */}
  {/* Client Section Start */}
  <section className="client-section-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="client-logo grayscale owl-carousel">
            <a href="#"><img src="assets/images/home/client-logo-grayscale/1.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo-grayscale/2.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo-grayscale/3.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo-grayscale/4.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo-grayscale/5.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo-grayscale/1.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo-grayscale/2.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo-grayscale/3.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo-grayscale/4.png" alt="" /></a>
            <a href="#"><img src="assets/images/home/client-logo-grayscale/5.png" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Client Section End */}
  {/* Mailchimp Section Start */}
  <section className="mailchimp-section bg-f5f5f5">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 text-center mx-auto">
          <h3 className="sec-title">Get Discount 30% Off</h3>
          <form className="mailchimp-form" action="#" method="post">
            <input type="email" name="email" placeholder="your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}
