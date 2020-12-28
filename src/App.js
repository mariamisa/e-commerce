import React from "react";
import { Route ,Switch } from "react-router-dom";

import Layout from "./components/Layout";
import LandingPage from "./pages/Landing";

import "./App.css";

function Another() {
  return <div>hi from another</div>;
}

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
        <Route exact path='/hats' component={Another} />
    </Layout>
  );
}

export default App;
