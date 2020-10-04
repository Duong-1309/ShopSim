import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux'
import BaseRouter from './Routes';
import * as actions from './store/actions/auth'


function App(props) {

  useEffect(() => {
    props.onTryAutoSignup();
  }, [])

  return (
    <div>
      <Router>
          <BaseRouter {...props} />
     </Router>
    </div>
  );
}
          
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}
        
export default connect(mapStateToProps, mapDispatchToProps)(App);
