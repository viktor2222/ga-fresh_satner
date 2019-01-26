import React from "react"
import { Link } from 'gatsby'
import MainSection from '../styles/main-home.module.scss'

export default () => (
    <div className="container">
        <div className="row d-flex align-items-center flex-row-reverse">
            <div className="col-md-6 col-sm-12">
                <h4 className={MainSection.h4}>LET’S INTRODUCE ABOUT MYSELF</h4>
                <p className={MainSection.p}>Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their. Beast creepeth. Fish days.</p>
                <p className={MainSection.p} style={{ marginBottom: `40px` }}>Is give may shall likeness made yielding spirit a itself together created after sea is in beast beginning signs open god you're gathering whose gathered cattle let. Creature whales fruit unto meat the life beginning all in under give two.</p>
                <Link className={MainSection.btn_active} to="#">DOWNLOAD CV</Link>
            </div>
            <div className="col-md-6">
                <img className={MainSection.main_title_img} src="./images/about-us.png" alt="about, myself"/>
            </div>
        </div>
    </div>
)