import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import styled from "styled-components/macro";

const Layout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
  width: 100%;
  justify-content: space-between;
  user-select: none;
  overflow: none;
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={App} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
