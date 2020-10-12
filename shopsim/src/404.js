import React from 'react'
import  { Empty, Button } from 'antd'
import {Link} from 'react-router-dom'

function NotFound() {
    return (                        
        <Empty>
            <span>
                <p>Trang tìm kiếm không tồn tại </p>
            </span>
            <Link to="/">
                <Button type="primary">Về trang chủ</Button>
            </Link>
        </Empty>
    )
}


export default NotFound

