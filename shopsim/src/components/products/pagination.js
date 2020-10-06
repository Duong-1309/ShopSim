import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


function Pagination(props) {
  const {pagination, onPageChange} = props;
  const {total, page_size, page} = pagination;
  const totalPages = Math.ceil(total / page_size);

  let arrPage = [];
  for(let i=1; i<= totalPages; i++){
    arrPage.push(i)
  }
  console.log(arrPage, "dfghjk");

  const handlePageChange = (newPage) => {
    if(onPageChange !== null){
      onPageChange(newPage);
    }
  }
  
    return (
        <nav className="toolbox toolbox-pagination">
        <div className="toolbox-item toolbox-show">
          <label>Hiển thị từ trang 1–{totalPages} của {total} sim</label>---
          <label>Trang <strong>{page}</strong></label>---
        </div>{/* End .toolbox-item */}
        <ul className="pagination">
          <li className={page === 1 ? "page-item disabled" : "page-item"} 
          onClick={()=>handlePageChange(page-1)} >
            <Link className="page-link page-link-btn" to="#"><i className="icon-angle-left" /></Link>
          </li>
          {arrPage !== [] && arrPage.map((p)=> (
              <li key={p} onClick={()=> handlePageChange(p)} 
              className={p === page ? "page-item active" : "page-item"}>
                <Link className="page-link" to="#">{p}</Link>
              </li>
          ))}
          

          <li className={page === totalPages ? "page-item disabled" : "page-item"}
          onClick={()=>handlePageChange(page+1)}>
            <Link className="page-link page-link-btn" to="#"><i className="icon-angle-right" /></Link>
          </li>
        </ul>
      </nav>
    )
}

Pagination.propTypes = {
  pagination: PropTypes.object,
  onPageChange: PropTypes.func,
}
Pagination.defaultProps = {
  pagination: {},
  onPageChange: null
}

export default Pagination


