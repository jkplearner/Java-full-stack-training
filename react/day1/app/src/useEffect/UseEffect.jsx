// //No dependency
// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [state,setState] = useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//             setState(state+1);
//         },2000)
//     })
//   return (
//     <div>
//       <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect
// empty dependency
// import React,{useState,useEffect} from 'react'

// const UseEffect = () => {
//     let [state,setState] = useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//             setState(state+1);
//         },2000)
//     },[])
//   return (
//     <div>
//       <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect
//dependency with value (props or state)- component will render when state updates
// import React, { useState, useEffect } from 'react'

// const UseEffect = () => {
//     let [state, setState] = useState(0);
//     let [increament, setIncreament] = useState(0);
//     useEffect(() => {
//         setIncreament(state * 2)
//     }, [state])

//     return (
//         <div>
//             <h1>state : {state}</h1>
//             <h1>increament : {increament}</h1>
//             <button onClick={() => setState((c) => (c + 1))}>Increament</button>
//         </div>
//     )
// }

// export default UseEffect
//fetch api using useEffect
import React, { useState, useEffect } from 'react';
import './useEffects.css';

const UseEffect = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((x)=>x.json()) 
            .then((res) => setState(res)) 
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((data) => (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.price}</td>
                            <td>
                                <img src={data.image} alt="product" width="50" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UseEffect;
