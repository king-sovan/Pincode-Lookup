import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ResultPage from './ResultPage';
import './App.css'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/results/:pincode' element={<ResultPage />}/>
      </Routes>
    </HashRouter>
  )
}

export default App