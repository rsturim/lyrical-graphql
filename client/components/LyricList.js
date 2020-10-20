import React, { Component } from "react";

class LyricList extends Component {
    renderLyrics(lyrics) {
        return lyrics.map(({ id, content }) => {
            return (
                <li key={id} className="collection-item">
                    {content}
                </li>
            );
        });
    }

    render() {
        const { lyrics } = this.props;
        console.log("this.props: ", this.props);
        console.log("lyrics: ", lyrics);
        console.log("------------------------------------------");
        return (
            <div>
                <ul>{this.renderLyrics(lyrics)}</ul>
            </div>
        );
    }
}

export default LyricList;
