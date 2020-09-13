import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ListProducts from './containers/listProducts'

const BaseRouter = () => (
        <Switch>
            <Route exact path='/' component={ListProducts} />
        </Switch>
);
export default BaseRouter;