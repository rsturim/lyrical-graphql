import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, hashHistory, IndexRoute } from "react-router";

import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import App from "./components/App";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";

const client = new ApolloClient({});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="songs/new" component={SongCreate} />
                    <IndexRoute component={SongList}></IndexRoute>
                </Route>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root />, document.querySelector("#root"));