import React, {useState, useEffect} from 'react'
import Product from '../../components/products/products'
import Pagination from '../../components/products/pagination'
import axios from 'axios'

function ListProducts() {
  const [simCard, setSimCard] = useState([]);
  const [loading, setLoading] = useState(false)
  const [pagePagram, setPagePagram] = useState('')
  const [pagination, setPagination] = useState({
    total: null,
    page_size: null,
    page: null,
  })

  useEffect(()=>{
    document.getElementById('HEADER').scrollIntoView();
    
    const fetchSimCard = async () => {
      setLoading(true)
      const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/product${pagePagram}`)
      if(res.data.page !== 1){
        setPagePagram(`?page=${res.data.page}`)
      }
      setPagination({
        total: res.data.total,
        page_size: res.data.page_size,
        page: res.data.page
      })
      setSimCard(res.data.results)
      setLoading(false)
    };
    fetchSimCard()
  },[pagePagram])

  const handlePageChange = (newPage) => {
    if (newPage === 1){
      setPagePagram('')
    } else { setPagePagram(`?page=${newPage}`)}
  }

  return (
    <>
      <Product data={simCard} loading={loading}/>
      <Pagination pagination={pagination} onPageChange={handlePageChange}/>
    </>
  )
}

export default ListProducts
