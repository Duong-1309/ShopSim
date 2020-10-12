import React, {useState, useEffect} from 'react'
import axios from 'axios'

import PropTypes from 'prop-types'

function Sort(props) {
    const {onSortChange, defaultSortChecked} = props
    const [productType, setProductType] = useState([])
    const [productCategory, setProductCategory] = useState([])
    

    useEffect(()=>{
        const fetch = async () => {
            try {
                const resCategory = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/category`)
                const resType = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/product-type`)
                setProductCategory(resCategory.data)
                setProductType(resType.data)
            } catch (error) {
                console.log(error.message);
            }
            
        }
        fetch()
    },[])

    const handleSortChange = (e) => {
        if(onSortChange){
            onSortChange(e.target.value)
            
        }
    }

    return (
        <nav className="toolbox">
        <div className="toolbox-left">
            <div className="toolbox-item toolbox-sort">
            <label>Giá từ: </label>
                <div className="select-custom">
                    <select name="sortByPrice" defaultValue={defaultSortChecked} 
                    onClick={handleSortChange} className="form-control">
                        <option value="0" >--chọn giá--</option>
                        <option value="gia-tu&&0-1000">Dưới 1 triệu</option>
                        <option value="gia-tu&&1000-5000">1 - 5 triệu</option>
                        <option value="gia-tu&&5000-10000">5 - 10 triệu</option>
                        <option value="gia-tu&&10000-20000">10 - 20 triệu</option>
                        <option value="gia-tu&&20000-50000">20 - 50 triệu</option>
                        <option value="gia-tu&&50000-100000">50 - 100 triệu</option>
                        <option value="gia-tu&&100000-999999999999">Trên 100 triệu</option>
                    </select>
                </div>
            </div>
            <div className="toolbox-item toolbox-sort">
            <label>Mạng: </label>
                <div className="select-custom">
                    <select name="sortProductType"defaultValue={ defaultSortChecked } 
                    onClick={handleSortChange} className="form-control">
                        <option value="0">--chọn mạng--</option>
                        {productType.map((type)=>(
                            <option value={`${type.title}&&=${type.id}`} key={type.id} >{type.title}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="toolbox-item toolbox-sort">
            <label>Loại sim: </label>
                <div className="select-custom">
                    <select name="sortByCategory" defaultValue={defaultSortChecked} 
                    onClick={handleSortChange} className="form-control">
                        <option value="0">--Loại sim--</option>
                        {productCategory.map((category)=>(
                            <option value={`${category.title}&&${category.id}`} key={category.id}>{category.title}</option>

                        ))}
                    </select>
                </div>
            </div>
        </div>
        </nav>
    )
}

Sort.propTypes = {
    onSortChange: PropTypes.func,
    defaultSortChecked: PropTypes.string,
}
Sort.defaultProps = {
    onSortChange: null,
    defaultSortChecked: '0',
}

export default Sort

