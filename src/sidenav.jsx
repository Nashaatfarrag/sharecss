import React from "react";

const Sidebar = props => {
  let classes = [];
  if (props.present === true) {
    classes = "share-sidenav enabled";
  } else classes = "share-sidenav";
  if (props.right) classes += " share-right";
  return (
    <div className={classes}>
      <div className="share-sidenav-menu">
        <div className="share-p-2">
          <button
            onClick={props.onDismissClicked}
            className="share-button share-rounded share-primary-bg"
          >
            {props.buttonText}
          </button>
          <p>{props.insideText}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
