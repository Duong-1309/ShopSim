import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import BaseRouter from './Routes'
import Header from './components/layout/header'
import Main from './components/layout/main'
import Footer from './components/layout/footer'
import MobileMenu from './components/layout/mobileMenu'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main >
          <BaseRouter />
        </Main>
        <Footer />
        <MobileMenu />
     </Router>
    </div>
  );
}

export default App;
