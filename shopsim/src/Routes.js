import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ListProducts from './containers/listProducts'
import SortProducts from './containers/sortProducts'
import SearchProduct from './containers/searchProduct'

const BaseRouter = () => (
        <Switch>
            <Route exact path='/' component={ListProducts}  />
            <Route exact path='/sort/:textsort' component={SortProducts} />
            <Route exact path='/search/tim-sim' component={SearchProduct}/>
        </Switch>
);
export default BaseRouter;