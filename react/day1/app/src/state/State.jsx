import React from 'react'
import {useState} from 'react'
const State = () => {
    let [name,setName] = useState(10)
    console.log(name);
    console.log(setName);
    
    let demo = ()=>{
        setName(20)
        }
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={demo}>Click</button>
    </div>
  )
}

export default State
