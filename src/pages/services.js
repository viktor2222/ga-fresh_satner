import React from 'react'
import Services from '../components/services-component'
import Gallery from '../components/portfolio-component'
import Carousel from '../components/carousel'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <div className="container mobile_main_bg">
      <div className="main_title_bg">
        <h1>SERVICES</h1>
        <a href="/">Home</a>
        <span> - </span>
        <a href="/services">Services</a>
      </div>
    </div>
    <Services/>
    <Gallery/>
    <Carousel/>
  </Layout>
)

export default ServicesPage