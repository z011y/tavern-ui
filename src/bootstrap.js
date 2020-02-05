import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import reducers from "./reducers";

import thunk from "redux-thunk";

import Icons from "./helpers/icons";

import history from "./history";
import Layout from "./components/layout";
import Home from "./components/home";
import Find from "./components/find/find";
import Login from "./components/auth/login";
import ResultsItem from "./components/find/resultsItem";
import ChatRoom from "./components/chatRoom";

const createStoreWithMiddleware = applyMiddleware(thunk)(
  compose(
    (window.devToolsExtension ? window.devToolsExtension() : f => f)(
      createStore
    )
  )
);

import "./style/main.scss";

function Main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/find" exact component={Find} />
            <Route path="/login" exact component={Login} />
            <Route
              path="/find/:slug"
              render={props => (
                <ResultsItem
                  {...props}
                  // loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", Main);
