import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Nav from '../components/nav'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' keywords='' />
      <Nav />
      <Hero />
    </Layout>
  )
}

export default IndexPage
