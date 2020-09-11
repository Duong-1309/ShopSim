import React from 'react';
import './App.css';
import Layout from './containers/layout'
import Products from './components/products/products'

function App() {
  return (
    <div className="App">
      <Layout>
        <Products/>
      </Layout>
    </div>
  );
}

export default App;
