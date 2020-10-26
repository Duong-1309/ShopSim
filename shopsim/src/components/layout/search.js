import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom'

function Search() {

    const [valueSearch, setValueSearch] = useState('')
    const history = useHistory();

    const handleChange = (e) => {
      const value = e.target.value;
      setValueSearch(value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      let value = valueSearch.trim()
      if (value !== ''){
        history.push(`/tim-sim/${valueSearch}`)
      } else {setValueSearch('')}
    }

    return (
      <div className="header-right w-lg-max ml-0 mt-0 border-bottom mb-2">
          <div className="header-icon header-search header-search-inline header-search-category w-lg-max pl-3 show">
            <Link to="#" className="search-toggle" role="button"><i className="icon-search-3" /></Link>
            <form onSubmit={handleSubmit}>
              <div className="header-search-wrapper show">
                <input type="text" value={valueSearch} onChange={handleChange} className="form-control" placeholder="Nhập số cần tìm..." required />
                <button className="btn icon-search-3" type="submit" />
              </div>{/* End .header-search-wrapper */}
            </form>
            <ul className="side-menu ml-5 mb-2 mt-2 border-top-0">
              
              <li><i>-</i>Tìm sim có số 6789 bạn hãy gõ 6789</li>
              <li><i>-</i>Tìm sim có đầu 090 đuôi 8888 hãy gõ 090*8888</li>
              <li><i>-</i>Tìm sim bắt đầu bằng 0914 đuôi bất kỳ, hãy gõ: 0914*</li>
              <li><i>-</i>Tìm sim có đuôi bằng 789, hãy gõ: *789</li>
            </ul>
          </div>{/* End .header-search */}
          
      </div>

            
       
    )
}

export default Search
