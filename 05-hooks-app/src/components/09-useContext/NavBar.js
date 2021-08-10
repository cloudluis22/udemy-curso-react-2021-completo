import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">useContext Hook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact to='/' className="nav-link" aria-current="page" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to='/login' className="nav-link" activeClassName="active">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to='/about' className="nav-link" activeClassName="active">About</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
