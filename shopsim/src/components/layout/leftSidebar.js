import React from 'react'
import {Link} from 'react-router-dom'

function LeftSidebar() {
    return (
        <div className="col-lg-2 mb-2">
          <div>
            <h2 className="side-menu-title">SIM THEO GIÁ</h2>
            <ul className="side-menu mb-1 pb-1">
              <li><Link to="/gia-tu/0-500" >Sim dưới 500 nghìn</Link></li>
              <li><Link to="/gia-tu/500-1000">Sim giá 500 - 1 triệu</Link></li>
              <li><Link to="/gia-tu/1000-3000">Sim giá 1 - 3 triệu</Link></li>
              <li><Link to="/gia-tu/3000-5000">Sim giá 3 - 5 triệu</Link></li>
              <li><Link to="/gia-tu/5000-10000">Sim giá 5 - 10 triệu</Link></li>
              <li><Link to="/gia-tu/10000-50000">Sim giá 10 - 50 triệu</Link></li>
              <li><Link to="/gia-tu/50000-100000">Sim giá 50 - 100 triệu</Link></li>
              <li><Link to="/gia-tu/100000-500000">Sim giá 100 - 500 triệu</Link></li>
              <li><Link to="/gia-tu/500000-999999999999999">Sim giá trên 500 triệu</Link></li>
              <li><Link to="/gia-tu/0-500">Tùy chọn khoảng giá</Link></li>
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
      </div>
    )
}

export default LeftSidebar
