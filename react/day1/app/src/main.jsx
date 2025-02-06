import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Styles/globally.css"
// import './index.css'
// import App from './App.jsx'
// import Cbc from './Component/Cbc.jsx'
// import Fbc from './Component/Fbc.jsx'
// import Demo from './Component/demo.jsx'
import Inline from './Styles/Inline'
// import State from './state/State'
// import Parent from './Props/Parent'
import Comp1 from './Styles/Comp1'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp1/>
  </StrictMode>,
)
