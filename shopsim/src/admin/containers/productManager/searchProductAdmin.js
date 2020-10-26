import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import List from '../../components/products/list'
import Search from '../../components/products/search'
import Sort from '../../components/products/sort'
import Pagination from '../../../components/products/pagination'

function SearchProductAdmin() {

    const {valueSearch} = useParams()

    const [simCard, setSimCard] = useState([])
    const [loading, setLoading] = useState(false)
    const [defaultValueSearch, setDefaultValueSearch] = useState('')
    const [pageParams, setPageParams] = useState('')
    const [pagination, setPagination] = useState({
        total: null,
        page: null,
        page_size: null
    })

    useEffect(()=>{
        try {
            const fetch = async () => {
                setLoading(true)
                const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/product/search/${valueSearch}${pageParams}`)
                if(res.data.page !== 1) setPageParams(`?page=${res.data.page}`)
                setPagination({
                    total: res.data.total,
                    page: res.data.page,
                    page_size: res.data.page_size
                })
                setSimCard(res.data.results)
                setDefaultValueSearch(valueSearch)
                setLoading(false)
            }
            fetch()
        } catch (error) {
            console.log(error.message);
        }
    }, [valueSearch, pageParams])

    const handlePageChange = (newPage) => {
        if (newPage === 1) {
            setPageParams('')
        } else {
            setPageParams(`?page=${newPage}`)
        }
    }

    return (
        <div className="ml-4 mr-4">
            <List data={simCard} loading={loading} >
                <div className="col-7">
                    <Sort />
                </div>
                <div className="col-5">
                    <Search defaultValueSearch={defaultValueSearch} />
                </div>
            </List>
            <Pagination pagination={pagination} onPageChange={handlePageChange}/>              
        </div>
    )
}

export default SearchProductAdmin

