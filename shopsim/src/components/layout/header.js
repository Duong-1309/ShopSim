import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header id="HEADER" className="header">
          <div className="header-middle">
            <div className="container">
              <div className="header-left col-lg-2 w-auto pl-0">
                <button className="mobile-menu-toggler mr-2" type="button">
                  <i className="icon-menu" />
                </button>
                <Link to="#" className="logo">
                  <img src="assets/images/logo.png" alt="Porto Logo" />
                </Link>
              </div>{/* End .header-left */}
              <div className="header-right w-lg-max ml-0">
              
                <div className="header-contact d-none d-lg-flex pl-4 ml-3 mr-xl-5 pr-4">
                  <img alt="phone" src="assets/images/phone.png" width={30} height={30} className="pb-1" />
                  <h6>Gọi cho chúng tôi<Link to="tel:#" className="font1">+123 5678 890</Link></h6>
                </div>
              </div>{/* End .header-right */}
            </div>{/* End .container */}
          </div>{/* End .header-middle */}
          <div className="header-bottom sticky-header d-none d-lg-block">
          <div id="BODY"></div>
            <div className="container">
              <nav className="main-nav w-100">
                <ul className="menu">
                  <li>
                    <Link to="/">TRANG CHỦ</Link>
                  </li>
                  <li>
                    <Link to="/sim/phong-thuy&&33">SIM PHONG THỦY <span className="tip tip-new tip-top">New</span></Link>
                  </li>
                  <li>
                    <Link to="#">SIM TRẢ GÓP</Link>
                  </li>
                  <li><Link to="#">THANH TOÁN</Link></li>
                  <li>
                    <Link to="/about">GIỚI THIỆU</Link>
                  </li>
                  <li><Link to="/lien-he">LIÊN HỆ</Link></li>
                  <li><Link to="#">ĐĂNG NHẬP</Link></li>
                  <li className="float-right"><Link to="/chuyen-muc" >TIN TỨC</Link></li>
                  <li className="float-right"><Link to="#">KHUYẾN MÃI</Link></li>
                </ul>
              </nav>
            </div>{/* End .container */}
          </div>{/* End .header-bottom */}
          
        </header>
    )
}

export default Header
