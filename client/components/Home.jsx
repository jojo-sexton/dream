import React from 'react'
import Story from './Story'
import Dreams from './Dreams'
import Future from './Future'
import Money from './Money'

const Home = () => {
  return (
    <div className = "home" >
      <Story/>
      <Dreams/>
      <Future/>
      <Money/>
    </div>
  )
}
export default Home
