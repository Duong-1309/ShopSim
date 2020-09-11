import React from 'react'
import Header from '../components/header'
import Main from '../components/main'
import Products from '../components/products/products'
import Footer from '../components/footer'
import MobileMenu from '../components/mobileMenu'

function Layout({children}) {
    return (
        <div>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
            <MobileMenu/>
        </div>
    )
}

export default Layout
