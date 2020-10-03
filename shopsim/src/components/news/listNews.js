import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import SidebarNews from './sidebarNews';

function ListNews(props) {
    const {listNews, loading} = props;

    if (loading) return (<div className="row pl-5 pr-5"><h3>Loading...</h3></div>)
    
    const formatDate = (date) => {
        let ab = date.split("T")
        let bc = ab[0].split("-")
        return `${bc[2]}-${bc[1]}-${bc[0]}`
    }
    const formatDay = (date) => {
        let ab = date.split("T")
        let bc = ab[0].split("-")
        return bc[2]
    }
    const formatMonth = (date) => {
       
        let ab = new Date(date);
            let arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                        "Aug", "Sep", "Oct", "Nov", "Dec",];
            return arr[ab.getMonth()]
    }
    console.log(listNews);
    return (
        <main className="main">
			<nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#"><i className="icon-home" /></a></li>
                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                    </ol>
                </div>{/* End .container */}
            </nav>


			<div className="container">
                <div className="row">
                    <div className="col-lg-9">
                    <h2 className="post-title pb-3">Danh sách bài viết</h2>
                    {listNews.map((news)=> (
                        <article key={news.id} className="post">
                        <div className="post-media">
                            <Link to={`/chuyen-muc/${news.categories.slug}/${news.slug}`}>
                            <img src={news.feature_img} alt="Post" />
                            </Link>
                        </div>{/* End .post-media */}
                        <div className="post-body">
                            <div className="post-date">
                            <span className="day">{formatDay(news.publish_at)}</span>
                            <span className="month">{formatMonth(news.publish_at)}</span>
                            </div>{/* End .post-date */}
                            <h2 className="post-title">
                            <Link to={`/chuyen-muc/${news.categories.slug}/${news.slug}`}>{news.title}</Link>
                            </h2>
                            <div className="post-content">
                                <p>{news.short_description}</p>
                            <Link to={`/chuyen-muc/${news.categories.slug}/${news.slug}`} 
                            className="read-more">Đọc thêm <i className="icon-angle-double-right" /></Link>
                            </div>{/* End .post-content */}
                            <div className="post-meta">
                            <span><i className="icon-calendar" />{formatDate(news.publish_at)}</span>
                            <span><i className="icon-user" />Tác giả <a href="#">{news.author.username}</a></span>
                            <span><i className="icon-folder-open" />
                                <a href="#">{news.categories.name}</a>
                            </span>
                            </div>{/* End .post-meta */}
                        </div>{/* End .post-body */}
                    </article>

                    ))}
                    
                    </div>
                    <SidebarNews />
                </div>
            </div>  
        </main>
    )
}

ListNews.propTypes = {
    listNews: PropTypes.array,
    loading: PropTypes.bool,
}
ListNews.defaultProps = {
    listNews: [],
    loading: true,
}

export default ListNews

