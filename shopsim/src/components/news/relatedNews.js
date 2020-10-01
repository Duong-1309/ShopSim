import React from 'react'
import {Link} from 'react-router-dom'
import { Tabs } from 'antd';

function RelatedNews(props) {
    const { TabPane } = Tabs;
    function callback(key) {
    console.log(key);
    }

    const {data} = props;
    console.log(data);
    var tempArray = [];
    if(data !== []){
        for(let index = 0; index <= data.length; index += 3){
            let myArr = data.slice(index, index+3);
            tempArray.push(myArr)
        }
    }

    const formatDay = (date) => {
        if(date !== undefined){
            console.log(date);
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

    return (
        <div className="related-posts">
                <h4 className="light-title">Bài viết <strong>Liên quan</strong></h4>
                
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Trang 1" key="1">
                    
                        <div className="container">
                        <div className="row">
                        {tempArray[0] !== undefined && tempArray[0].map((news)=>(
                            <div key={news.id} className="col-4 border-right p-3 pb-5" style={{height: 400}}>
                                <article className="post">
                                    <div className="post-media">
                                    <Link to={`/chuyen-muc/${news.categories.slug}/${news.slug}`}>
                                            <img src={`${process.env.REACT_APP_API_LOCAL}${news.feature_img}`} alt="Post" />
                                    </Link>
                                    </div>
                                    <div className="post-body">
                                        <div className="post-date">
                                            <span className="day">{formatDay(news.publish_at)}</span>
                                            <span className="month">{formatMonth(news.publish_at)}</span>
                                        </div>
                                        <h2 className="post-title">
                                            <Link to={`/chuyen-muc/${news.categories.slug}/${news.slug}`}>{news.title}</Link>
                                        </h2>
                                        <div className="post-content">
                                            <p>{news.short_description}</p>
                                            <Link to={`/chuyen-muc/${news.categories.slug}/${news.slug}`} 
                                            className="read-more">Xem thêm... <i className="icon-angle-double-right" /></Link>
                                        </div> 
                                    </div> 
                                </article>
                            </div>
                        ))}
                        </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Trang 2" key="2">
                    <div className="container">
                        <div className="row">
                        {tempArray[1] !== undefined && tempArray[1].map((news)=>(
                            <div key={news.id} className="col-4 border-right p-3" style={{height: 400}}>
                                <article className="post">
                                    <div className="post-media">
                                    <Link to={`/chuyen-muc/${news.categories.slug}/${news.slug}`}>
                                            <img src={`${process.env.REACT_APP_API_LOCAL}${news.feature_img}`} alt="Post" />
                                    </Link>
                                    </div>
                                    <div className="post-body">
                                        <div className="post-date">
                                            <span className="day">23</span>
                                            <span className="month">Mar</span>
                                        </div>
                                        <h2 className="post-title">
                                            <Link to={`/chuyen-muc/${news.categories.slug}/${news.slug}`}>{news.title}</Link>
                                        </h2>
                                        <div className="post-content">
                                            <p>{news.short_description}</p>
                                            <Link to={`/chuyen-muc/${news.categories.slug}/${news.slug}`} 
                                            className="read-more">Xem thêm... <i className="icon-angle-double-right" /></Link>
                                        </div> 
                                    </div> 
                                </article>
                            </div>
                        ))}
                        </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Trang 3" key="3">
                    <div className="container">
                        <div className="row">
                        {tempArray[2] !== undefined && tempArray[2].map((news)=>(
                            <div key={news.id} className="col-4 border-right p-3" style={{height: 400}}>
                                <article className="post">
                                    <div className="post-media">
                                    <Link to={`/chuyen-muc/${news.categories.slug}/${news.slug}`}>
                                            <img src={`${process.env.REACT_APP_API_LOCAL}${news.feature_img}`} alt="Post" />
                                    </Link>
                                    </div>
                                    <div className="post-body">
                                        <div className="post-date">
                                            <span className="day">23</span>
                                            <span className="month">Mar</span>
                                        </div>
                                        <h2 className="post-title">
                                            <Link to={`/chuyen-muc/${news.categories.slug}/${news.slug}`}>{news.title}</Link>
                                        </h2>
                                        <div className="post-content">
                                            <p>{news.short_description}</p>
                                            <Link to={`/chuyen-muc/${news.categories.slug}/${news.slug}`} 
                                            className="read-more">Xem thêm... <i className="icon-angle-double-right" /></Link>
                                        </div> 
                                    </div> 
                                </article>
                            </div>
                        ))}
                        </div>
                        </div>
                    </TabPane>
                </Tabs> 
            </div>
    )
}


 
export default RelatedNews

