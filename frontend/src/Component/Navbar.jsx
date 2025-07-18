import React, { useState } from 'react'
import "./Navbar.css"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className='main-container'>
            <div className='container'>
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`navbar-nav${menuOpen ? ' open' : ''}`}>

                    <img
                        src="https://www.advik.co.in/wp-content/uploads/2025/04/25.svg"
                        alt="25"
                    />
                    <img
                        src="https://www.advik.co.in/wp-content/uploads/2023/08/logo.svg"
                        alt="Advik company logo"
                    />
                    <a className="nav-link">
                        COMPANY
                        <span className="dropdown-icon">
                            {/* Down arrow SVG */}
                            <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                                <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                    </a>
                    <a className="nav-link">
                        TECHNOLOGY
                        <span className="dropdown-icon">
                            <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                                <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                    </a>
                    <a className="nav-link">CAREER</a>
                </nav>
            </div>
            <div className='container2'>
                <a>NEWSROOM</a>
                <a>CONTACT</a>
                <img src='./search-icon.png' alt="search icon" />
            </div>
        </div>
    )
}

export default Navbar