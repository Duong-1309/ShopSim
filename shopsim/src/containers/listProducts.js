import React, {useState, useEffect} from 'react'
import Product from '../components/products/products'
import axios from 'axios'

function ListProducts() {
  const [simCard, setSimCard] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const fetchSimCard = async () => {
      setLoading(true)
      const res = await axios.get('http://127.0.0.1:8000/api/product')
      setSimCard(res.data)
      setLoading(false)
    };
    fetchSimCard()
  }, [])

  return (
    <Product data={simCard} loading={loading}/>
  )
}

export default ListProducts
