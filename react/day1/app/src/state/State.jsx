import React from 'react'

const State = () => {
    let [name,setName] = useState("Jaya Krishna Pavan")
    console.log(name);
    console.log(setName);
    
    let demo = ()=>{
        setName("JK")
        }
  return (
    <div>
        <h1>My name is : {name}</h1>
        <button onClick={demo}>Click</button>
    </div>
  )
}

export default State
