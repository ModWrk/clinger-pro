import React from 'react'

import Layout from '../components/layout'
import Listing from '../components/listing'

const Blog = ({location}) => (
  <Layout location={location}>
    <Listing />
  </Layout>
)

export default Blog