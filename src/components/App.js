import React from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import {useEffect, useState} from "react"
  const [poems,setPoems] = useState([])
  const [newPoems, setNewPoems] = useState([])

function App() {
    useEffect(()=> {
   const request = async()=>{
    let req = await fetch("http://localhost:8004/poems")
    let res = await req.json()
    setPoems(res)
    request() 
  }  
},[])

  const newPoems = async(poem) =>{
    let request = await fetch("http://localhost:8004/poems"),{method:"POST",
      header:{ 'Content-Type':'application/json'
  },
  body: JSON.stringify(newPoems)}}


  
     
  
  const disappear_reappear = (poem) => {
    (true ? <NewPoemForm /> : null)
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick = {() => {disappear_reappear}}>Show/hide new poem form</button>
        
      </div>
      <PoemsContainer poems={poems}/>
    </div>
  );
}
}
export default App;
