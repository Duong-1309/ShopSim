import React from 'react'
import Sort from './sort'
import Pagination from './pagination'


function Products({data, loading}) {
  
  if(loading){
    return (
    <div className="col-lg-8 mb-2">
      <h3>Đang tải dữ liệu</h3>
    </div>)
    
  }
  if(!data.length){
    return <div className="col-lg-8"><h3>404</h3><span>Không tìm thấy sim</span></div>
  }
  
  
  console.log(data.length);
  //  
    return (        
     <div className="col-lg-8 mb-2">
        <div className="container">
          <div className="row">
           
            <div className="col-lg-12">
              <Sort/>
              <div className="row row-sm">
                {data.map((sim) => (
                  <div key={sim.id} className="col-6 col-md-4">
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
                </div>
                ))}
                
              </div>
              <Pagination/>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default Products
