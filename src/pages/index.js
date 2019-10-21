import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductList from "../components/product/product-list";
import axios from 'axios';
// Change this page to class component, then add modal and onClick event for 'Add Cart' button
const IndexPage = () => {
  
  
    return (
      <Layout
      
      >
      <SEO title="Products" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Products</h1>
      <ProductList/>
    </Layout>
    )
  
}

export default IndexPage
