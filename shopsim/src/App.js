import React from 'react';
import './App.css';
import Layout from './containers/layout'
import {BrowserRouter as Router} from 'react-router-dom'
import BaseRouter from './Routes'


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <BaseRouter />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
