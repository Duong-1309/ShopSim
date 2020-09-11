import React from 'react'
import Sort from './sort'
import ListProducts from './listProducts'
import Pagination from './pagination'

function Products() {
    return (
        
     <div className="col-lg-8 mb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Sort/>
              <ListProducts/>
              <Pagination/>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default Products
