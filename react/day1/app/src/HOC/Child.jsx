import React from 'react'
import Hoc from './Hoc'
const Child = ({name,count,increment,arr1}) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <button onClick={increment}>Click</button>
      <h1>{count}</h1>
        {arr1.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
    </div>
  )
}

export default Hoc(Child)