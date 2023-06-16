import React, { useState } from "react";

const Modal = (props) => {
    let [show,setShow]=useState(props.show);
    const changeShow = ()=>{
        setShow(true);
    }
    const showFalse = ()=>{
        setShow(false);
    }
  return (
    <>
      <button onClick={changeShow}>Show Modal</button>
      <div className="model-overlay" style={{display:show?"block":"none"}}>
        <button className="model-close" onClick={showFalse}>Close</button>
        <p>This is the content of the modal.</p>
      </div>
    </>
  );
};

export default Modal;
