import React from 'react'

function Sort() {
    return (
        <nav className="toolbox">
                <div className="toolbox-left">
                  <div className="toolbox-item toolbox-sort">
                    <div className="select-custom">
                      <select name="orderby" className="form-control">
                        <option value="menu_order" defaultChecked="selected">Default sorting</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by newness</option>
                        <option value="price">Sort by price: low to high</option>
                        <option value="price-desc">Sort by price: high to low</option>
                      </select>
                    </div>{/* End .select-custom */}
                    <a href="#" className="sorter-btn" title="Set Ascending Direction"><span className="sr-only">Set Ascending Direction</span></a>
                  </div>{/* End .toolbox-item */}
                </div>{/* End .toolbox-left */}
                <div className="toolbox-item toolbox-show">
                  <label>Showing 1–9 of 60 results</label>
                </div>{/* End .toolbox-item */}
                <div className="layout-modes">
                  <a href="category.html" className="layout-btn btn-grid active" title="Grid">
                    <i className="icon-mode-grid" />
                  </a>
                  <a href="category-list.html" className="layout-btn btn-list" title="List">
                    <i className="icon-mode-list" />
                  </a>
                </div>{/* End .layout-modes */}
              </nav>
    )
}

export default Sort
