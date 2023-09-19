import React from "react";

function Modal(props: any) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div>
      <p>Are you sure?</p>
      <button className="btn btn-danger" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn btn-primary" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
