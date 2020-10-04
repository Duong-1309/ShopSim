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
import Admin from './containers/admin/admin'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import MobileMenu from './components/layout/mobileMenu'
import ArticleManagement from './containers/admin/content/articleManagement'
import Login from './containers/admin/login'
import Signup from './containers/admin/signup'

const BaseRouter = () => (
   
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
            <Admin>
                <ArticleManagement />
            </Admin>
        </Route>
        <Route exact path="/admin/dang-nhap/" component={Login}/>
        <Route exact path="/admin/dang-ki/" component={Signup}/>
        <Route path="*" component={NotFound} />
    </Switch>
   
    
);
export default BaseRouter;