import React from 'react';
import '../Styles/CharComponent.css'

const charcomponent = (props) => {
  return(
    <div className='charcomponent' onClick={props.changed}>
      <p>{props.char}</p>
    </div>
  )
};

export default charcomponent;