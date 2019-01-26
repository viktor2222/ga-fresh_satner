import React from "react"
import { Link } from "gatsby"

export default () => (
    <footer>
        <div className="container">
            <Link to="/"><img src="./images/logo.png" alt="logo, satner" /></Link>
            <p>© {new Date().getFullYear()}, Built with Viktor Panchuk</p>
            <Link to="https://www.upwork.com/fl/viktorpanchuk">Upwork</Link>
        </div>
    </footer>
)
