import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Main from './components/layout/main'

import ListProducts from './containers/dataProduct/listProducts'
import SortProducts from './containers/dataProduct/sortProducts'
import SearchProduct from './containers/dataProduct/searchProduct'
import DetailProduct from './containers/dataProduct/detailProduct'
import DataListNews from './containers/dataNews/dataListNews'
import DataSingleNews from './containers/dataNews/dataSingleNews'

const Home = ({match}) => {
    return (
        <Main >
            <Switch>
                <Route component={ListProducts}  />
                <Route  path='/sim/:textsort' component={SortProducts} />
                <Route  path='/tim-sim/:textsearch' component={SearchProduct}/>
                <Route  path='/chi-tiet-sim/:idsim' component={DetailProduct} />
                <Route  path='/chuyen-muc' component={DataListNews} />
                <Route  path='/chuyen-muc/:slugCategory/:slugNews' component={DataSingleNews}/>  
            </Switch> 
        </Main>
    )
}



export default Home

