import { Link } from 'gatsby'
import React from 'react'
import headerNav from '../styles/header.module.scss'

const Header = () => (
  <div
    style={{
      background: `white`,
      minHeight: `80px`,
      boxShadow: `0 2px 20px whitesmoke`,
    }}
    className="d-flex align-items-center"
  >
    <div className="container">
    <div className={headerNav.menu}>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
      <Link to="/"><img src="/images/logo.png" alt="logo, satner" /></Link>
        <ul className="d-flex">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/portfolio">PORTFOLIO</Link></li>
          <li><Link to="#">BLOG</Link></li>
        </ul>
      </div>
    </div>
    </div>
  </div>
)

export default Header
