import React from 'react'
import { Table } from 'reactstrap'
import {Spin, Empty, Button} from 'antd'
import PropTypes from 'prop-types'


function List(props) {
  const {data, loading} = props;

  if(loading){
    return (<div className="text-center"><Spin tip="Loading..."/></div>)
  }
  
  if(data.length === 0){
    return (
        <Empty>
          <strong><p>SIM bạn tìm kiếm đã bán hoặc không tồn tại</p></strong>
          <Button type="primary">Về trang chủ</Button>
        </Empty>)
  }

  return ( 
    <>
        <h3 className="text-primary text-center">Danh sách sim</h3>
        <div className="container">
          <div className="row">
            
              {props.children} 
              {/* sort and search */}
           
          </div>
        </div>
        <Table hover>
      <thead>
        <tr>
          <th scope="col">Số ĐT</th>
          <th scope="col">Giá</th>
          <th scope="col">Mạng</th>
          <th scope="col">Loại</th>
          <th scope="col">Mô tả</th>
        </tr>
      </thead>
        <tbody>
          {data.map((sim)=>(
            <tr key={sim.id}>
              <th scope="row">{sim.title}</th>
              <td>{sim.price}</td>
              <td>{sim.product_type.title}</td>
              <td>{sim.category.title}</td>
              <td>{sim.description}</td>
              <td>@mdo</td>
          </tr>
          ))}
          
        </tbody>
    </Table>
    </>
    )
}

List.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
}
List.defaultProps = { 
  data: [],
  loading: true
 }


export default List

