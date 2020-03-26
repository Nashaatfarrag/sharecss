import React, { Component } from "react";

class Slide extends Component {
  state = {
    showContent: false
  };

  render() {
    let classes = [];
    let style = {};
    if (this.state.showContent) {
      style = {
        transition: `opacity 200ms `,
        transition: `height 200ms `,
        opacity: 1,
        height: "146px"
      };
      classes = "share-slide-content content-on";
    } else {
      style = {
        transition: `opacity 200ms ease-in-out`,
        transition: `height 400ms `,
        opacity: 0,
        height: "0"
      };
      classes = "share-slide-content content-off";
    }

    return (
      <div className="share-slide enabled">
        <div
          className="share-slide-heading"
          onClick={() =>
            this.setState({ showContent: !this.state.showContent })
          }
        >
          {this.props.heading}
        </div>
        <div className={classes} style={style}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Slide;
