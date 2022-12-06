import React from 'react'

function Button (ade){
   const buttonStyle={
    backgroundColor: ade.bc
   }
   const bcStyle={
    color: ade.bcc
   }
   return(
    <div style={buttonStyle}>
        <h1>{ade.children}</h1>
        <h2>{ade.children}</h2>
        <em style={bcStyle}>{ade.children}</em>
        <b>{ade.children}</b>
    </div>
   )
}
export default Button