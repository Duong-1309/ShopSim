import React from 'react'
import {Link} from 'react-router-dom'

function About(props) {
    return (
        <main className="main">
  <div className="page-header page-header-bg text-left" style={{background: '70%/cover #D4E1EA url("assets/images/page-header-bg.jpg")'}}>
    <div className="container">
      <h1><span>VỀ CHÚNG TÔI</span>
        ĐẠI LÝ SIM SỐ</h1>
      <Link to="/lien-he" className="btn btn-dark">LIÊN HỆ</Link>
    </div>{/* End .container */}
  </div>{/* End .page-header */}
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index-2.html"><i className="icon-home" /></a></li>
        <li className="breadcrumb-item active" aria-current="page">Về chúng tôi</li>
      </ol>
    </div>{/* End .container */}
  </nav>
  <div className="about-section">
    <div className="container">
      <h2 className="subtitle">OUR STORY</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <p className="lead">“ Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model search for evolved over sometimes by accident, sometimes on purpose ”</p>
    </div>{/* End .container */}
  </div>{/* End .about-section */}
  <div className="features-section bg-gray">
    <div className="container">
      <h2 className="subtitle">TẠI SAO NÊN CHỌN CHÚNG TÔI</h2>
      <div className="row">
        <div className="col-lg-4">
          <div className="feature-box bg-white">
            <i className="icon-shipped" />
            <div className="feature-box-content">
              <h3>Free Shipping</h3>
              <p>Miễn phí vận chuyển khu vực nội thành Đồng Hới và các khu vực có đại lý</p>
            </div>{/* End .feature-box-content */}
          </div>{/* End .feature-box */}
        </div>{/* End .col-lg-4 */}
        <div className="col-lg-4">
          <div className="feature-box bg-white">
            <i className="icon-us-dollar" />
            <div className="feature-box-content">
              <h3>100% CHÍNH CHỦ</h3>
              <p>Nhận hàng rồi mới thanh toán. Đảm bảo chính chủ 100%</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="feature-box bg-white">
            <i className="icon-online-support" />
            <div className="feature-box-content">
              <h3>HỖ TRỢ TƯ VẤN 24/7</h3>
              <p>Đội ngũ nhân viên luôn sẵn sàng tư vấn, hỗ trợ trong mọi khung giờ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="testimonials-section">
    <div className="container">
      <h2 className="subtitle text-center">CHÚC MỪNG KHÁCH HÀNG</h2>
     
    </div>{/* End .container */}
  </div>{/* End .testimonials-section */}
 
</main>

    )
}


export default About

