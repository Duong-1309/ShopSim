import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { Modal, Form, Input, } from 'antd'
import axios from 'axios'



function LeftSidebar() {

    const [visible, setVisible] = useState(false);
    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');
    const [categories, setCategories] = useState([]);
    const [productType, setProductType] = useState([]);

    useEffect(() => {
      const fetchCategories = async () => {
        const res = await axios.get('http://127.0.0.1:8000/api/category')
        setCategories(res.data)
      }
      fetchCategories();
      const fetchProductType = async () => {
        const res = await axios.get('http://127.0.0.1:8000/api/product-type')
        setProductType(res.data)
      }
      fetchProductType();
    }, [])


    const showModal = () => {
      setVisible(true);
    };
    const history = useHistory();
    const handleOk = e => {
      e.preventDefault();
      setVisible(false)
      if (inputOne !== '' && inputTwo !== ''){
        history.push(`/sim/gia-tu&&${inputOne}-${inputTwo}`);
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
              <div className="col-sm-4 col-md-4 col-lg-12">
                <h2 className="side-menu-title">SIM THEO GIÁ</h2>
                <ul className="side-menu mb-1 pb-1">
                  <li><Link to="/sim/gia-tu&&0-500" >Sim dưới 500 nghìn</Link></li>
                  <li><Link to="/sim/gia-tu&&500-1000">Sim giá 500 - 1 triệu</Link></li>
                  <li><Link to="/sim/gia-tu&&1000-3000">Sim giá 1 - 3 triệu</Link></li>
                  <li><Link to="/sim/gia-tu&&3000-5000">Sim giá 3 - 5 triệu</Link></li>
                  <li><Link to="/sim/gia-tu&&5000-10000">Sim giá 5 - 10 triệu</Link></li>
                  <li><Link to="/sim/gia-tu&&10000-50000">Sim giá 10 - 50 triệu</Link></li>
                  <li><Link to="/sim/gia-tu&&50000-100000">Sim giá 50 - 100 triệu</Link></li>
                  <li><Link to="/sim/gia-tu&&100000-500000">Sim giá 100 - 500 triệu</Link></li>
                  <li><Link to="/sim/gia-tu&&500000-999999999999999">Sim giá trên 500 triệu</Link></li>
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
          <div className="col-sm-4 col-md-4 col-lg-12">
            <h2 className="side-menu-title">SIM THEO MẠNG</h2>
            <ul className="side-menu mb-1 pb-1">
              {productType.map((sim)=> (
                <li key={sim.id}><Link to={`/sim/${sim.title}&&=${sim.id}`}>Sim {sim.title}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-12">
            <h2 className="side-menu-title">SIM THEO LOẠI</h2>
            <ul className="side-menu mb-1 pb-1">
              {categories.map((category) => (
                <li key={category.id}><Link to={`/sim/${category.slug}&&${category.id}`}>Sim {category.title}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-12"> 
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
      </div>
      </div>
      </div>
    )
}

export default LeftSidebar
