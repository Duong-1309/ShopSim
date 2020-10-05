import React, {useState} from 'react'
import axios from 'axios'
import './index.css'
import PropTypes from 'prop-types'

import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Modal } from 'antd'


function SingleProduct(props) {
  const {data} = props;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [modalOne, setModalOne] = useState(false);

  const handleChangeCusInfor = (e) => {
    let inputName = e.target.name;
    switch (inputName) {
      case "phoneNumber":
        setPhoneNumber(e.target.value)
        break;
      case "name":
        setName(e.target.value)
        break;
      case "address":
        setAddress(e.target.value)
        break;
      default:
        break;
    }
    
  }
 

  const handleSubmitCusInfor = (e) => {
    e.preventDefault();
    let [pNumber, nName, aAddress] = [phoneNumber.trim(), name.trim(), address.trim()] //loại bỏ khoảng trắng
    if(pNumber === '' && nName === '' && aAddress === ''){
      setPhoneNumber('');
      setAddress('');
      setName('');
    }  else {showModal();} 
  }

  const showModal = () => {
    setModalOne(true);
  };
  const handleCancel = e => {
    e.preventDefault()
    setModalOne(false);
    
  };
  let Sim = data; //lấy dữ liệu trước khi gọi hàm
  const handleOk = e => {
    e.preventDefault();
    let [pNumber, nName, aAddress] = [phoneNumber.trim(), name.trim(), address.trim()] //loại bỏ khoảng trắng
    const dataset = {"phoneNumber": pNumber, "name": nName, "address": aAddress, "product": Sim.id}
    if(pNumber !== '' && nName !== '' && aAddress !== ''){  //kiểm tra data #trăngs
      axios.post('http://127.0.0.1:8000/api/customer-information/', dataset)
        .then((res) => {
          Modal.success({
            title: 'Đăt sim thành công',
            content: (
              <div>
                <p>Cám ơn Anh/Chị đã cho shop sim số đẹp cơ hội phục vụ. Chúng tồi sẽ gọi tới Anh/Chị sau ít phút nữa</p>
               <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Tên sản phẩm</td>
                      <td>{data.title}</td>
                    </tr>
                    <tr>
                      <td>Giá bán</td>
                      <td>{data.price}</td>
                    </tr>
                    <tr>
                      <td>Hình thức thanh toán</td>
                      <td>Thanh toán tại nhà</td>
                    </tr>
                    <tr>
                      <td>Tên khách hành</td>
                      <td>{res.data.name}</td>
                    </tr>
                    <tr>
                      <td>Số liên hệ</td>
                      <td>{res.data.phoneNumber}</td>
                    </tr>
                    <tr>
                      <td>Địa chỉ giao hàng</td>
                      <td>{res.data.address}</td>
                    </tr>
                  </tbody>
                </table>


              </div>
            )
          })
          setPhoneNumber('');
          setAddress('');
          setName('');
          console.log(res);
        }).catch((err) => {
          console.log(err.message);
          Modal.error({
            title: `Error: ${err.message}`,
            content: 'Đã xảy ra lỗi. Xin thử lại!'
          })
        });
    } else {
      setPhoneNumber('');
      setName('');
      setAddress('');
    }
      setModalOne(false)
        
    };
    console.log(data.active);
  return (
    <>
    <Modal
      title="Xác Nhận Thông Tin"
      visible={modalOne}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <h4>Quý khách vui lòng kiểm tra lại thông tin</h4>
      <ul>
        <li>Số điện thoại của bạn là: <i>{phoneNumber}</i></li>
        <li>Họ tên của bạn là: <i>{name}</i></li>
        <li>Địa chỉ của bạn là: <i>{address}</i></li>
      </ul>
    </Modal>
    <div className="container p-3 my-3 border detail-product">
        <h5 className="d-flex justify-content-end pr-4">Khuyến mãi</h5>
        <div className="row">
          <div className="col-7">
            <span>Số sim: <strong style={{fontSize: '3rem', color: '#007bff', marginLeft: '7px',}}>{data.title}</strong></span>
            <br />
            <span>Giá bán: <strong style={{fontSize: 24, color: '#007bff',}}>{data.price}</strong></span>
            <br/>
            <span>Loại sim: <strong style={{fontSize: 24, color: '#007bff',}}>{data.description}</strong></span>
            {data.active && <p>Đã bán</p>}
          </div>
          <div className="col-5 d-flex justify-content-center">
            
          </div>
        </div>{/* End .row */}
      </div>
      <div className="container p-3 my-3 border detail-product">

      <div style={{padding: 30}}>
            <h3 className="d-flex justify-content-center">Đặt Mua Sim</h3>
        <Form onSubmit={handleSubmitCusInfor}>
            <FormGroup>
                <Label >Điện thoại liên hệ:</Label>
                <Input type="text" value={phoneNumber} onChange={handleChangeCusInfor}
                name="phoneNumber" placeholder="Điện thoại liên hệ" required/>
            </FormGroup>
            <FormGroup>
                <Label >Họ tên:</Label>
                <Input type="text" value={name} onChange={handleChangeCusInfor}
                name="name" placeholder="Họ tên của bạn" required/>
            </FormGroup>
            <FormGroup>
                <Label >Địa chỉ:</Label>
                <Input type="text" value={address} onChange={handleChangeCusInfor}
                name="address" placeholder="Địa chỉ của bạn" required/>
            </FormGroup>
            
            <Button type="submit" className="d-flex justify-content-center">Đặt sim</Button>
        </Form>
        </div>
    </div>
    <div className="text-justify p-5 my-3 border">
        <h4 className="font-weight-bold">Hướng dẫn cách thức mua sim {data.title}</h4>
        <p>Đặt cọc và thanh toán tiền còn lại khi nhận sim 
          (áp dụng tại các tỉnh không có đại lý): Quý khách đảm bảo 
          việc mua hàng bằng cách đặt cọc tối thiểu 10% giá trị sim 
          qua chuyển khoản hoặc mã thẻ cào (Xem danh sách tài khoản ngân hàng tại đây). 
          Chúng tôi sẽ gửi bưu điện phát sim đến tay quý khách và thu tiền còn lại 
          (Hệ thống bưu điện trên cả nước đều cung cấp dịch vụ 
          thu hộ tiền cho người bán - gọi tắt là COD. Theo đó, 
          bưu điện sẽ giao hàng (sim) đến tận tay quý khách và thu tiền cho chúng tôi)</p>
          <p>Chúc quý khách gặp nhiều may mắn khi sở hữu thuê bao <span className="font-weight-bold">{data.title}</span>.</p>
      </div>
    </>

  )
}

SingleProduct.propTypes = {
  data: PropTypes.object,
}
SingleProduct.defaultProps = {
  data: {},
}

export default SingleProduct
