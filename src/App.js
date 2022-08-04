import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from './Common/Header';
import PopupSearch from './Common/PopupSearch';
import Home from './Components/Home/Home';
import Home1 from './Components/Home1/Home1';
import Home2 from './Components/Home2/Home2';
import Shop from './Components/Shop/Shop';
import Pages from './Components/Pages/Pages';
import Footer from './Common/Footer'
//shop components
import Shopfullwidth from './Components/Shop/Shopfullwidth'
import Shopdetails from './Components/Shop/Shopdetails'
import Shopleftbar from './Components/Shop/Shopleftbar'
import Shoprightbar from './Components/Shop/Shoprightbar'
import Checkout from './Components/Shop/Checkout'
import Cartpage from './Components/Shop/Cartpage'
import Wishlist from './Components/Shop/Wishlist'

//Pages
import Loginregister from './Components/Pages/Loginregister';
import About from './Components/Pages/About'
import Newsletter from './Components/Pages/Newsletter'
import Error from './Components/Pages/Error'
import Contact from './Components/Contact/Contact';
//news
import Newsfullwidth from './Components/News/Newsfullwidth';
import Newsdetails from './Components/News/Newsdetails';
import Newsleftbar from './Components/News/Newsleftbar';
import Newsrightbar from './Components/News/Newsrightbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <PopupSearch/>           
   <Routes>
     <Route path="/Home"  element={<Home/>}/>
     <Route path="/"  element={<Home/>}/>
     <Route path="/Home1" exact index element={<Home1/>}/>
     <Route path="/Home2" element={<Home2/>}/>
     </Routes> 
     <Routes>
     <Route path="/Shop" element={<Shopdetails/>}/>
     <Route path="/Shopdetails" element={<Shopdetails/>}/>
     <Route path="/Shopfullwidth" element={<Shopfullwidth/>}/>
     <Route path="/Shopleftbar" element={<Shopleftbar/>}/>
     <Route path="/Shoprightbar"  element={<Shoprightbar/>}/>
     <Route path="/Cartpage"  element={<Cartpage/>}/>
     <Route path="/Checkout"  element={<Checkout/>}/>
     <Route path="/Wishlist"  element={<Wishlist/>}/>
     </Routes>
     <Routes>
     <Route path="/Pages" element={<Pages/>}/>
     <Route path="/Newsletter" element={<Newsletter/>}/>
     <Route path="/Loginregister" element={<Loginregister/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Error" element={<Error/>}/>
     </Routes>
     <Routes>
     <Route path="/News" element={<Newsdetails/>}/>
     <Route path="/Newsdetails" element={<Newsdetails/>}/>
     <Route path="/Newsfullwidth" element={<Newsfullwidth/>}/>
     <Route path="/Newsleftbar" element={<Newsleftbar/>}/>
     <Route path="/Newsrightbar" element={<Newsrightbar/>}/>
     </Routes>
     <Routes>
     <Route path="/Contact" element={<Contact/>}/>
     </Routes>
    <Footer/>
  </BrowserRouter>
        <a href="#" id="backtotop"><i className="twi-angle-double-up2"></i></a>
    </>
  )
}

export default App