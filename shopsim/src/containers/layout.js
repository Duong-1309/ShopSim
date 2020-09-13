import React from 'react'
import Header from '../components/layout/header'
import Main from '../components/layout/main'
import Footer from '../components/layout/footer'
import MobileMenu from '../components/layout/mobileMenu'

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
