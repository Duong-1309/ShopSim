import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ListProducts from './containers/dataProduct/listProducts'
import SortProducts from './containers/dataProduct/sortProducts'
import SearchProduct from './containers/dataProduct/searchProduct'
import DetailProduct from './containers/dataProduct/detailProduct'
import DataListNews from './containers/dataNews/dataListNews'
import DataSingleNews from './containers/dataNews/dataSingleNews'
import About from './about'
import Contact from './contact'
import NotFound from './404'
import Main from './components/layout/main'


const BaseRouter = () => (
    <Switch>
        <Route exact path="/">
            <Main>
                <ListProducts />
            </Main>
        </Route>
        <Route path='/sim/:textsort'>
            <Main>
                <SortProducts />
            </Main>
        </Route>
        <Route path='/tim-sim/:textsearch'>
            <Main>
                <SearchProduct />
            </Main>
        </Route>
        <Route path='/chi-tiet-sim/:idsim'>
            <Main>
                <DetailProduct />
            </Main>
        </Route>
        <Route exact path='/chuyen-muc'>
            <DataListNews />
        </Route>
        <Route path='/chuyen-muc/:slugCategory/:slugNews'>
                <DataSingleNews />
        </Route>


        <Route path="/about" component={About} />
        <Route path="/lien-he" component={Contact} />
        <Route path="*" component={NotFound} />
    </Switch>

);
export default BaseRouter;