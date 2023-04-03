import React from 'react'
import Header from './Hero'
import Services from './Services'
import Propos from './Propos'
import References from './References'
import Certifications from './Certifications'
import Contact from './Contact '
import Layout from '../Layout'

const Index = () => {
  return (
    <Layout>
        <Header />
        <Services />
        <Propos />
        <References />
        <Certifications />
        <Contact />
    </Layout>
  )
}

export default Index