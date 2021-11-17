import React from 'react'
import Home from './Home'
import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
import Print from './Print'
function App () {
  return (
    <>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/print' element={<Print />} />
      </Routes>
    </>
  )
}
export default App
