import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import ListNews from '../../components/news/listNews'
import axios from 'axios'

function DataListNews() {

    const [listNews, setListNews] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/news`)
            setListNews(res.data)
            setLoading(false)
            document.getElementById('HEADER').scrollIntoView();
        }
        fetchData();
    }, [])
    return (
        <ListNews listNews={listNews} loading={loading} />
        )
}

export default DataListNews

