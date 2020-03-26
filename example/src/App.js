import React, { Component } from "react";

import share from "share";
import "./css/share.min.css";

export default class App extends Component {
  state = {
    loading: false,
    snackbar: false
  };

  render() {
    return (
      <div>
        {/* Loading Example */}
        <button
          className="share-button share-accent-bg"
          onClick={() => this.setState({ loading: true })}
        >
          Show Loading
        </button>
        <share.Loading present={this.state.loading} />

        <button
          className="share-button share-accent-bg"
          onClick={() => this.setState({ snackbar: !this.state.snackbar })}
        >
          Show snackbar
        </button>
        {this.state.snackbar && (
          <share.Snackbar message="hello" duration="3000" />
        )}
      </div>
    );
  }
}
