import React from "react";
import { Route, Switch } from "react-router-dom";

// import Layout from "./components/Layout";
import LandingPage from "./pages/Landing";
import ShopPage from "./pages/Shop";

import "./App.css";

function App() {
  return (
    // <Layout>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
    // </Layout>
  );
}

export default App;
