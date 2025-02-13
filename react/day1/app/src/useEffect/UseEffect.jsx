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
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Avatar</th>
                        <th>Profile</th>
                        <th>Followers URL</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.login}</td>
                            <td>
                                <img src={user.avatar_url} alt={user.login} width="50" />
                            </td>
                            <td>
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                            </td>
                            <td>
                                <a href={user.followers_url} target="_blank" rel="noopener noreferrer">Followers</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UseEffect;

