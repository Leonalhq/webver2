import React from 'react';
import { Component } from 'react'; 

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Login from'./Components/Login';
import history from './Components/history';
import main from'./main'
import Signup from './Components/signup'
import HashTagMain from './Components/HashTagMain'

class App extends Component{
  render(){

      return (
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/main" component={main}/>
            <Route exact path="/signup" component={Signup}/>>
            {/* <Route exact path="/post" component={Post}/> */}
            {/* <Route exact path={`/result/1`} component={HashTagMain}/> */}
          </Switch>
        </Router>
      );

}
}

export default App;
