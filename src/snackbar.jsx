import React, { Component } from "react";

class Snackbar extends Component {
    state = {
      show: true,
      classes: "share-snackbar"
    };
    componentDidMount() {
      this.setState({ classes: "share-snackbar enabled" });
      setTimeout(() => {
        this.setState({ classes: "share-snackbar" });
      }, this.props.duration);
    }
  
    render() {
      return (
        <div id="share-snackbar" className={this.state.classes}>
          <span className="share-snackbar-message">{this.props.message}</span>
        </div>
      );
    }
  }
  

  export default Snackbar ;