
// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import EmailForm from './EmailForm'
import LandingPage from './LandingPage'

function App() {
  console.log();
  
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/email' element={<EmailForm />}/>
    </Routes>
    
    </>
  )
}


export default App
