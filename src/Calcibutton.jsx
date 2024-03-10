import React from 'react'

function Calcibutton({ handlebutton}) {
   
  let btn = ["C","1","2","3","+","4","5","6","-","7","8","9","*","0","/","="];

  return (
   <>

   { btn.map( circle =>  <button 
    
    onClick={ () => handlebutton(circle) }
   
   
   >{circle}</button>  ) }
   
   
   
   </>
  )
}

export default Calcibutton
