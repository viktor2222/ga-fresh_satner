import React from 'react'
import { Link } from 'gatsby'
import MainSection from '../styles/main-home.module.scss'


export default () => (
    <div className={MainSection.main_bg}>
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 col-sm-12">
                    <h2 className={MainSection.h2}>HELLO</h2>
                    <h1 className={MainSection.h1}>I AM RAHI SATNER</h1>
                    <h3 className={MainSection.h3}>SENIOR WORDPRESS DEVELOPER</h3>
                    <Link className={MainSection.btn_active} to="#">HIRE ME</Link>
                    <Link className={MainSection.btn} to="#">GET CV</Link>
                </div>
                <div className="col-md-6">
                    <img className={MainSection.main_title_img} src="./images/banner/home-right.png" alt="main background"/>
                </div>
            </div>
        </div>
    </div>
)