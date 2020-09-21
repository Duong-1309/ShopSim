import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Modal, Form, Input, } from 'antd';



function LeftSidebar() {

    const [visible, setVisible] = useState(false);
    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');

    const showModal = () => {
      setVisible(true);
    };
  
    const handleOk = e => {
      e.preventDefault();
      setVisible(false)
      if (inputOne !== '' && inputTwo !== ''){
        window.location=`/${inputOne}-${inputTwo}`;
      }
      setInputOne('');
      setInputTwo('');     
    };
  
    const handleCancel = e => {
      console.log(e);
      setVisible(false);
      
    };

    const handleChange = (e) => {
      e.preventDefault();
      let name = e.target.name;
      let value = e.target.value;
      if (name === 'inputOne'){
        setInputOne(value)
        console.log(name,value);
      } else{
        setInputTwo(value);
        console.log(name,value);
      }
    }

    return (
        <div className="col-lg-2 mb-2">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-sm-4 col-lg-12">
                <h2 className="side-menu-title">SIM THEO GIÁ</h2>
                <ul className="side-menu mb-1 pb-1">
                  <li><Link to="/sort/0-500" >Sim dưới 500 nghìn</Link></li>
                  <li><Link to="/sort/500-1000">Sim giá 500 - 1 triệu</Link></li>
                  <li><Link to="/sort/1000-3000">Sim giá 1 - 3 triệu</Link></li>
                  <li><Link to="/sort/3000-5000">Sim giá 3 - 5 triệu</Link></li>
                  <li><Link to="/sort/5000-10000">Sim giá 5 - 10 triệu</Link></li>
                  <li><Link to="/sort/10000-50000">Sim giá 10 - 50 triệu</Link></li>
                  <li><Link to="/sort/50000-100000">Sim giá 50 - 100 triệu</Link></li>
                  <li><Link to="/sort/100000-500000">Sim giá 100 - 500 triệu</Link></li>
                  <li><Link to="/sort/500000-999999999999999">Sim giá trên 500 triệu</Link></li>
                  <li onClick={showModal}>Tùy chọn khoảng giá</li>
                </ul>
              </div>
              <Modal
                title="Basic Modal"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form layout="inline">
                  <Input name="inputOne" value={inputOne} onChange={handleChange} type="text" placeholder="..."/>
                  <span>to</span>
                  <Input name="inputTwo" value={inputTwo} onChange={handleChange} type="text" placeholder="..."/>
                </Form>
              </Modal>
              <div className="col-sm-4 col-lg-12">
                  <h2 className="side-menu-title">SIM THEO GIÁ</h2>
                  <ul className="side-menu mb-1 pb-1">
                    <li><Link to="/0-500" >Sim dưới 500 nghìn</Link></li>
                    <li><Link to="/500-1000">Sim giá 500 - 1 triệu</Link></li>
                    <li><Link to="/1000-3000">Sim giá 1 - 3 triệu</Link></li>
                    <li><Link to="/3000-5000">Sim giá 3 - 5 triệu</Link></li>
                    <li><Link to="/5000-10000">Sim giá 5 - 10 triệu</Link></li>
                    <li><Link to="/10000-50000">Sim giá 10 - 50 triệu</Link></li>
                    <li><Link to="/50000-100000">Sim giá 50 - 100 triệu</Link></li>
                    <li><Link to="/100000-500000">Sim giá 100 - 500 triệu</Link></li>
                    <li><Link to="/500000-999999999999999">Sim giá trên 500 triệu</Link></li>
                    <li><Link to="/0-500">Tùy chọn khoảng giá</Link></li>
                  </ul>
              </div>
              <div className="col-sm-4 col-lg-12">
                  <h2 className="side-menu-title">SIM THEO GIÁ</h2>
                  <ul className="side-menu mb-1 pb-1">
                    <li><Link to="/0-500" >Sim dưới 500 nghìn</Link></li>
                    <li><Link to="/500-1000">Sim giá 500 - 1 triệu</Link></li>
                    <li><Link to="/1000-3000">Sim giá 1 - 3 triệu</Link></li>
                    <li><Link to="/3000-5000">Sim giá 3 - 5 triệu</Link></li>
                    <li><Link to="/5000-10000">Sim giá 5 - 10 triệu</Link></li>
                    <li><Link to="/10000-50000">Sim giá 10 - 50 triệu</Link></li>
                    <li><Link to="/50000-100000">Sim giá 50 - 100 triệu</Link></li>
                    <li><Link to="/100000-500000">Sim giá 100 - 500 triệu</Link></li>
                    <li><Link to="/500000-999999999999999">Sim giá trên 500 triệu</Link></li>
                    <li><Link to="/0-500">Tùy chọn khoảng giá</Link></li>
                  </ul>
              </div>
            </div>
          </div>
          
          {/* <div>
            <h2 className="side-menu-title">SIM THEO GIÁ</h2>
              <ul className="side-menu mb-1 pb-1">
                <li><Link to="/0-500" >Sim dưới 500 nghìn</Link></li>
                <li><Link to="/500-1000">Sim giá 500 - 1 triệu</Link></li>
                <li><Link to="/1000-3000">Sim giá 1 - 3 triệu</Link></li>
                <li><Link to="/3000-5000">Sim giá 3 - 5 triệu</Link></li>
                <li><Link to="/5000-10000">Sim giá 5 - 10 triệu</Link></li>
                <li><Link to="/10000-50000">Sim giá 10 - 50 triệu</Link></li>
                <li><Link to="/50000-100000">Sim giá 50 - 100 triệu</Link></li>
                <li><Link to="/100000-500000">Sim giá 100 - 500 triệu</Link></li>
                <li><Link to="/500000-999999999999999">Sim giá trên 500 triệu</Link></li>
                <li><Link to="/0-500">Tùy chọn khoảng giá</Link></li>
              </ul>
          </div>
          <div>
            <h2 className="side-menu-title">SIM THEO MẠNG</h2>
            <ul className="side-menu mb-1 pb-1">
              <li><Link to="#">Sim Viettel</Link></li>
              <li><Link to="#">Sim VinLinkphone</Link></li>
              <li><Link to="#">Sim Mobiphone</Link></li>
              <li><Link to="#">Sim VietnLinkmMobile</Link></li>
              <li><Link to="#">Sim Gmobile</Link></li>
              <li><Link to="#">Sim iTelecom</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="side-menu-title">SIM THEO LOẠI</h2>
            <ul className="side-menu mb-1 pb-1">
              <li><Link to="#">Sim trả góp</Link></li>
              <li><Link to="#">Sim giá rẻ</Link></li>
              <li><Link to="#">Sim trả sLinku</Link></li>
              <li><Link to="#">Sim VIP</Link></li>
              <li><Link to="#">Sim Lục quý</Link></li>
              <li><Link to="#">Sim Ngũ quý</Link></li>
              <li><Link to="#">Sim Tứ quý</Link></li>
              <li><Link to="#">Sim TLinkxi</Link></li>
              <li><Link to="#">Sim TLinkm hoLink kép</Link></li>
              <li><Link to="#">Sim TLinkm hoLink</Link></li>
              <li><Link to="#">Sim Lộc phát</Link></li>
              <li><Link to="#">Sim Thần tài</Link></li>
              <li><Link to="#">Sim Ông ĐịLink</Link></li>
              <li><Link to="#">Sim Lặp kép</Link></li>
              <li><Link to="#">Sim Gánh đào</Link></li>
              <li><Link to="#">Sim Tiến lên</Link></li>
              <li><Link to="#">Sim Đôi</Link></li>
              <li><Link to="#">Sim Dễ nhớ</Link></li>
              <li><Link to="#">Sim Năm sinh</Link></li>
              <li><Link to="#">Sim Số độc</Link></li>
              <li><Link to="#">Sim Lục quý giữLink</Link></li>
              <li><Link to="#">Sim Ngũ quý giữLink</Link></li>
              <li><Link to="#">Sim Tứ quý giữLink</Link></li>
              <li><Link to="#">Sim đầu số cổ</Link></li>
              <li><Link to="#">Sim Đại cát</Link></li>
              <li><Link to="#">Sim Phong thủy</Link></li>
              <li><Link to="#">Sim 4G</Link></li>
            </ul>
          </div>
          <div> 
            <h2 className="side-menu-title">SIM THEO NĂM SINH</h2>
            <ul className="side-menu mb-1 pb-1">
              <li><Link to="#">Sim năm sinh 2000</Link></li>
              <li><Link to="#">Sim năm sinh 1999</Link></li>
              <li><Link to="#">Sim năm sinh 1998</Link></li>
              <li><Link to="#">Sim năm sinh 1997</Link></li>
              <li><Link to="#">Sim năm sinh 1996</Link></li>
              <li><Link to="#">Sim năm sinh 1995</Link></li>
              <li><Link to="#">Sim năm sinh 1994</Link></li>
              <li><Link to="#">Sim năm sinh 1993</Link></li>
              <li><Link to="#">Sim năm sinh 1992</Link></li>
              <li><Link to="#">Sim năm sinh 1991</Link></li>
              <li><Link to="#">Sim năm sinh 1990</Link></li>
              <li><Link to="#">Sim năm sinh 1989</Link></li>
              <li><Link to="#">Sim năm sinh 1988</Link></li>
              <li><Link to="#">Sim năm sinh 1987</Link></li>
              <li><Link to="#">Sim năm sinh 1986</Link></li>
              <li><Link to="#">Sim năm sinh 1985</Link></li>              
            </ul>
          </div>
          */}
      </div>
    )
}

export default LeftSidebar
