import React, {useState, useEffect} from 'react'
import List from '../../components/products/list'
import Search from '../../components/products/search'
import Sort from '../../components/products/sort'
import Pagination from '../../../components/products/pagination'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function SortProductAdmin(props) {

    const {valueSort} = useParams()
    const [simCard, setSimCard] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageParams, setPageParams] = useState('')
    const [pagination, setPagination] = useState({
        total: null,
        page: null,
        page_size: null
    })
    const [defaultSortChecked, setDefaultChecked] = useState('0') //sort

    useEffect(()=>{
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
    }, [valueSort, pageParams])

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
                <Sort defaultSortChecked={defaultSortChecked}/>
            </div>
            <div className="col-5">
                <Search />
            </div>
        </List>
        <Pagination pagination={pagination} onPageChange={handlePageChange}/>        
        
    </div>
    )
}


export default SortProductAdmin

