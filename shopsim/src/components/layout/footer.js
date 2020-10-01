import React from 'react'
import { BackTop } from 'antd'


const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};
function Footer() {
    return (
        <>
        <BackTop>
          <div style={style}>fghjkl</div>
        </BackTop>
       <footer className="footer bg-dark">
        <div className="footer-middle">
            <div className="container">
            <div className="footer-ribbon bg-primary text-white ls-10">
                Get in touch
            </div>{/* End .footer-ribbon */}
            <div className="row">
                <div className="col-lg-3 col-md-4">
                <div className="widget">
                    <h4 className="widget-title">Contact Info</h4>
                    <ul className="contact-info">
                    <li>
                        <span className="contact-info-label">Address</span>123 Street Name, City, England
                    </li>
                    <li>
                        <span className="contact-info-label">Phone</span>Toll Free <a href="tel:">(123) 456-7890</a>
                    </li>
                    <li>
                        <span className="contact-info-label">Email</span> <a href="mailto:mail@example.com">mail@example.com</a>
                    </li>
                    <li>
                        <span className="contact-info-label">Working Days/Hours</span>
                        Mon - Sun / 9:00AM - 8:00 PM
                    </li>
                    </ul>
                    <div className="social-icons">
                    <a href="#" className="social-icon social-instagram icon-instagram" target="_blank" title="Instagram" />
                    <a href="#" className="social-icon social-twitter icon-twitter" target="_blank" title="Twitter" />
                    <a href="#" className="social-icon social-facebook icon-facebook" target="_blank" title="Facebook" />
                    </div>{/* End .social-icons */}
                </div>{/* End .widget */}
                </div>{/* End .col-lg-3 */}
                <div className="col-lg-9 col-md-8">
                <div className="widget widget-newsletter">
                    <h4 className="widget-title">Subscribe newsletter</h4>
                    <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <p>Get all the latest information on Events, Sales and Offers. Sign up for newsletter today</p>
                    </div>{/* End .col-lg-6 */}
                    <div className="col-lg-6 col-md-12">
                        <form action="#" className="d-flex mb-0 w-100">
                        <input type="email" className="form-control mb-0" placeholder="Email address" required />
                        <input type="submit" className="btn btn-primary shadow-none" defaultValue="Subscribe" />
                        </form>
                    </div>{/* End .col-lg-6 */}
                    </div>{/* End .row */}
                </div>{/* End .widget */}
                <div className="row">
                    <div className="col-sm-6">
                    <div className="widget">
                        <h4 className="widget-title">Customer Service</h4>
                        <ul className="links link-parts row mb-0">
                        <div className="link-part col-lg-6 col-md-12">
                            <li><a href="#">Help &amp; FAQs</a></li>
                            <li><a href="#">Order Tracking</a></li>
                            <li><a href="#">Shipping &amp; Delivery</a></li>
                        </div>
                        <div className="link-part col-lg-6 col-md-12">
                            <li><a href="#">Orders History</a></li>
                            <li><a href="#">Advanced Search</a></li>
                            <li><a href="#" className="login-link">Login</a></li>
                        </div>
                        </ul>
                    </div>{/* End .widget */}
                    </div>{/* End .col-sm-6 */}
                    <div className="col-sm-6">
                    <div className="widget">
                        <h4 className="widget-title">About Us</h4>
                        <ul className="links link-parts row mb-0">
                        <div className="link-part col-lg-6 col-md-12">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="#">Corporate Sales</a></li>
                            <li><a href="#">Careers</a></li>
                        </div>
                        <div className="link-part col-lg-6 col-md-12">
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Investor Relations</a></li>
                        </div>
                        </ul>
                    </div>{/* End .widget */}
                    </div>{/* End .col-sm-6 */}
                </div>{/* End .row */}
                </div>{/* End .col-lg-9 */}
            </div>{/* End .row */}
            </div>{/* End .container */}
        </div>{/* End .footer-middle */}
        <div className="container">
            <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
            <p className="footer-copyright py-3 pr-4 mb-0">© Porto eCommerce. 2020. All Rights Reserved</p>
            <img src="assets/images/payments.png" alt="payment methods" className="footer-payments py-3" />
            </div>{/* End .footer-bottom */}
        </div>{/* End .container */}
        
        </footer>
        </>
    )
}

export default Footer
