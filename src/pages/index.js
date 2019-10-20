import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductList from "../components/product/product-list";
import axios from 'axios';
// Change this page to class component, then add modal and onClick event for 'Add Cart' button
class IndexPage extends Component {
  constructor(){
    super();
    
    this.state = {
      isModalOpen: false,
      products: [],
      selectedItems:[]
    }
  }

  componentDidMount() {
    console.log(this.state.selectedItems)
    axios.get('products.json')
    .then(res => {
      console.log('retrieved data:', res.data);
      const products = res.data.products;
      this.setState({
        products
      }, function() {
        console.log("Products array set in state:", this.state.products);
      })
    })
  }

  addToCart = (e) => {
    console.log(e.target.value);
    const sku = e.target.value;
    const { products, selectedItems } = this.state;
    let selectedProduct = products.filter(product => {
      return product.sku === sku
    })
    console.log('selectedProduct:', selectedProduct);
    selectedItems.push(selectedProduct[0])
    this.setState({
      selectedItems
    }, function() {
      console.log('Added selectedItems Array', this.state.selectedItems);
    })
  } 

  removeFromCart = (e) => {
    console.log(e.target.value);
    const sku = e.target.value;
    const { selectedItems } = this.state;
    let filteredProducts = selectedItems.filter(product => {
      return product.sku !== sku
    })
    console.log('filteredProducts:', filteredProducts);
  }
  
  render() {
    const { products, selectedItems } = this.state;
    return (
      <Layout
      selectedItems={selectedItems}
      removeFromCart={this.removeFromCart}
      >
      <SEO title="Products" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Products</h1>
      <ProductList 
      products={products}
      addToCart={this.addToCart}
      />
    </Layout>
    )
  }
}

export default IndexPage
