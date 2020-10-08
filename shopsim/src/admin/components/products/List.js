import React from 'react'
import { Table } from 'reactstrap';
import {Spin, Input} from 'antd'
import PropTypes from 'prop-types'

function List(props) {
  const {data, loading} = props;
  console.log('data:', data);
  if(loading){
    return (<div className="text-center"><Spin tip="Loading..."/></div>)
  }

    return (  
      <div className="ml-4 mr-4">
        <h3 className="text-primary text-center">Danh sách sim</h3>
        <Input.Search size="large" placeholder="input here" enterButton />

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
    {props.children}
    </div>
    )
}

List.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
}
List.defaultProps = {
  data: [],    "editor.fontFamily": "'FiraCode-Retina'",

  loading: true
}

export default List




