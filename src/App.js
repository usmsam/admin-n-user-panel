import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Body from './components/body/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './components/home/Home'
import { Provider } from 'react-redux';
import { store } from './store'

function App() {


 
  
  return (
    <Provider store={store}>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/news' element={<Body />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>


  )
}

export default App