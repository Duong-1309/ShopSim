import React from 'react'
import LeftSidebar from './leftSidebar'
import RightSidebar from './rightSidebar'
import Search from './search'

function Main({children}) {
    return (
       <main className="main">
        <div className="container mt-2">
          <div className="row">
        <LeftSidebar/>
        <div className="col-lg-8 mb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
               <nav aria-label="breadcrumb" className="breadcrumb-nav">
                  <div className="container">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#"><i className="icon-home" /></a></li>
                      <li className="breadcrumb-item active" aria-current="page">Blog</li>
                    </ol>
                  </div>{/* End .container */}
                </nav>
                <Search />
                {children}
              </div>
            </div>
          </div>
        </div>
        <RightSidebar/>
     
    </div>{/* End .row */}
    <div className="info-boxes-container row row-joined mb-1">
      <div className="info-box info-box-icon-left col-lg-4">
        <i className="icon-shipping" />
        <div className="info-box-content">
          <h4>FREE SHIPPING &amp; RETURN</h4>
          <p className="text-body">Free shipping on all orders over $99.</p>
        </div>{/* End .info-box-content */}
      </div>{/* End .info-box */}
      <div className="info-box info-box-icon-left col-lg-4">
        <i className="icon-money" />
        <div className="info-box-content">
          <h4>MONEY BACK GUARANTEE</h4>
          <p className="text-body">100% money back guarantee</p>
        </div>{/* End .info-box-content */}
      </div>{/* End .info-box */}
      <div className="info-box info-box-icon-left col-lg-4">
        <i className="icon-support" />
        <div className="info-box-content">
          <h4>ONLINE SUPPORT 24/7</h4>
          <p className="text-body">Lorem ipsum dolor sit amet.</p>
        </div>{/* End .info-box-content */}
      </div>{/* End .info-box */}
    </div>{/* End .info-boxes-container */}
  </div>{/* End .container */}
  
  <div className="brands-section mt-5 mb-5">
    <div className="container">
      <div className="brands-slider owl-carousel owl-theme images-center">
        <img src="assets/images/brands/brand1.png" width={140} height={60} alt="brand" />
        <img src="assets/images/brands/brand2.png" width={140} height={60} alt="brand" />
        <img src="assets/images/brands/brand3.png" width={140} height={60} alt="brand" />
        <img src="assets/images/brands/brand4.png" width={140} height={60} alt="brand" />
        <img src="assets/images/brands/brand5.png" width={140} height={60} alt="brand" />
        <img src="assets/images/brands/brand6.png" width={140} height={60} alt="brand" />
      </div>{/* End .brands-slider */}
    </div>
  </div>
</main>

    )
}

export default Main
