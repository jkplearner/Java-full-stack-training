import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
// import './index.css'
// import App from './App.jsx'
import Master from './Component/Master'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    <Master />
    </BrowserRouter>
    
  </StrictMode>,
)
