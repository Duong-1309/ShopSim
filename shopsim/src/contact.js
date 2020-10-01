import React from 'react'

function Contact(props) {
    return (
      <main className="main">
  <nav aria-label="breadcrumb" className="breadcrumb-nav">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index-2.html"><i className="icon-home" /></a></li>
        <li className="breadcrumb-item active" aria-current="page">LIÊN HỆ VỚI CHÚNG TÔI</li>
      </ol>
    </div>{/* End .container */}
  </nav>
  <div className="container">
    <div id="map" />{/* End #map */}
    <div className="row">
      <div className="col-md-8">
        <h2 className="light-title">Ý kiến <strong>góp ý</strong></h2>
        <form action="#">
          <div className="form-group required-field">
            <label htmlFor="contact-name">Tên</label>
            <input type="text" className="form-control" id="contact-name" name="contact-name" required />
          </div>{/* End .form-group */}
          <div className="form-group required-field">
            <label htmlFor="contact-email">Email</label>
            <input type="email" className="form-control" id="contact-email" name="contact-email" required />
          </div>{/* End .form-group */}
          <div className="form-group">
            <label htmlFor="contact-phone">Số điện thoại</label>
            <input type="tel" className="form-control" id="contact-phone" name="contact-phone" />
          </div>{/* End .form-group */}
          <div className="form-group required-field">
            <label htmlFor="contact-message">Bạn ngĩ gì vậy?</label>
            <textarea cols={30} rows={1} id="contact-message" className="form-control" name="contact-message" required defaultValue={""} />
          </div>{/* End .form-group */}
          <div className="form-footer">
            <button type="submit" className="btn btn-primary">Gửi</button>
          </div>{/* End .form-footer */}
        </form>
      </div>{/* End .col-md-8 */}
      <div className="col-md-4">
        <h2 className="light-title">Thông tin <strong>liên hệ</strong></h2>
        <div className="contact-info">
          <div>
            <i className="icon-phone" />
            <p><a href="tel:">0201 203 2032</a></p>
            <p><a href="tel:">0201 203 2032</a></p>
          </div>
          <div>
            <i className="icon-mobile" />
            <p><a href="tel:">201-123-3922</a></p>
            <p><a href="tel:">302-123-3928</a></p>
          </div>
          <div>
            <i className="icon-mail-alt" />
            <p><a href="mailto:#">porto@gmail.com</a></p>
            <p><a href="mailto:#">porto@portotemplate.com</a></p>
          </div>
          <div>
            <i className="icon-skype" />
            <p>porto_skype</p>
            <p>porto_template</p>
          </div>
        </div>{/* End .contact-info */}
      </div>{/* End .col-md-4 */}
    </div>{/* End .row */}
  </div>{/* End .container */}
  <div className="mb-8" />{/* margin */}
</main>

    )
}


export default Contact

