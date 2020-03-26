import React, { Component } from "react";

import Loading from "share";
import "./css/share.min.css";

export default class App extends Component {
  state = {
    loading: false,
    snackbar: false
  };

  render() {
    return (
      <div>
        {/* Loading Example
        <button
          className="share-button share-accent-bg"
          onClick={() => this.setState({ loading: true })}
        >
          Show Loading
        </button>
        <Loading present={this.state.loading} /> */}

        <button
          className="share-button share-accent-bg"
          onClick={() => this.setState({ snackbar: !this.state.snackbar })}
        >
          Show snackbar
        </button>
        <Loading
          message="hello"
          duration="3000"
          present={this.state.snackbar}
          onDurationEnd={() => this.setState({ snackbar: !this.state.snackbar })}

        />
      </div>
    );
  }
}
