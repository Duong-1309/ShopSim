import React from 'react'
import {Link} from 'react-router-dom'

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
                    <li className="active"><Link to="#">TRANG CHỦ</Link></li>
                    <li>
                        <Link to="#">SIM PHONG THỦY<span className="tip tip-new">New</span></Link>
                    </li>
                    <li>
                        <Link to="#">SIM TRẢ GÓP</Link>
                    </li>
                    <li>
                        <Link to="#">TUYỂN DỤNG<span className="tip tip-hot">Hot!</span></Link>
                    </li>
                    <li><Link to="#">THANH TOÁN</Link>
                    </li>
                    <li><Link to="#">LIÊN HỆ</Link></li>
                    <li><Link to="#">ĐĂNG NHẬP</Link></li>
                    
                    </ul>
                    <ul className="mobile-menu">
                    <li><Link to="#">Track Order </Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Our Stores</Link></li>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">Contact</Link></li>
                    <li><Link to="#">Help &amp; FAQs</Link></li>
                    </ul>
                </nav>{/* End .mobile-nav */}
                <div className="social-icons">
                    <Link to="#" className="social-icon" target="_blank"><i className="icon-facebook" /></Link>
                    <Link to="#" className="social-icon" target="_blank"><i className="icon-twitter" /></Link>
                    <Link to="#" className="social-icon" target="_blank"><i className="icon-instagram" /></Link>
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
                        <Link to="cart.html"><button className="btn-primary">Go to cart page</button></Link>
                        <Link to="#"><button className="btn-primary" data-dismiss="modal">Continue</button></Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <Link id="scroll-top" to="#top" title="Top" role="button"><i className="icon-angle-up"></i></Link>
            </div>

        </div>
         
    )
}

export default MobileMenu
