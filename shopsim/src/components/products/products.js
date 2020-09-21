import React, {useState} from 'react'
import Pagination from './pagination'
import PropTypes from 'prop-types'


function Products(props) {
  const {loading, data, onSubmit} = props;
  const [textSearch, setTextSearch] = useState('');

  const handleChangeValue = (e) => {
    const value = e.target.value;
    setTextSearch(value);
  }
  const handleSubmitValue = (e) => {
    e.preventDefault();
    if(!onSubmit) return;
    onSubmit(textSearch);
    setTextSearch('');
  }
    //  
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
     <div className="col-lg-8 mb-2">
        <div className="container">
          <div className="row">
           
            <div className="col-lg-12">
            <div className="header-right w-lg-max ml-0 mt-0">
              <div className="header-icon header-search header-search-inline header-search-category w-lg-max pl-3 show">
                    <form onSubmit={handleSubmitValue}>
                      <div className="header-search-wrapper show">
                        <input type="text" value={textSearch} 
                        onChange={handleChangeValue} 
                        className="form-control" 
                        placeholder="Nhập số cần tìm..." required 
                        />
                        <button className="btn icon-search-3" type="submit" />
                      </div>{/* End .header-search-wrapper */}
                    </form>
                    <ul className="side-menu ml-5 mb-2 mt-2 border-top-1">
                      
                      <li><i>*</i>Tìm sim có số 6789 bạn hãy gõ 6789</li>
                      <li><i>*</i>Tìm sim có đầu 090 đuôi 8888 hãy gõ 090*8888</li>
                      <li><i>*</i>Tìm sim bắt đầu bằng 0914 đuôi bất kỳ, hãy gõ: 0914*</li>
                      <li><i>*</i>Tìm sim có đuôi bằng 789, hãy gõ: *789</li>
                    </ul>
                  </div>{/* End .header-search */}
              </div>
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
