import React, { Component } from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: "",
        };
    }

    handleOnSubmit(event) {
        event.preventDefault();

        this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId,
            },
        });

        this.setState({ content: "" });
    }
    render() {
        return (
            <form onSubmit={this.handleOnSubmit.bind(this)}>
                <label htmlFor="">Add a Lyric</label>
                <input
                    type="text"
                    value={this.state.content}
                    onChange={(event) =>
                        this.setState({ content: event.target.value })
                    }
                />
                <button type="submit">Add Lyric</button>
            </form>
        );
    }
}

const mutation = gql`
    mutation AddLyricToSong($content: String, $songId: ID) {
        addLyricToSong(content: $content, songId: $songId) {
            id
            lyrics {
                id
                content
            }
        }
    }
`;

export default graphql(mutation)(LyricCreate);
