import React from 'react'
import "./ResetBtn.css"

const ResetBtn = (props) => {

    function onClick(){
        props.handleReset();
    }

  return (
    <div className='resetContanier'>
        <button onClick={onClick}>{props.status?"Play again?":"Reset"}</button>
    </div>
  )
}

export default ResetBtn
