import React from "react";

const Modal = (props) => {
    
  return (
    <>
      <button onClick={()=>{
          props.callback();
        }}>Show Modal</button>
      <div className="model-overlay" style={{display:props.show?"block":"none"}}>
        <button className="model-close" onClick={()=>{
          props.callback();
        }}>Close</button>
        <p>This is the content of the modal.</p>
      </div>
    </>
  );
};

export default Modal;
