import React, {useState, useEffect} from 'react'
import {useParams,} from 'react-router-dom'
import axios from 'axios'
import Products from '../../components/products/products'
import Pagination from '../../components/products/pagination'

function SortProducts() {
    const {textsort} = useParams();
    
    const [simCard, setSimCard] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageParams, setPageParams] = useState('')
    const [pagination, setPagination] = useState({
        total: null,
        page_size: null,
        page: null
    })

    useEffect(()=>{
        document.getElementById('HEADER').scrollIntoView();
        const fetchSimCard = async () => {
            try {
            setLoading(true)
            const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/product/sort/${textsort}${pageParams}`)
            if(res.data.page !== 1){
                setPageParams(`?page=${res.data.page}`)
              }
              setPagination({
                total: res.data.total,
                page_size: res.data.page_size,
                page: res.data.page
            })
            setSimCard(res.data.results)
            setLoading(false)   
            } catch (error) {
                console.log(error.message);
            }              
        }
        fetchSimCard()
    },[textsort, pageParams])

    const handlePageChange = (newPage) => {
        if (newPage === 1){
            setPageParams('')
        } else { setPageParams(`?page=${newPage}`)}
    }

    return (
        <>
            <Products data={simCard} loading={loading}/>
            <Pagination pagination={pagination} onPageChange={handlePageChange}/>
        </>
    )
}

export default SortProducts
