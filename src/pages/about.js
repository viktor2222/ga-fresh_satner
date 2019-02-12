import React from 'react'
import AboutMyself from '../components/about-myself'
import Brands from '../components/brands'
import Services from '../components/services-component'
import Gallery from '../components/portfolio-component'
import Carousel from '../components/carousel'

import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="container mobile_main_bg">
      <div className="main_title_bg">
        <h1>ABOUT US</h1>
        <a href="/">Home</a>
        <span> - </span>
        <a href="/about">About</a>
      </div>
    </div>
    <AboutMyself/>
    <Brands/>
    <Services/>
    <Gallery/>
    <Carousel/>
  </Layout>
)

export default About