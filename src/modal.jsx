import React from "react";

const Modal = props => {
  let classes = [];
  if (props.present === true) {
    classes = "share-modal enabled";
  } else classes = "share-modal";

  return (
    <div id="modal" class={classes}>
      <div class="share-modal-content-wrapper">
        <div class="share-p-3">
          <button
            id="close-modal-btn"
            onClick={props.onDismissClicked}
            class="share-button share-outline share-rounded"
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
