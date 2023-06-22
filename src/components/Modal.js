import React from "react";
import Para from "./Para";
const Modal = (props) => {
  return (
    <>
      <button
        onClick={() => {
          props.callback();
        }}
      >
        Show Modal
      </button>
      { props.show &&
        <div className="modal-overlay modal">
          <button
            className="modal-close"
            onClick={() => {
              props.callback();
            }}
          >
            Close
          </button>
          <p>This is the content of the modal.</p>
        </div>
      }
    </>
  );
};

export default Modal;
