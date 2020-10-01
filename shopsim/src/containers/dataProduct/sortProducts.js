import React, {useState, useEffect} from 'react'
import {useParams,} from 'react-router-dom'
import axios from 'axios'
import Products from '../../components/products/products'

function SortProducts() {
    const {textsort} = useParams();
    
    const [simCard, setSimCard] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        document.getElementById('HEADER').scrollIntoView();
        const fetchSimCard = async () => {
            try {
            setLoading(true)
            const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/product/sort/${textsort}`)
            setSimCard(res.data)
            setLoading(false)   
            } catch (error) {
                console.log(error.message);
            }              
        }
        fetchSimCard()
    },[textsort])
    return (
        <Products data={simCard} loading={loading}/>
    )
}

export default SortProducts
