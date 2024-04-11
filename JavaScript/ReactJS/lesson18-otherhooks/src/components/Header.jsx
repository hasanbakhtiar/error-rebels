import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">UseLayoutEffect</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/uih">UseImperativeHandle</NavLink>
          </li>
        <li className="nav-item">
          
          <NavLink className="nav-link" to="/um">UseMemo</NavLink>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>

  )
}

export default Header