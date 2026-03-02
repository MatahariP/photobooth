
// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import EmailForm from './EmailForm'
import LandingPage from './LandingPage'
import Template from "./Template";
import Pembayaran from './Payment';
import Photo from './Photo';

function App() {
  console.log();
  
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/email' element={<EmailForm />}/>
      <Route path='/template' element={<Template/>}/>
      <Route path='/payment' element={<Pembayaran/>}/>
      <Route path='/photo/:id' element={<Photo/>}/>
    </Routes>
    
    </>
  )
}


export default App
