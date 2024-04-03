import React from 'react'

// this is the navbar component
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/">
                        
                        Album-Collection
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
