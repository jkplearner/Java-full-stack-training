import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import "./Styles/globally.css"
// import './index.css'
// import App from './App.jsx'
// import Cbc from './Component/Cbc.jsx'
// import Fbc from './Component/Fbc.jsx'
// import Demo from './Component/demo.jsx'
// import Inline from './Styles/Inline'
// import State from './state/State'
// // import Parent from './Props/Parent'
// import Comp2 from './Styles/Comp2'
// import Comp1 from './Styles/Comp1'
// import External from './Styles/External'
import Ref from './useRef/Ref'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Comp1/>
    <Comp2/> */}
    {/* <External/> */}
    <Ref/>
  </StrictMode>,
)
