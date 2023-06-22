
import React, { useState } from "react";
import './../styles/App.css';
import Modal from './Modal'
const App = () => {
  const [show,setShow]=useState(false);
  const showFalse = ()=>{
    setShow(!show);
}
  return (
    <div>
        {/* Do not remove the main div */}
        <Modal show={show} callback={showFalse}/>
    </div>
  )
}

export default App
