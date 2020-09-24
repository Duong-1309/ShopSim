import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ListProducts from './containers/listProducts'
import SortProducts from './containers/sortProducts'
import SearchProduct from './containers/searchProduct'
import DetailProduct from './containers/detailProduct'

const BaseRouter = () => (
        <Switch>
            <Route exact path='/' component={ListProducts}  />
            <Route exact path='/gia-tu/:textsort' component={SortProducts} />
            <Route exact path='/tim-sim/:textsearch' component={SearchProduct}/>
            <Route exact path='/chi-tiet-sim/:idsim' component={DetailProduct} />
               
        </Switch>
);
export default BaseRouter;