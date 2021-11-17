import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <h1>Sweet Dreams</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/print">Print</Link>
      </div>

    </div>
  )
}
export default Nav
