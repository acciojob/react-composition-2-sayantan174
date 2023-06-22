import React from "react";
import Para from "./Para";
const Modal = (props) => {
  return (
    <>
      <button
        className="model-overlay"
        onClick={() => {
          props.callback();
        }}
      >
        Show Modal
      </button>
      <div style={{ display: props.show ? "block" : "none" }}>
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
    </>
  );
};

export default Modal;
