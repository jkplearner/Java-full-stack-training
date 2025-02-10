// import React from 'react'

// const List = () => {
//     let arr = [10,20,30,40]
//     console.log(arr);
//     let n = 0;
//     console.log(n);
    
//   return (
//     <>
//         {
//             arr.map((ele)=>{
//                 console.log(`<li key=${n++}>${ele}<li/>`);
                
//                 return(
//                     <li key={n++}>{ele}</li>
//                 )
//             })
//         }
//     </>
//   )
// }

// export default List
import React, { Fragment } from 'react'

const List = () => {
    let main=[
        {
            id:1,
            name:"Aman",
        },
        {
            id:2,
            name:"Amit",
        },
        {
            id:3,
            name:"Ankit",
        }
    ]
    let n = 0;
  return (
    <>
        {
            main.map((ele)=>{
                return(
                    <Fragment key={ele.id}>
                        <li >{ele.name}</li>
                    </Fragment>
                )
            })
        }
    </>
  )
}

export default List
