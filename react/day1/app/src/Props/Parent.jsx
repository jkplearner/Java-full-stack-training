// import React from 'react';
// import Child from './Child.jsx';
// class Parent extends React.Component{
//     obj={
//         username:"M Jaya Krishna Pavan",
//         Education : "B.Tech",
//         Branch : "CSE",
//         Age : 21,

//     }
//     render(){
//         return(
//             <>
//                 <Child name ={this.obj.username}
//                         edu = {this.obj.Education}
//                         br = {this.obj.Branch}
//                         age = {this.obj.Age}/>
//             </>
//         )
//     }
// }export default Parent;
import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
      <Child name="jk"/>
    </div>
  )
}

export default Parent
