import React from "react";

const Modal = props => {
  let classes = [];
  if (props.present === true) {
    classes = "share-modal enabled";
  } else classes = "share-modal";

  return (
    <div id="modal" className={classes}>
      <div className="share-modal-content-wrapper">
        <div className="share-p-3">
          <button
            id="close-modal-btn"
            onClick={props.onDismissClicked}
            className="share-button share-outline share-rounded"
          >
            {props.dismissButtonText}
          </button>
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
