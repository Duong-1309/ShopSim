import React, {useEffect} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
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
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import MobileMenu from './components/layout/mobileMenu'
import  ListProductAdmin from './admin/containers/productManager/listProductAdmin'
import Admin from './admin/admin'
import Login from './admin/login'
import Signup from './admin/signup'

import {connect} from 'react-redux'
import * as actions from './store/actions/auth'

const BaseRouter = (props) => {

    useEffect(() => {
        props.onTryAutoSignup();
    }, [])
    return (
    <Switch>
        <Route exact path="/">
            <Header />
            <Main>
                <ListProducts />
            </Main>
            <Footer />
            <MobileMenu />
        </Route>
        <Route path='/sim/:textsort'>
            <Header />
            <Main>
                <SortProducts />
            </Main>
            <Footer />
            <MobileMenu />
        </Route>
        <Route path='/tim-sim/:textsearch'>
            <Header />
            <Main>
                <SearchProduct />
            </Main>
            <Footer />
            <MobileMenu />
        </Route>
        <Route path='/chi-tiet-sim/:idsim'>
            <Header />
            <Main>
                <DetailProduct />
            </Main>
            <Footer />
            <MobileMenu />
        </Route>
        <Route exact path='/chuyen-muc'>
            <Header />
            <DataListNews />
            <Footer />
            <MobileMenu />
        </Route>
        <Route path='/chuyen-muc/:slugCategory/:slugNews'>
            <Header />
            <DataSingleNews />
            <Footer />
            <MobileMenu />
        </Route>

        <Route path="/about">
            <Header />
            <About />
            <Footer />
            <MobileMenu />
        </Route>
        <Route path="/lien-he">
            <Header />
            <Contact />
            <Footer />
            <MobileMenu />
        </Route>
        <Route exact path="/admin">
            {props.isAuthenticated ? 
            <Admin>
                <ListProductAdmin />
            </Admin>
            : 
            <Redirect to={'/dang-nhap-admin'} />
            }
            
        </Route>
        <Route  path="/dang-nhap-admin">
            {props.isAuthenticated ? <Redirect to={'/admin'} />
            : <Login />
            }
        </Route>
        <Route path="/dang-ki-admin">
            {props.isAuthenticated ? <Signup />
            : <Redirect to={'/dang-nhap-admin'}/> }
        </Route>
        <Route path="*" component={NotFound} />
    </Switch>
   
    )
}
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.token !== null
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseRouter);