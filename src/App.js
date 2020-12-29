import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./pages/Landing";
import Header from "./components/Header";
import ShopPage from "./pages/Shop";
import SignInAndSignUp from './pages/signin';

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </>
  );
}

export default App;
