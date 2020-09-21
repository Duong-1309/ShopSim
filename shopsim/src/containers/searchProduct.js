import React,{useState, useEffect} from 'react'
import Products from '../components/products/products'

function SearchProduct(props) {
    const [simCard, setSimCard] = useState([]);
    const [loading, setLoading] = useState(true);


    const handleSubmitTextSearch = (textSearch) => {
        console.log(textSearch);
    }

    return (
        <Products data={simCard} loading={loading} onSubmit={handleSubmitTextSearch}/>
    )
}


export default SearchProduct

