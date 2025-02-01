import React from 'react'

const Demo = () => {
  return (
    <>
      {React.createElement("h1", "null", "Hello World")}
      {React.createElement("ol", {id : "demo"},
        React.createElement("li", null, "item1"),
        React.createElement("li", null, "item2"),
        React.createElement("li", null, "item3")
        )
      }
      </>
  )
}

export default Demo;
