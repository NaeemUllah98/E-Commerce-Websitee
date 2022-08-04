import React from 'react'

function PopupSearch() {
  return (
    <>
    <section className="popup-search-sec">
  <div className="popup-search-overlay" />
  <div className="overlay-popup">
    <a href="javascript:void(0);" className="search-closer">x</a>
    <div className="middle-search">
      <div className="popup-search-form">
        <form method="get" action="#">
          <input type="search" name="s" id="s" placeholder="Search..." />
          <button type="submit"><i className="twi-search" /></button>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default PopupSearch