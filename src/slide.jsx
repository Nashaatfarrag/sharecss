import React, { Component } from "react";

class Slide extends Component {
  state = {
    showContent: false
  };

  render() {
    //   let classes = []
    // if (this.state.showContent) {
    //     content = 
    // }
    return (
      <div class="share-slide">
        <div
          class="share-slide-heading"
          onClick={() =>
            this.setState({ showContent: !this.state.showContent })
          }
        >
          {this.props.heading}
        </div>
        <div class="share-slide-content enabled">
        <p>Hi</p>
          <p>Toggle</p>
          <p>This</p>
          <p>Content!</p>
        </div>
      </div>
    );
  }
}

export default Slide;
