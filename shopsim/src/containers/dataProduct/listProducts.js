import React, {useState, useEffect} from 'react'
import Product from '../../components/products/products'
import axios from 'axios'

function ListProducts() {
  const [simCard, setSimCard] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    document.getElementById('HEADER').scrollIntoView();

    const fetchSimCard = async () => {
      setLoading(true)
      const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/product`)
      setSimCard(res.data)
      setLoading(false)
    };
    fetchSimCard()
  },[])

  return (
    <Product data={simCard} loading={loading}/>
  )
}

export default ListProducts
