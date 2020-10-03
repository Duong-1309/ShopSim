import React from 'react'

function MobileMenu() {
    return (
        <div>
              <div>
            <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close"><i className="icon-cancel" /></span>
                <nav className="mobile-nav">
                    <ul className="mobile-menu mb-3">
                    <li className="active"><a href="#">TRANG CHỦ</a></li>
                    <li>
                        <a href="#">SIM PHONG THỦY<span className="tip tip-new">New</span></a>
                    </li>
                    <li>
                        <a href="#">SIM TRẢ GÓP</a>
                    </li>
                    <li>
                        <a href="#">TUYỂN DỤNG<span className="tip tip-hot">Hot!</span></a>
                    </li>
                    <li><a href="#">THANH TOÁN</a>
                    </li>
                    <li><a href="#">LIÊN HỆ</a></li>
                    <li><a href="#">ĐĂNG NHẬP</a></li>
                    
                    </ul>
                    <ul className="mobile-menu">
                    <li><a href="#">Track Order </a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Our Stores</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Help &amp; FAQs</a></li>
                    </ul>
                </nav>{/* End .mobile-nav */}
                <div className="social-icons">
                    <a href="#" className="social-icon" target="_blank"><i className="icon-facebook" /></a>
                    <a href="#" className="social-icon" target="_blank"><i className="icon-twitter" /></a>
                    <a href="#" className="social-icon" target="_blank"><i className="icon-instagram" /></a>
                </div>{/* End .social-icons */}
                </div>{/* End .mobile-menu-wrapper */}
            </div>{/* End .mobile-menu-container */}
            {/* THis is place newlester popup */}
           
            {/* Add Cart Modal */}
            <div className="modal fade" id="addCartModal" tabIndex={-1} role="dialog" aria-labelledby="addCartModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body add-cart-box text-center">
                    <p>You've just added this product to the<br />cart:</p>
                    <h4 id="productTitle" />
                    <img src="#" id="productImage" width={100} height={100} alt="adding cart image" />
                    <div className="btn-actions">
                        <a href="cart.html"><button className="btn-primary">Go to cart page</button></a>
                        <a href="#"><button className="btn-primary" data-dismiss="modal">Continue</button></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <a id="scroll-top" href="#top" title="Top" role="button"><i className="icon-angle-up"></i></a>
            </div>

        </div>
         
    )
}

export default MobileMenu
