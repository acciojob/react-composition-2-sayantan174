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
        <div className="model-overlay">
          <button
            className="model-close"
            onClick={() => {
              props.callback();
            }}
          >
            Close
          </button>
          <Para />
        </div>
      }
    </>
  );
};

export default Modal;
