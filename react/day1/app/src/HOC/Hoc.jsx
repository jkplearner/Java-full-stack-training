//Hoc is an advanced technique used to re-use component logic.
//Hoc is an function which accepts another component as an argument and returns new component
//syntax:
//let newComponent = HigherOrderComponent(OriginalComponent)

import React, { useState } from 'react'

let Hoc = (OriginalComponent) =>{
    let arr = [10,20,30,40,50]
    let newComponent = ()=>{
        let [count,setCunt] =useState(0);
        return <OriginalComponent name="abhi" count={count} increment = {()=>{
            setCunt(count+1)
        }} arr1={arr}/>
    }
    return newComponent
}

export default Hoc
