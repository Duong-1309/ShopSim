import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SingleNews from '../../components/news/singleNews'
import { useParams } from 'react-router-dom'
import RelatedNews from '../../components/news/relatedNews'
import SidebarNews from '../../components/news/sidebarNews'

function DataSingleNews() {
    const [singleNews, setSingleNews] = useState([])
    const [newsByCategory, setNewsByCategory] = useState([])
    const [loading, setLoading] = useState(false)
    const {slugNews} = useParams();
    const {slugCategory} = useParams();
    
    useEffect(()=>{
        const fetchNews = async () => {
            setLoading(true)
            const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/news/${slugNews}`)
            setSingleNews([res.data])
            setLoading(false)
            document.getElementById('HEADER').scrollIntoView();
        }
        fetchNews()
        const fetchNewsByCategory = async () =>{
            const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/list-new-by-category/${slugCategory}`)
            setNewsByCategory(res.data)
            }
        fetchNewsByCategory()
    },[slugNews])
   
   
    
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
                    <SingleNews data={singleNews} loading={loading}/>
                    <RelatedNews data={newsByCategory}/>
                </div>
                <SidebarNews />
        </div>
    </div>
    </main>
    )
}



export default DataSingleNews

