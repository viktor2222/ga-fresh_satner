import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MainSection from '../components/main-home'
import AboutMyself from '../components/about-myself'
import Brands from '../components/brands'
import Services from '../components/services-component'
import Gallery from '../components/portfolio-component'
import Carousel from '../components/carousel'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainSection/>
    <AboutMyself/>
    <Brands/>
    <Services/>
    <Gallery/>
    <Carousel/>
  </Layout>
)

export default IndexPage
