import React, {useState, useEffect} from 'react'
import SingleProduct from '../../components/products/singleProduct'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function DetailProduct (props) {

    const [sim, setSim] = useState({});
    const {idsim} = useParams();
    useEffect(() => {
        const fetchSim = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_LOCAL}/api/product/${idsim}`)
            setSim(res.data)
            document.getElementById('HEADER').scrollIntoView();
        }
        fetchSim();
    }, [idsim])
    return (
       <SingleProduct data={sim}/>
    )
}



export default DetailProduct

