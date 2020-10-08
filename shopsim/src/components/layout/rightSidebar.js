import React from 'react'

function RightSidebar() {
    return (
        <div className="col-lg-2 mb-2">
        <h2 className="side-menu-title">Top Categories</h2>
        <ul className="side-menu mb-1 pb-1">
          <li><a href="#"><i className="icon-category-fashion" />Fashion</a></li>
          <li><a href="#"><i className="icon-category-electronics" />Electronics</a></li>
          <li><a href="#"><i className="icon-category-gifts" />Gifts</a></li>
          <li><a href="#"><i className="icon-category-garden" />Home &amp; Garden</a></li>
          <li><a href="#"><i className="icon-category-music" />Music</a></li>
          <li><a href="#"><i className="icon-cat-sport" />Sports</a></li>
        </ul>
        <a href="#" className="btn btn-block btn-dark btn-lg px-0">Huge Sale - <strong>70%</strong> Off</a>
      </div>
    )
}

export default RightSidebar