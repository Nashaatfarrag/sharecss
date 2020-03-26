import React from "react";

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

export default Loading;
