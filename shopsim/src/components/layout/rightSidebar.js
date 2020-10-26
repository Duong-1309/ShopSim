import React from 'react'
import { Link } from 'react-router-dom'

function RightSidebar() {
    return (
        <div className="col-lg-2 mb-2">
        <h2 className="side-menu-title">Top Categories</h2>
        <ul className="side-menu mb-1 pb-1">
          <li><Link to="#"><i className="icon-category-fashion" />Fashion</Link></li>
          <li><Link to="#"><i className="icon-category-electronics" />Electronics</Link></li>
          <li><Link to="#"><i className="icon-category-gifts" />Gifts</Link></li>
          <li><Link to="#"><i className="icon-category-garden" />Home &amp; Garden</Link></li>
          <li><Link to="#"><i className="icon-category-music" />Music</Link></li>
          <li><Link to="#"><i className="icon-cat-sport" />Sports</Link></li>
        </ul>
        <Link to="#" className="btn btn-block btn-dark btn-lg px-0">Huge Sale - <strong>70%</strong> Off</Link>
      </div>
    )
}

export default RightSidebar