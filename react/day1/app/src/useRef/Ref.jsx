import React,{useRef} from 'react'

const Ref = () => {
    let demo = useRef();
    console.log(demo);
    console.log(demo.current);
    demo.current.style.color = "red";
    
    
  return (
    <div>
      <h2 ref={demo}>hello</h2>
    </div>
  )
}

export default Ref
