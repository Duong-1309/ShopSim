import React from 'react'

function SidebarNews(props) {
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
            <h4 className="widget-title">Blog Categories</h4>
            <ul className="list">
                <li><a href="#">All about clothing</a></li>
                <li><a href="#">Make-up &amp; beauty</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Fashion trends</a></li>
                <li><a href="#">Haircuts &amp; hairstyles</a></li>
            </ul>
            </div>{/* End .widget */}
            <div className="widget">
            <h4 className="widget-title">Recent Posts</h4>
            <ul className="simple-post-list">
                <li>
                <div className="post-media">
                    <a href="#">
                    <img src="assets/images/blog/widget/post-1.jpg" alt="Post" />
                    </a>
                </div>{/* End .post-media */}
                <div className="post-info">
                    <a href="single.html">Post Format - Video</a>
                    <div className="post-meta">
                    April 08, 2018
                    </div>{/* End .post-meta */}
                </div>{/* End .post-info */}
                </li>
                <li>
                <div className="post-media">
                    <a href="single.html">
                    <img src="assets/images/blog/widget/post-2.jpg" alt="Post" />
                    </a>
                </div>{/* End .post-media */}
                <div className="post-info">
                    <a href="single.html">Post Format - Image</a>
                    <div className="post-meta">
                    March 23, 2016
                    </div>{/* End .post-meta */}
                </div>{/* End .post-info */}
                </li>
            </ul>
            </div>{/* End .widget */}
            <div className="widget">
            <h4 className="widget-title">Tagcloud</h4>
            <div className="tagcloud">
                <a href="#">Fashion</a>
                <a href="#">Shoes</a>
                <a href="#">Skirts</a>
                <a href="#">Dresses</a>
                <a href="#">Bags</a>
            </div>{/* End .tagcloud */}
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

