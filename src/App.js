import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Body from './components/body/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './components/home/Home'
import { Provider } from 'react-redux';
import { store } from './store'
import Helper from './components/helper/Helper'

function App() {


  const [userStatus, setUserStatus] = useState(false)
  
  return (
    <Provider store={store}>
      <BrowserRouter>

      <Helper/>
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