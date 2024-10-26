import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ResultPage from './ResultPage';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/results/:pincode' element={<ResultPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App