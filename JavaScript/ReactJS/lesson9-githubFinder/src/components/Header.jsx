import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <a className="navbar-brand" href="https://github.com" rel='noreferrer' target='_blank'><i className="fa-brands fa-github"></i> Github</a>
                    </ul>
                  
                </div>
            </div>
        </nav>

    )
}

export default Header