import React from 'react'
import Gallery from '../components/portfolio-component'
import Carousel from '../components/carousel'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="container">
      <div className="main_title_bg">
        <h1>PORTFOLIO</h1>
        <a href="/">Home</a>
        <span> - </span>
        <a href="/portfolio">Portfolio</a>
      </div>
    </div>
    <Gallery/>
    <Carousel/>
  </Layout>
)

export default Portfolio