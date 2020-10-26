import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


function Products(props) {
  const {loading, data} = props;

  
  console.log(data, "products");
  if(loading){
    return (
    <div className="col-lg-8 mb-2">
      <h3>Đang tải dữ liệu</h3>
    </div>)
    
  }
  if(!data.length){
    return <div className="col-lg-8"><h3>404</h3><span>Không tìm thấy sim</span></div>
  }
    return (        
            <>
              <div className="row row-sm">
                {data.map((sim) => (
                  sim.active && (
                  <div key={sim.id} className="col-6 col-md-4">
                    <Link to={`/chi-tiet-sim/${sim.id}`} >
                  <div className="product-default my-product">
                    <div className="product-details">
                      <div className="ratings-container">
                      
                      </div>
                     <div className="product-box">
                       <h4 className="titleSim">{sim.title}</h4>
                     </div>
                      <div className="price-box">
                      <span className="produce">{sim.price}   <span>đ</span></span>
                      </div>{/* End .price-box */}
                    </div>{/* End .product-details */}
                  </div>
                  </Link>
                </div>
                  )
                ))}
                
              </div>
              </>
            
        
    )
}

Products.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func,
}

Products.defaultProps = {
  data: [],
  loading: true,
  onSubmit: null,
}

export default Products
