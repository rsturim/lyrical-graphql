import React, { Component } from "react";

import { Link } from "react-router";

import gql from "graphql-tag";

import { graphql } from "react-apollo";

import query from "../queries/fetchSongs";

class SongList extends Component {
    onSongDelete(id) {
        this.props
            .mutate({
                variables: {
                    id: id,
                },
                //  technique 1
                // refetchQueries: [{ query: query }],
            })
            // technique 2 (depends on the updates)
            .then(() => this.props.data.refetch());
    }

    renderSongs({ loading, songs }) {
        if (!loading && songs) {
            return songs.map(({ id, title }) => {
                return (
                    <li className="collection-item" key={id}>
                        {title}
                        <i
                            onClick={() => this.onSongDelete(id)}
                            className="material-icons"
                        >
                            delete
                        </i>
                    </li>
                );
            });
        }
    }

    render() {
        const {
            data: { songs, error, loading },
        } = this.props;

        return (
            <div>
                <h2>SongList</h2>
                {loading && <p>loading ....</p>}
                {error && <p>error found</p>}

                <ul className="collection">
                    {this.renderSongs({ loading, songs })}
                </ul>

                <Link
                    to="/songs/new"
                    className="btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        );
    }
}

const DELETE_SONG = gql`
    mutation DeleteSong($id: ID) {
        deleteSong(id: $id) {
            id
        }
    }
`;

export default graphql(DELETE_SONG)(graphql(query)(SongList));
