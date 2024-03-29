import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LangContext } from '../context/LangContext'


const Header = () => {
  const [lang,setLang]= useContext(LangContext);
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to="/">News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/news">News</NavLink>
        </li>
    
      </ul>

      <div>
        <Link className='btn btn-dark' to="/dashboard">Dashboard</Link>
        <button className='btn btn-warning ms-3' onClick={()=>{
          lang==='AZ'?setLang("EN"):setLang("AZ");
        }}>{lang}</button>
      </div>
    
    </div>
  </div>
</nav>

  )
}

export default Header