import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="header">
          <div className="header-middle">
            <div className="container">
              <div className="header-left col-lg-2 w-auto pl-0">
                <button className="mobile-menu-toggler mr-2" type="button">
                  <i className="icon-menu" />
                </button>
                <a href="#" className="logo">
                  <img src="assets/images/logo.png" alt="Porto Logo" />
                </a>
              </div>{/* End .header-left */}
              <div className="header-right w-lg-max ml-0">
              
                <div className="header-contact d-none d-lg-flex pl-4 ml-3 mr-xl-5 pr-4">
                  <img alt="phone" src="assets/images/phone.png" width={30} height={30} className="pb-1" />
                  <h6>Gọi cho chúng tôi<a href="tel:#" className="font1">+123 5678 890</a></h6>
                </div>
              </div>{/* End .header-right */}
            </div>{/* End .container */}
          </div>{/* End .header-middle */}
          <div className="header-bottom sticky-header d-none d-lg-block">
            <div className="container">
              <nav className="main-nav w-100">
                <ul className="menu">
                  <li>
                    <Link to="/">TRANG CHỦ</Link>
                  </li>
                  <li>
                    <a href="#">SIM PHONG THỦY <span className="tip tip-new tip-top">New</span></a>
                  </li>
                  <li>
                    <a href="#">SIM TRẢ GÓP</a>
                  </li>
                  <li>
                    <a href="#">TUYỂN DỤNG</a>
                  </li>
                  <li><a href="#">THANH TOÁN</a></li>
                  <li><a href="#">LIÊN HỆ</a></li>
                  <li><a href="#">ĐĂNG NHẬP</a></li>
                  <li className="float-right"><a href="#" target="_blank">TIN TỨC</a></li>
                  <li className="float-right"><a href="#">KHUYẾN MÃI</a></li>
                </ul>
              </nav>
            </div>{/* End .container */}
          </div>{/* End .header-bottom */}
          
        </header>
    )
}

export default Header
