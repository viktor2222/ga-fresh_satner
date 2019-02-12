import { Link } from 'gatsby'
import React from 'react'
// import headerNav from '../styles/header.module.scss'
import { bubble as Menu } from 'react-burger-menu'

class Header extends React.Component {
  showSettings (event) {
    event.preventDefault();
     event.bubble();
  }

  render () {
    return (
      <div>
        <Menu right>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/portfolio">PORTFOLIO</Link>
          <Link to="/">BLOG</Link>
        </Menu>
      </div>
    );
  }
}

export default Header
