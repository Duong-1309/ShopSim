import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import MobileMenu from './components/layout/mobileMenu'
import Home from './home'
import About from './about'
import NotFound from './404'
import Contact from './contact'
import Main from './components/layout/main';
import ListProducts from './containers/dataProduct/listProducts';
import SortProducts from './containers/dataProduct/sortProducts';
import BaseRouter from './Routes';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <BaseRouter />
        <Footer />
        <MobileMenu />
     </Router>
    </div>
  );
}
                   
        
export default App;
