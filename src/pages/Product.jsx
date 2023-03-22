import React from 'react'
import Products from '../component/home/Products'
import {Helmet} from "react-helmet";

const Product = () => {
  return (
    <>
    <Helmet>
          <title>Product page</title>
    </Helmet>
      <Products />
    </>
  )
}

export default Product