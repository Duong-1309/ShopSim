import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

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
    const [defaultSortChecked, setDefaultChecked] = useState('0') //sort
    const [defaultValueSearch, setDefaultValueSearch] = useState('')

    console.log("props of listProduct Admin",props);

    useEffect(()=>{
        const fetch = async () => {
            setLoading(true)
            const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/product${pageParams}`,{
                headers: {
                    "Authorization": `Token ${props.token}`
                }
            })
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

    const handleSortChange = (valueSort) => {
        if (valueSort === '0') return;
        try {
            const fetch = async () => {
                setLoading(true)
                const resSort = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/product/sort/${valueSort}${pageParams}`)
                if (resSort.data.page !== 1) setPageParams(`?page=${resSort.data.page}`)
                setPagination({
                    total: resSort.data.total,
                    page_size: resSort.data.page_size,
                    page: resSort.data.page
                })
                setSimCard(resSort.data.results)
                setDefaultChecked(valueSort)
                setLoading(false)
            }
           fetch()
        } catch (error) {
            console.log(error.message);
        }
        
    }

    const handleSearchChange = (valueSearch) => {
        try {
            const fetch = async () => {
                setLoading(true)
                const resSearch = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/product/search/${valueSearch}`)
                setSimCard(resSearch.data)
                setDefaultValueSearch(valueSearch)
                setLoading(false)
            }
            fetch()
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="ml-4 mr-4">
            <List data={simCard} loading={loading} >
                <div className="col-7">
                    <Sort onSortChange={handleSortChange} defaultSortChecked={defaultSortChecked}/>
                </div>
                <div className="col-5">
                    <Search onSearch={handleSearchChange} defaultValueSearch={defaultValueSearch} />
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

