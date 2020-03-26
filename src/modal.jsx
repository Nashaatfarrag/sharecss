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

{
  /* <div id="modal" class="share-modal">
<div class="share-modal-content-wrapper">
  <div class="share-p-3">
    <button
      id="close-modal-btn"
      data-dismiss="modal"
      class="share-button share-outline share-rounded"
    >
      Dismiss
    </button>

    <div class="share-dropdown">
      <button
        class="share-button share-rounded share-dropdown-toggle share-primary-bg"
        data-toggle="dropdown"
      >
        Menu 2
      </button>
      <div class="share-dropdown-menu">
        <a class="share-dropdown-menu-item">Four</a>
        <a class="share-dropdown-menu-item">Five</a>
        <a class="share-dropdown-menu-item">Six</a>
        <a class="share-dropdown-menu-item">Seven</a>
        <a class="share-dropdown-menu-item">Eight</a>
        <a class="share-dropdown-menu-item">Nine</a>
        <a class="share-dropdown-menu-item">Ten</a>
        <a class="share-dropdown-menu-item">Eleven</a>
        <a class="share-dropdown-menu-item">Twelve</a>
      </div>
    </div>
  </div>
</div>
</div> */
}
