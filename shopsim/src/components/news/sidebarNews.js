import React, {useState, useEffect} from 'react'
import axios from 'axios'

function SidebarNews(props) {
    const [listCategoriesNews, setListCategoriesNews] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/category-news`)
            setListCategoriesNews(res.data)
        }
        fetch()
    }, [])
    console.log("list///", listCategoriesNews);

    return (
       <aside className="sidebar col-lg-3">
        <div className="sidebar-wrapper">
            <div className="widget widget-search">
            <form role="search" method="get" className="search-form" action="#">
                <input type="search" className="form-control" placeholder="Search posts here..." name="s" required />
                <button type="submit" className="search-submit" title="Search">
                <i className="icon-search" />
                <span className="sr-only">Search</span>
                </button>
            </form>
            </div>{/* End .widget */}
            <div className="widget widget-categories">
            <h4 className="widget-title">Chuyên mục bài viết</h4>
            <ul className="list">
            {listCategoriesNews.map((category)=>(
                <li key={category.id}><a href="#">{category.name}</a></li>
            ))}
            </ul>
                
               
           
            </div>{/* End .widget */}
           
            <div className="widget">
            <h4 className="widget-title">Archive</h4>
            <ul className="list">
                <li><a href="#">April 2018</a></li>
                <li><a href="#">March 2018</a></li>
                <li><a href="#">February 2018</a></li>
            </ul>
            </div>{/* End .widget */}
            <div className="widget widget_compare">
            <h4 className="widget-title">Compare Products</h4>
            <p>You have no items to compare.</p>
            </div>{/* End .widget */}
        </div>{/* End .sidebar-wrapper */}
        </aside>

    )
}



export default SidebarNews

