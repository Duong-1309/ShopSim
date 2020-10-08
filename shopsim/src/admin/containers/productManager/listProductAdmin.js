import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Pagination from '../../../components/products/pagination'
import List from '../../components/products/List'

function ListProductAdmin() {
    const [simCard, setSimCard] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageParams, setPageParams] = useState('')
    const [pagination, setPagination] = useState({
        total: null,
        page: null,
        page_size: null
    })

    useEffect(()=>{
        const fetch = async () => {
            setLoading(true)
            const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/product${pageParams}`)
            if(res.data.page !== 1) setPageParams(`?page=${res.data.page}`)
            setPagination({
                total: res.data.total,
                page: res.data.page,
                page_size: res.data.page_size
            })
            setSimCard(res.data.results)
            setLoading(false)
        }
        fetch()
    }, [pageParams])

    const handlePageChange = (newPage) => {
        if (newPage === 1) {
            setPageParams('')
        } else {
            setPageParams(`?page=${newPage}`)
        }
    }

    return (
        <>
            <List data={simCard} loading={loading}>
                <Pagination pagination={pagination} onPageChange={handlePageChange}/>        
            </List>
        </>
    )
}

ListProductAdmin.propTypes = {

}

export default ListProductAdmin

