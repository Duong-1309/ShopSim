import React, {useState, useEffect} from 'react'
import Create from '../../components/products/create'
import axios  from 'axios'
import {connect} from 'react-redux'
import {Button, message, notification} from 'antd'
import PropTypes from 'prop-types'

function CreateProduct(props) {
    const [category, setCategory] = useState([]);
    const [productType, setProductType] = useState([]);
    const [addSuccess, setAddSuccess] = useState(null);
    
    useEffect(() => {
        const fetch = async () => {
            const resCategory = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/category`)
            const resProductType = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/product-type`)
            setCategory(resCategory.data)
            setProductType(resProductType.data)
        }
        fetch();
    }, [])
    
    const handleSubmit = (form_data) => {
        const headers = {
            "Content-Type": "multipart/form-data",
            Authorization: `token ${props.token}`
        }
        axios.post(`${process.env.REACT_APP_API_LOCAL}/api/product/create`, form_data, {headers: headers})
            .then((res) => {
                console.log("success", res.data)
                notification.success({
                    message: `Thêm thành công`,
                    description:`${res.data.title}`,            
                })
                setAddSuccess(true)
            })
            .catch((err) => {
                console.log("unSuccess", err)
                notification.error({
                    message: `Lỗi: ${err.message}`,
                    description: 'Đã xảy ra lỗi. Vui lòng thử lại',
                    duration: 0
                })
                setAddSuccess(false)
            })
    }

    return (
        <div className="ml-5 mr-5">
            <Create category={category} productType={productType} 
            onSubmit={handleSubmit} addSuccess={addSuccess} />
        </div>
            
    )
}

CreateProduct.propTypes = {

}

const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}

export default connect(mapStateToProps, null)(CreateProduct)

