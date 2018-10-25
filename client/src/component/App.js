import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header"
import Landing from "./Landing"
import {connect}from "react-redux"
import * as actions from '../actions'
import DashBoard from "./Dashboard"
import SurveyNew from "./surveys/SurveyNew"



class App extends Component {

  componentDidMount(){
  this.props.fetchUser()
  }
  render() {
    return (
      <div className="container">
        
        <BrowserRouter>
        <div className="container" >
        <Header/>
          <Switch>
            <Route path="/surveys" component={DashBoard} />
            <Route path="/survey/new" component={SurveyNew} />
            <Route exact path="/" component={Landing} />
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,actions) (App);
