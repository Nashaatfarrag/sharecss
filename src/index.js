import React, { Component } from "react";
import PropTypes from "prop-types";

const Loading = props => {
  if (props.present) {
    return (
      <div id="share-loading" className="share-loading enabled">
        <div className="share-loading-spinner"></div>
      </div>
    );
  } else {
    return (
      <div id="share-loading" className="share-loading disabled">
        <div className="share-loading-spinner"></div>
      </div>
    );
  }
};

class Snackbar extends Component {
  state = {
    show: true,
    classes: "share-snackbar enabled"
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: false });
      this.props.onDurationEnd;
    }, this.props.duration);
  }

  render() {
    let button = null ;
    const isLoggedIn = this.state.show;
    if (isLoggedIn) {
      button = (
        <div id="share-snackbar" className={this.state.classes}>
          <span className="share-snackbar-message">{this.props.message}</span>
        </div>
      );
    } else {
      button = <div></div>;
    }

    return button;
  }
}

// const Snackbar = props => {
//   let classes = "share-snackbar ";
//   let enabled = props.present;
//   if (enabled === true) {
//     classes += "enabled";
//   } else {
//     classes = "share-snackbar";
//   }

//   setTimeout(() => (enabled = false), props.duration);
//   return (

//   );
// };

// function() {
// 	var element = null;

// 	var init = function() {
// 		document.addEventListener('DOMContentLoaded', function() {
// 			// Need to add snackbar html to the DOM
// 			var el = document.createElement("div");
// 			el.id = 'share-loading';
// 			el.classList.add('share-loading','disabled');

// 			// Create the message node
// 			var spinnerNode = document.createElement("div");
// 			spinnerNode.classList.add('share-loading-spinner');
// 			el.appendChild(spinnerNode);

// 			document.body.appendChild(el);
// 		});
// 	}();

// 	function present() {
// 		// Show the loading overlay
// 		if (!element) {
// 			element = document.getElementById('share-loading');
// 		}

// 		// Add the msg
// 		element.classList.remove('disabled');
// 		element.classList.add('enabled');
// 	}

// 	function dismiss() {
// 		element.classList.remove('enabled');
// 		// Listen for transition end event
// 		element.addEventListener( 'transitionend', onExitComplete );
// 	}

// 	function onExitComplete(e) {
// 		element.removeEventListener( 'transitionend', onExitComplete );
// 		element.classList.add('disabled');
// 	}

// 	return {
// 		present: present,
// 		dismiss: dismiss
// 	}
// }();

export default Snackbar;
