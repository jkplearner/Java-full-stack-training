// // import React from 'react';
// // import Child from './Child.jsx';
// // class Parent extends React.Component{
// //     obj={
// //         username:"M Jaya Krishna Pavan",
// //         Education : "B.Tech",
// //         Branch : "CSE",
// //         Age : 21,

// //     }
// //     render(){
// //         return(
// //             <>
// //                 <Child name ={this.obj.username}
// //                         edu = {this.obj.Education}
// //                         br = {this.obj.Branch}
// //                         age = {this.obj.Age}/>
// //             </>
// //         )
// //     }
// // }export default Parent;
// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   const obj1 = {
//     name: "M Jaya Krishna Pavan",
//     id:1,
//     designation: "Software Developer",
//   }
//   return (
//     <div>
//       {/* <Child name="jk"/> */}
//       {/* <Child id={10}/> */}
//       {/* <Child arr={[10,20,30,40]} /> */}
//       <Child obj = {obj1}/>
//     </div>
//   )
// }

// export default Parent
import React from 'react'
import Child from './Child'
const Parent = () => {
  let demo = ()=>{
    window.alert("I am arrow function")
  }
  return (
    <>
    <Child fun = {demo}/>
    </>
  )
}

export default Parent
