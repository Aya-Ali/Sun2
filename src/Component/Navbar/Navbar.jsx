import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/freshcart-logo.svg'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary-subtle">
      <div className="container-fluid">
        <Link className="navbar-brand" to="home">
          <img src={logo} alt="" />


        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link" to="home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="products">products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="brands">Brands</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="category">category</NavLink>
            </li>

          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex align-items-center">
              <i className='fa-brands fa-facebook mx-2'></i>
              <i className='fa-brands fa-twitter mx-2'></i>
              <i className='fa-brands fa-instagram mx-2'></i>
              <i className='fa-brands fa-youtube mx-2'></i>
              <i className='fa-brands fa-spotify mx-2'></i>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="login">login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">register</NavLink>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  )
}
