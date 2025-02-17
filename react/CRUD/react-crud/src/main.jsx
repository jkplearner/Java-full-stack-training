import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './Component/Home';
import Create from './Component/Create';
import Edit from './Component/Edit';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:userid' element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
