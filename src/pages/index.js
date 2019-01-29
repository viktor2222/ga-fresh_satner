import React from 'react'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import MainSection from '../components/main-home'
import AboutMyself from '../components/about-myself'
import Services from '../components/services-component'

import Carousel from '../components/carousel'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainSection/>
    <AboutMyself/>
    <div className="section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-4">
                <div className="brand_img_container d-flex justify-content-center align-items-center">
                  <img className="brand_img" src="./images/brands/logo1.png" alt="brands" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="brand_img_container d-flex justify-content-center align-items-center">
                  <img className="brand_img" src="./images/brands/logo2.png" alt="brands" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="brand_img_container d-flex justify-content-center align-items-center">
                  <img className="brand_img" src="./images/brands/logo3.png" alt="brands" />
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-4">
                <div className="brand_img_container d-flex justify-content-center align-items-center">
                  <img className="brand_img" src="./images/brands/logo4.png" alt="brands" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="brand_img_container d-flex justify-content-center align-items-center">
                  <img className="brand_img" src="./images/brands/logo5.png" alt="brands" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="brand_img_container d-flex justify-content-center align-items-center">
                  <img className="brand_img" src="./images/brands/logo6.png" alt="brands" />
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-4">
                <div className="brand_img_container d-flex justify-content-center align-items-center">
                  <img className="brand_img" src="./images/brands/logo7.png" alt="brands" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="brand_img_container d-flex justify-content-center align-items-center">
                  <img className="brand_img" src="./images/brands/logo8.png" alt="brands" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="brand_img_container d-flex justify-content-center align-items-center">
                  <img className="brand_img" src="./images/brands/logo9.png" alt="brands" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-end">
            <div className="experience_container d-flex flex-column justify-content-between">
              <div className="d-flex client_info_bg align-items-center">
                <span>10</span>
                <h5>Years Experience Working</h5>
              </div>
              <div className="client_info_bg_call d-flex align-items-center">
                <img src="./images/call.png" alt="call"/>
                <div>
                  <p>CALL US NOW</p>
                  <span>(+1)-800-555-6789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Services/>
    <Carousel/>
  </Layout>
)

export default IndexPage
