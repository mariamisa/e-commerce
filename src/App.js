import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./pages/Landing";
import Header from "./components/Header";
import ShopPage from "./pages/Shop";
import SignInAndSignUp from "./pages/signin";

import { auth } from "./firebase/firebase.utils";

import "./App.css";

export default class App extends Component {
  state = {
    currentUser: null,
  };
  unsubscribeFromAuth = null;

  componentDidMount() {
    //any changed will tell us
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}
