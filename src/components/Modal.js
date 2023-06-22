import React from "react";
import Para from "./Para";
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
        <Para/>
      </div>
    </>
  );
};

export default Modal;
