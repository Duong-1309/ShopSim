import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import BaseRouter from './Routes';


function App(props) {

  
  return (
    <div >
      <Router>
          <BaseRouter  />
     </Router>
    </div>
  );
}
        
export default App;
