import React, {useState, useEffect} from 'react'
import {useParams, useLocation, useHistory} from 'react-router-dom'
import axios from 'axios'
import Products from '../components/products/products'

function SortProducts() {
    const {textsort} = useParams();
    
    const [simCard, setSimCard] = useState([]);
    const [loading, setLoading] = useState(false);

    let location = useLocation()
    let history = useHistory();
    console.log(location);
    console.log('history',history);
    useEffect(()=>{
        const fetchSimCard = async () => {
            try {
            setLoading(true)
            const res = await axios.get(`http://127.0.0.1:8000/api/product/sort/${textsort}`)
            setSimCard(res.data)
            setLoading(false)   
            } catch (error) {
                console.log(error.message);
            }              
        }
        fetchSimCard()
    },[location])
    return (
        <Products data={simCard} loading={loading}/>
    )
}

export default SortProducts
