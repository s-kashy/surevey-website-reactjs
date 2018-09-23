import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header"
import Landing from "./Landing"
import {connect}from "react-redux"
import * as actions from '../actions'
const DashBoard = () => <h2>DashBoard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {

  componentDidMount(){
  this.props.fetchUser()
  }
  render() {
    return (
      <div className="container">
        
        <BrowserRouter>
        <div >
        <Header/>
          <Switch>
            <Route path="/surveys" component={DashBoard} />
            <Route path="/surveynew" component={SurveyNew} />
            <Route exact path="/" component={Landing} />
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,actions) (App);
