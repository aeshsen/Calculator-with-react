import { useState } from "react";
import Calcibutton from "./Calcibutton"
import Input from "./Input"


function App() {
  
  const [inputval,setinputval] =  useState("");

  const handleonclick =(btn) =>{
      if(btn === "C"){
        setinputval(" ");
      }
      else if(btn === "="){
        let calculation = eval(inputval);
        setinputval(calculation);
      }
      else {
        let allvalue = (inputval + btn);
        setinputval(allvalue);
      }
  }



  return (
   
    
  <div className='maincontainer' >
    <h1>Calculator</h1>
    
     <Input  inputvalue = {inputval}></Input>
     <Calcibutton handlebutton={handleonclick}></Calcibutton>
    
    

  </div>
  )
}

export default App
