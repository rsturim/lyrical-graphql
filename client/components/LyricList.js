import React, { Component } from "react";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

class LyricList extends Component {
    onLike(id) {
        this.props.mutate({
            variables: {
                id,
            },
        });
    }

    renderLyrics(lyrics) {
        return lyrics.map(({ id, content, likes }) => {
            return (
                <li key={id} className="collection-item">
                    {content}
                    <div className="vote-box">
                        <i
                            className="material-icons"
                            onClick={() => this.onLike(id)}
                        >
                            thumb_up
                        </i>
                        {likes}
                    </div>
                </li>
            );
        });
    }

    render() {
        const { lyrics } = this.props;
        return (
            <div>
                {lyrics && lyrics.length > 0 && (
                    <ul className="collection">{this.renderLyrics(lyrics)}</ul>
                )}
            </div>
        );
    }
}

const mutation = gql`
    mutation LikeSomeLyric($id: ID) {
        likeLyric(id: $id) {
            id
            likes
        }
    }
`;

export default graphql(mutation)(LyricList);
