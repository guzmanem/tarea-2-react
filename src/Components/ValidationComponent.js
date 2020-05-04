import React from 'react';

const validationcomponent = (props) => {

   let text = props.text
   let size = <p>The text is enough</p>

   if(text.length <5) {
      size = <p>The text is too short</p>
   }
   
   return(
   <div>
      <p>The tex is {text} with a length of {text.length}</p>
      {size}
   </div>
   )
};

export default validationcomponent;