import React from 'react'
import {matchPath, Route, Switch} from 'react-router-dom'
import ListProducts from './containers/listProducts'
import SortProducts from './containers/sortProducts'

const BaseRouter = () => (
        <Switch>
            <Route exact path='/' component={ListProducts}  />
            <Route exact path='/gia-tu/:textsort' component={SortProducts} main={matchPath} />
        </Switch>
);
export default BaseRouter;