import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, hashHistory, IndexRoute } from "react-router";

import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import App from "./components/App";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

const client = new ApolloClient({});

import "./style/style.css";

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="songs/new" component={SongCreate} />
                    <Route path="songs/:id" component={SongDetail} />
                    <IndexRoute component={SongList}></IndexRoute>
                </Route>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
