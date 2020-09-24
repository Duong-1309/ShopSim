import React,{useState, useEffect} from 'react'
import Products from '../components/products/products'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function SearchProduct() {

    const {textsearch} = useParams();
    console.log(textsearch);
    const [simCard, setSimCard] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchSimCard = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`http://127.0.0.1:8000/api/product/search/${textsearch}`)
                setSimCard(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchSimCard()
    },[textsearch])

    return (
        <Products data={simCard} loading={loading}/>
    )
}


export default SearchProduct

