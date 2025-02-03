import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Cbc from './Component/Cbc.jsx'
// import Fbc from './Component/Fbc.jsx'
// import Demo from './Component/demo.jsx'
import Parent from './Props/Parent'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parent />
  </StrictMode>,
)
