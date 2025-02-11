// import React from 'react'
// import { user } from './CompA'
// import { id } from './CompA'
// const CompC = () => {
//   return (
//     <div>
//       <user.Consumer>
//         {(name,id1) => {
//           return( <>
//             <id.Consumer>
//                 {
//                 (id2) => 
//                     {
//                     return <h1>My Name is {name} and <br></br>my id is {id1} and {id2}</h1>
//                     }
//                 }
//             </id.Consumer>
//           </>)

//         }}
//       </user.Consumer>
//     </div>
//   )
// }

// export default CompC
import React from 'react'
import { username } from './CompA'
import { id } from './CompA'
const CompC = () => {
    let name = React.useContext(username)
    let id1 = React.useContext(id)
  return (
    <div>
      {name }
      <br></br>
      {id1}
    </div>
  )
}

export default CompC
