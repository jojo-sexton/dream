import React from 'react'
import Home from './Home'
import Nav from './Nav'
function App () {
  return (
    <div className='app'>
      <Nav/>
      <div className='content'>
        <Home/>
      </div>
    </div>
  )
}
export default App
