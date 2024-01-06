import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../Hero/Hero'
import Slider from '../Navbar/Corousel'
import Product from '../Product/Product'
import { electronic, product } from '../Utils/Product'
import Banner from '../Banner/Banner'

function Home() {
  return (
    <Layout>
        {/* <Hero/> */}
        <Slider/>
        <Product product={product} />
        <Banner/>
        <Product product={electronic}/>
    </Layout>
  )
}

export default Home