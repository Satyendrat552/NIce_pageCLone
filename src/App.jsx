import React from 'react'
import Navbar from './components/Home/Navbar'
import { Routes,Route } from 'react-router-dom'
import Download from './pages/Download'
import Features from './pages/Features'
import Templates from './pages/Templates'
import Website from './pages/Website'

import Blog from './pages/Blog'
import Help from './pages/Help'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/Download" element = {<Download/>}/>
      <Route path = "/Features" element = {<Features/>}/>
      <Route path = "/Templates" element = {<Templates/>}/>
      <Route path = "/Website" element = {<Website/>}/>
     
      <Route path = "/Blog" element = {<Blog/>}/>
      <Route path = "/Help" element = {<Help/>}/>
      <Route path = "/Login" element = {<Login/>}/>
      <Route path = "/Register" element = {<Register/>}/>
     </Routes>
    </div>
  )
}

export default App