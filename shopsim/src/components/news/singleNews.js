import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function SingleNews(props) {
    const { data, loading } = props;
    
    

    const formatDate = (date) => {
        if(date !== undefined){
            let ab = date.split("T")
            let bc = ab[0].split("-")
            return `${bc[2]}-${bc[1]}-${bc[0]}`
        }
        
    }
    const formatDay = (date) => {
        if(date !== undefined){
            let ab = date.split("T")
            let bc = ab[0].split("-")
            return bc[2]
        }
        
    }
    const formatMonth = (date) => {
       if(date !== undefined){
        let ab = new Date(date);
        let arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                    "Aug", "Sep", "Oct", "Nov", "Dec",];
        return arr[ab.getMonth()]
       }
        
    }

    // convert text to HTML  
    const textToHtml = (text) => {
        if(text !== undefined){
            
            let parser = new DOMParser();
            let doc = parser.parseFromString(text, 'text/html');
            return doc.body;
        }
    }

    if(loading) return (<div className="row pl-5 pr-5"><h3>Loading...</h3></div>)
    return (
            <>
                    {data.map((news)=>(
                        <article key={news.id} className="post single">
                        <div className="post-media">
                            <div className="post-slider owl-carousel owl-theme owl-loaded owl-drag">
                                <div className="owl-stage-outer">
                                    <div className="owl-item">
                                        <img src={`${process.env.REACT_APP_API_LOCAL}${news.feature_img}`} alt="Post" />
                                    </div>
                                </div>
                            </div>{/* End .post-slider */}
                        </div>{/* End .post-media */}
                        <div className="post-body">
                            <div className="post-date">
                            <span className="day">{formatDay(news.publish_at)}</span>
                                <span className="month">{formatMonth(news.publish_at)}</span>
                            </div>{/* End .post-date */}
                            <h2 className="post-title">
                                {news.title}
                    </h2>
                            <div className="post-meta">
                                <span><i className="icon-calendar" />{formatDate(news.publish_at)}</span>
                                <span><i className="icon-user" />Tác giả <Link to="#">{news.author.username}</Link></span>
                                <span><i className="icon-folder-open" />
                                <Link to="#">{news.categories.name}</Link>
                                </span>
                            </div>{/* End .post-meta */}
                            <div className="post-content">
                                {news.description}
                            </div>{/* End .post-content */}
                            <div className="post-share">
                                <h3>
                                    <i className="icon-forward" />
                        Share this post
                    </h3>
                                <div className="social-icons">
                                    <Link to="#" className="social-icon social-facebook" target="_blank" title="Facebook">
                                        <i className="icon-facebook" />
                                    </Link>
                                    <Link to="#" className="social-icon social-twitter" target="_blank" title="Twitter">
                                        <i className="icon-twitter" />
                                    </Link>
                                    <Link to="#" className="social-icon social-linkedin" target="_blank" title="Linkedin">
                                        <i className="fab fa-linkedin-in" />
                                    </Link>
                                    <Link to="#" className="social-icon social-gplus" target="_blank" title="Google +">
                                        <i className="fab fa-google-plus-g" />
                                    </Link>
                                    <Link to="#" className="social-icon social-mail" target="_blank" title="Email">
                                        <i className="icon-mail-alt" />
                                    </Link>
                                </div>{/* End .social-icons */}
                            </div>{/* End .post-share */}
                            <div className="post-author">
                                <h3><i className="icon-user" />Tác giả</h3>
                                <figure>
                                    <Link to="#">
                                        <img src="assets/images/blog/author.jpg" alt="author" />
                                    </Link>
                                </figure>
                                <div className="author-content">
                                    <h4><Link to="#">{news.author.username}</Link></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab officia culpa corporis, quidem placeat minima unde vel veniam laboriosam et animi, inventore delectus, officiis doloribus ex amet illum ea suscipit!</p>
                                </div>{/* End .author.content */}
                            </div>{/* End .post-author */}
                            <div className="comment-respond">
                                <h3>Để lại bình luận</h3>
                                <p>Địa chỉ email của bạn sẽ được bảo mật. Các trường bắt buộc có dấu *</p>
                                <form action="#">
                                    <div className="form-group required-field">
                                        <label>Bình luận</label>
                                        <textarea cols={30} rows={1} className="form-control" required defaultValue={""} />
                                    </div>{/* End .form-group */}
                                    <div className="form-group required-field">
                                        <label>Tên</label>
                                        <input type="text" className="form-control" required />
                                    </div>{/* End .form-group */}
                                    <div className="form-group required-field">
                                        <label>Email</label>
                                        <input type="email" className="form-control" required />
                                    </div>{/* End .form-group */}
                                    <div className="form-group">
                                        <label>Website</label>
                                        <input type="url" className="form-control" />
                                    </div>{/* End .form-group */}
                                    
                                    <div className="form-footer">
                                        <button type="submit" className="btn btn-primary">Gứi bình luận</button>
                                    </div>{/* End .form-footer */}
                                </form>
                            </div>{/* End .comment-respond */}
                        </div>{/* End .post-body */}
                    </article>
                    ))}
               </>
       
    )
}
SingleNews.propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool,
  }
SingleNews.defaultProps = {
    data: [],
    loading: true,
  }


export default SingleNews

