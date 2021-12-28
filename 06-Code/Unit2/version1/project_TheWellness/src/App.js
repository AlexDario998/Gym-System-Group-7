import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Infra from './components/formsInf';
import TIDevice from './components/formAddTIDevice';


const App = () => {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/infrastructure" element={<Infra />} />
        <Route path="/formAddTIDevice" element={<TIDevice />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
