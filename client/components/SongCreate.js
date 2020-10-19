import React, { Component } from "react";
import { Link, hashHistory } from "react-router";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";

import query from "../queries/fetchSongs";

export class SongCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
        };
    }

    onSubmit(e) {
        e.preventDefault();

        this.props
            .mutate({
                variables: {
                    title: this.state.title,
                },
                refetchQueries: [{ query: query }],
            })
            .then(() => hashHistory.push("/"));
    }

    render() {
        const { title } = this.state;

        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create a New Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label htmlFor="title">
                        Song title:
                        <input
                            onChange={(e) =>
                                this.setState({ title: e.target.value })
                            }
                            type="text"
                            value={title}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            id
            title
        }
    }
`;

export default graphql(mutation)(SongCreate);
