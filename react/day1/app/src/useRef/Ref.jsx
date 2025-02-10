// import React,{useRef} from 'react'

// const Ref = () => {
//     let demo = useRef();
//     console.log(demo);
//     console.log(demo.current);
//     demo.current.style.color = "red";
    
    
//   return (
//     <div>
//       <h2 ref={demo}>hello</h2>
//     </div>
//   )
// }

// export default Ref

// import React from 'react'
// import video from './1.mp4'
// const Ref = () => {
//   return (
//     <div>
//       <video src='video'></video>
//     </div>
//   )
// }

// export default Ref
import React, { useRef } from 'react'

const Ref = () => {
  let name = useRef('');
  let password = useRef('');
  let eventHandler = (e) => {
    e.preventDefault();
    console.log({name: name.current.value});
    console.log({password: password.current.value});
  }
  return (
    <>
      <form action="">
        name : <input ref={name} type="text" name="name" id="name"/>
        <br />
        password : <input ref={password} type="password" name="password" id="password"/>
        <br />
        <button type="submit" onClick={eventHandler}>submit</button>
      </form>
    </>
  )
}

export default Ref

