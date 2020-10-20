import React, { Component } from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import fetchSong from "../queries/fetchSong";

import moduleName from "./LyricCreate";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetail extends Component {
    render() {
        const {
            data: { song, error, loading },
            params,
        } = this.props;

        return (
            <div>
                <h3>Song Detail</h3>
                {loading && <p>loading...</p>}
                {error && <p>error...{error.message}</p>}
                {song && (
                    <div>
                        <h4>{song.title}</h4>
                        <LyricList lyrics={song.lyrics} />
                        <LyricCreate songId={params.id} />
                    </div>
                )}
                <Link to="/">Back</Link>
            </div>
        );
    }
}

export default graphql(fetchSong, {
    options: (props) => {
        return {
            variables: {
                id: props.params.id,
            },
            refetchQueries: [{ query: fetchSong }],
        };
    },
})(SongDetail);
