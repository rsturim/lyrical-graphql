import React, { Component } from "react";

import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import { Link } from "react-router";

import query from "../queries/fetchSong";

class SongDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            data: { song, error, loading },
        } = this.props;

        return (
            <div>
                <h3>Song Detail</h3>
                {loading && <p>loading...</p>}
                {error && <p>error...{error.message}</p>}
                {song && <h4>{song.title}</h4>}
                <Link to="/">Back</Link>
            </div>
        );
    }
}

export default graphql(query, {
    options: (props) => {
        return {
            variables: {
                id: props.params.id,
            },
        };
    },
})(SongDetail);
