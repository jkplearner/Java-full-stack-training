// // import React from 'react';

// // class Child extends React.Component{
// //     render(){
// //         return(
// //             <>
// //                 <h1>my name is : {this.props.name}</h1>
// //                 <h1>My age is : {this.props.age}</h1>
// //                 <h1>My Education is: {this.props.edu}</h1>
// //                 <h1>My Branch is : {this.props.br}</h1>
// //             </>
// //         )
// //     }
// // }export default Child;
// import React from 'react'

// const Child = (props) => {
//   console.log(props)
//   let {name, id, designation} = props.obj;
//   return (
//     <div>
//       {/* <h1>my name is : {props.name}</h1> */}
//       {/* {
//         props.arr.map((x) => {
//           return <li>{x}</li>
//         })
//       } */}
//       <h1>{name}<br></br>{id}<br></br>{designation}</h1>
//     </div>
//   )
// }

// export default Child
import React from 'react'

const Child = (props) => {
  return (
    <div>
      <button onClick={()=>{
        props.fun()
      }}>click</button>
    </div>
  )
}

export default Child
  