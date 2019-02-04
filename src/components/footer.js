import React from "react"
import { Link } from "gatsby"
import Footer from "../styles/footer.module.scss"

export default () => (
    <footer>
        <div className="container">
          <div className={Footer.bottom_bg}>
            <div className="d-flex justify-content-center flex-column">
              <h3>GET UPDATE FROM ANYWHERE</h3>
              <p>Bearing Void gathering light light his eavening unto dont afraid.</p>
              <form id="form" className={Footer.container_form}>
                <input type="email" name="Email" placeholder="Email address" required />
                <button type="submit">GET STARTED</button>
              </form>
            </div>
          </div>
          <div className={Footer.author_info}>
            <div className="d-flex flex-column align-items-center">
              <Link to="/"><img src="/images/logo.png" alt="logo, satner" /></Link>
              <p>© {new Date().getFullYear()}, Built with Viktor Panchuk</p>
              <Link to="https://www.upwork.com/fl/viktorpanchuk">Upwork</Link>
            </div>
          </div>

        </div>
    </footer>
)
