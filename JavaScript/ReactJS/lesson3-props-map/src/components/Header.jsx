import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <a className="navbar-brand" href="/">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Service</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Blog</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Contact</a>
        </li>
      
    
      
      </ul>
  
    </div>
  </div>
</nav>

    )
  }
}

export default Header