import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./pages/Landing";
import Header from "./components/Header";
import ShopPage from "./pages/Shop";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
