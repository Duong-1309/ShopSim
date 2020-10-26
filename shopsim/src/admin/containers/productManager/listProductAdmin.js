import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Pagination from '../../../components/products/pagination'
import List from '../../components/products/list'
import Sort from '../../components/products/sort'
import Search from '../../components/products/search'

import {connect} from 'react-redux'


function ListProductAdmin(props) {
    const [simCard, setSimCard] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageParams, setPageParams] = useState('')
    const [pagination, setPagination] = useState({
        total: null,
        page: null,
        page_size: null
    })
    const [loadDelete, setLoadDelete] = useState(false)

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
    }, [pageParams, loadDelete])

    const handlePageChange = (newPage) => {
        if (newPage === 1) {
            setPageParams('')
        } else {
            setPageParams(`?page=${newPage}`)
        }
    }

    const handleLoadDelete = () => {
        // refresh page then del SIM
        setLoadDelete(!loadDelete)
    }

    return (
        <div className="ml-4 mr-4">
            <List data={simCard} loading={loading} onChangeLoad={handleLoadDelete} >
                <div className="col-7">
                    <Sort />
                </div>
                <div className="col-5">
                    <Search />
                </div>
            </List>
            <Pagination pagination={pagination} onPageChange={handlePageChange}/>        
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps, null)(ListProductAdmin)

