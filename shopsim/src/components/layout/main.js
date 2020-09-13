import React from 'react'
import LeftSidebar from './leftSidebar'
import RightSidebar from './rightSidebar'

function Main({children}) {
    return (
       <main className="main">
  <div className="container mt-2">
    <div className="row">
        <LeftSidebar/>
        {children}
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
  <div className="mb-4" />{/* margin */}
  <div className="products-section section-bg-gray">
    <div className="container">
      <h2 className="section-title">Featured Products</h2>
      <div className="products-slider owl-carousel owl-theme dots-top">
        <div className="product-default inner-quickview inner-icon">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/product-21.jpg" />
            </a>
            <div className="label-group">
              <div className="product-label label-hot">HOT</div>
              <div className="product-label label-sale">27% Off</div>
            </div>
            <div className="btn-icon-group">
              <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
            </div>
            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">category</a>
              </div>
              <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
            </div>
            <h3 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h3>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                <span className="tooltiptext tooltip-top" />
              </div>{/* End .product-ratings */}
            </div>{/* End .product-container */}
            <div className="price-box">
              <span className="old-price">$59.00</span>
              <span className="product-price">$49.00</span>
            </div>{/* End .price-box */}
          </div>{/* End .product-details */}
        </div>
        <div className="product-default inner-quickview inner-icon">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/product-22.jpg" />
            </a>
            <div className="label-group">
              <div className="product-label label-hot">HOT</div>
            </div>
            <div className="btn-icon-group">
              <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
            </div>
            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">category</a>
              </div>
              <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
            </div>
            <h3 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h3>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                <span className="tooltiptext tooltip-top" />
              </div>{/* End .product-ratings */}
            </div>{/* End .product-container */}
            <div className="price-box">
              <span className="old-price">$59.00</span>
              <span className="product-price">$49.00</span>
            </div>{/* End .price-box */}
          </div>{/* End .product-details */}
        </div>
        <div className="product-default inner-quickview inner-icon">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/product-23.jpg" />
            </a>
            <div className="label-group">
              <div className="product-label label-hot">HOT</div>
              <div className="product-label label-sale">20% Off</div>
            </div>
            <div className="btn-icon-group">
              <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
            </div>
            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">category</a>
              </div>
              <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
            </div>
            <h3 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h3>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                <span className="tooltiptext tooltip-top" />
              </div>{/* End .product-ratings */}
            </div>{/* End .product-container */}
            <div className="price-box">
              <span className="old-price">$59.00</span>
              <span className="product-price">$49.00</span>
            </div>{/* End .price-box */}
          </div>{/* End .product-details */}
        </div>
        <div className="product-default inner-quickview inner-icon">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/product-24.jpg" />
            </a>
            <div className="label-group">
              <div className="product-label label-hot">HOT</div>
            </div>
            <div className="btn-icon-group">
              <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
            </div>
            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">category</a>
              </div>
              <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
            </div>
            <h3 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h3>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                <span className="tooltiptext tooltip-top" />
              </div>{/* End .product-ratings */}
            </div>{/* End .product-container */}
            <div className="price-box">
              <span className="old-price">$59.00</span>
              <span className="product-price">$49.00</span>
            </div>{/* End .price-box */}
          </div>{/* End .product-details */}
        </div>
        <div className="product-default inner-quickview inner-icon">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/product-21.jpg" />
            </a>
            <div className="label-group">
              <div className="product-label label-hot">HOT</div>
              <div className="product-label label-sale">27% Off</div>
            </div>
            <div className="btn-icon-group">
              <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
            </div>
            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">category</a>
              </div>
              <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
            </div>
            <h3 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h3>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                <span className="tooltiptext tooltip-top" />
              </div>{/* End .product-ratings */}
            </div>{/* End .product-container */}
            <div className="price-box">
              <span className="old-price">$59.00</span>
              <span className="product-price">$49.00</span>
            </div>{/* End .price-box */}
          </div>{/* End .product-details */}
        </div>
        <div className="product-default inner-quickview inner-icon">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/product-22.jpg" />
            </a>
            <div className="label-group">
              <div className="product-label label-hot">HOT</div>
            </div>
            <div className="btn-icon-group">
              <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-shopping-cart" /></button>
            </div>
            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">category</a>
              </div>
              <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
            </div>
            <h3 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h3>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{width: '100%'}} />{/* End .ratings */}
                <span className="tooltiptext tooltip-top" />
              </div>{/* End .product-ratings */}
            </div>{/* End .product-container */}
            <div className="price-box">
              <span className="old-price">$59.00</span>
              <span className="product-price">$49.00</span>
            </div>{/* End .price-box */}
          </div>{/* End .product-details */}
        </div>
      </div>
    </div>
  </div>
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
