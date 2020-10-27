import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {Col, Table, Modal, ModalHeader, ModalFooter, ModalBody, 
  Form, FormGroup, Label, Input, FormText  } from 'reactstrap'
  
import {Spin, Button, Empty, notification} from 'antd'
import PropTypes from 'prop-types'

function List(props) {

    const { data, loading, onChangeLoad } = props;
    const {className} = props;
    const [modalDelete, setModalDelete] = useState(false);
    const [modalPut, setModalPut] = useState(false);
    const [sim, setSim] = useState({})
    const [newSim, setNewSim] = useState({})
    const [imageProduct, setImageProduct] = useState(null)
    const [listCategory, setListCategory] = useState([])
    const [listProductType, setListProductType] = useState([])
    const closeModal = () => {
      setModalDelete(false);
      setModalPut(false)
    }

    const handleDeleteProduct = (sim) => {
        setSim(sim)
        setModalDelete(true)
      }

    const handleDeleteOk = e => {
        // delete product by id   
        e.preventDefault();
        axios.delete(`${process.env.REACT_APP_API_LOCAL}/api/product/${sim.id}`, {
          headers: {
            Authorization: `token ${props.token}`
          }
        })
          .then((res) => {
            notification['warning']({
              message: `Đã xóa ${sim.title}`,
            });
            onChangeLoad() // refresh page then del SIM
          })
          
          .catch((err) => {
            console.log(err.message)
            notification['error']({
              message: 'Đã xảy ra lỗi',
            });
          })
        setModalDelete(false)
      };

    const handlePutProduct = (sim) => {
      // get list category, list type product and detail product
      console.log(sim, "sim");
      axios.get(`${process.env.REACT_APP_API_LOCAL}/api/category`)
        .then((res) => {
          setListCategory(res.data)
        })
        .catch(err => console.log(err.message))
      axios.get(`${process.env.REACT_APP_API_LOCAL}/api/product-type`)
        .then((res) => {
          setListProductType(res.data)
        })
        .catch(err => console.log(err.message))
      setSim(sim)
      setModalPut(true)
    }

    const handleChangePutProduct = (e) => {
      let NSIM = {
        title: sim.title,
        description: sim.description,
        price: sim.price,
        category: sim.category.id,
        product_type: sim.product_type.id,
        active: sim.active
      }
      setNewSim({
        ...NSIM,
        [e.target.name]: e.target.value,
        active: e.target.name === "active" ? e.target.checked : NSIM.active,
      })
    }

    const handleImageChange = (e) => {
      setImageProduct(e.target.files[0]);
    }

    const handleSubmitPutProduct = (e) => {
      e.preventDefault()
      console.log(newSim, "new sim");
      let form_data = new FormData();
      form_data.append('title', newSim.title)
      form_data.append('description', newSim.description)
      form_data.append('price', newSim.price)
      if(imageProduct !== null){
        form_data.append('product_img', imageProduct, imageProduct.name)
      }
      
      form_data.append('category', newSim.category)  //error not fixed
      form_data.append('product_type', newSim.product_type)   //error not fixed
      form_data.append('active', newSim.active)
      const header = {
        'Content-Type': 'multipart/form-data',
        Authorization: `token ${props.token}`
      }
      axios.put(`${process.env.REACT_APP_API_LOCAL}/api/product/${sim.id}`, form_data, {headers: header})
        .then((res) => {
          console.log(res.data, "updated SIM")
          notification['success']({
            message: `Đã sửa ${sim.title}`,
          });
          setModalPut(false)
          onChangeLoad()
        })
        .catch((err) => {
          console.log(err.message)
          notification['error']({
            message: 'Đã xảy ra lỗi',
          });
        })
    }

    const formatPhoneNumber = (number) => {
      let lengthNumberPhone = number.length;
      return `${number.slice(0, 4)}.${number.slice(4, 7)}.${number.slice(7, lengthNumberPhone)}`
    }

    const formatNumberMoney = (money) => {
      let result = money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
      return result;
    }

    if (loading) {
        return (<div className="text-center"><Spin tip="Loading..." /></div>)
      }
    
    if (data.length === 0) {
        return (
          <Empty>
            <strong><p>SIM bạn tìm kiếm đã bán hoặc không tồn tại</p></strong>
            <Button type="primary">Về trang chủ</Button>
          </Empty>)
      }
    
    return (
        <>
        {/* modal put */}
        <Modal isOpen={modalPut} toggle={closeModal} className={className}>
            <ModalHeader toggle={closeModal}>
              PUTTTTTTT
            </ModalHeader>
            <ModalBody>
            <Form >
                <FormGroup row>
                  <Label sm={2}>Số: </Label>
                  <Col sm={10}>
                    <Input type="text" onChange={handleChangePutProduct}
                     defaultValue={sim.title} name="title" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={2}>Mô tả: </Label>
                  <Col sm={10}>
                    <Input type="textarea" onChange={handleChangePutProduct}
                    defaultValue={sim.description} name="description" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={2}>Image</Label>
                  <Col sm={10}>
                    <Input type="file" accept="image/png, image/jpeg" onChange={handleImageChange}
                     name="product_img" />
                    <FormText color="muted">
                    {sim.product_img !== null && <p>{sim.product_img}</p>}
                      <p>Không bắt buộc...</p>
                    </FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={2}>Giá</Label>
                  <Col sm={10}>
                   <Input type="number" defaultValue={sim.price} onChange={handleChangePutProduct} name="price" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={2}>Chuyên mục</Label>
                  <Col sm={10}>
                    <Input defaultValue={sim.category && sim.category.id} type="select" 
                    onChange={handleChangePutProduct}
                    name="category">
                      {listCategory.map((category) => (
                        <option key={category.id} value={category.id}>{category.title}</option>
                      ))}
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={2}>Loại mạng</Label>
                  <Col sm={10}>
                    <Input type="select" defaultValue={sim.product_type && sim.product_type.id} 
                    onChange={handleChangePutProduct}
                     name="product_type" >
                       {listProductType.map((type)=>(
                         <option key={type.id} value={type.id}>{type.title}</option>
                       ))}
                      
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={2}>Còn SIM</Label>
                  <Col sm={10}>
                    <FormGroup>
                      <Input type="checkbox" onChange={handleChangePutProduct}
                         name="active" defaultChecked={sim.active === true ? true : false}/>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
                <Button type="primary" onClick={handleSubmitPutProduct}>Gửi</Button>
            </ModalFooter>
        </Modal>
        {/* modal delete  */}
        <Modal isOpen={modalDelete} toggle={closeModal} className={className}>
            <ModalHeader toggle={closeModal}>
                Xác nhận xóa số
            </ModalHeader>
            <ModalBody>
              <h3 className="text-danger pt-2">{sim.title}</h3>
            </ModalBody>
            <ModalFooter>
                <Button type="primary" danger onClick={handleDeleteOk}>Xóa</Button>{' '}
            </ModalFooter>
        </Modal>
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
                </tr>
                </thead>
                <tbody>
                {data.map((card) => (
                    <tr key={card.id}>
                    <th scope="row">{formatPhoneNumber(card.title)}</th>
                    <td>{formatNumberMoney(card.price)}<sup> vnđ</sup></td>
                    {card.product_type.title && card.category.title ? 
                    <>
                      <td>{card.product_type.title}</td>
                      <td>{card.category.title}</td>
                      <td>{card.description}</td>
                      <td>{card.active === true ? "true" : "false"}</td>
                    </>
                    : ""
                    }
                    <td>
                        <Button className="mr-3 mb-1"
                        type="primary" size="small" onClick={(e) => handlePutProduct(card)} >Sửa</Button>
                        <Button type="danger" onClick={(e) => handleDeleteProduct(card)}
                        size="small" >Xóa</Button>
                    </td>
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
    onChangeLoad: PropTypes.func,
  }
List.defaultProps = {
    data: [],
    loading: true,
    onChangeLoad: null,
  }
  
  const mapStateToProps = state => {
    return {
      token: state.token
    }
  }
  
  export default connect(mapStateToProps, null)(List)

