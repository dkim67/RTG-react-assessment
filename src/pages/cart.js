import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CartItem from "../components/cart/cart-item"

const Cart = ({ location }) => {
  
  return(
  <Layout>
    <SEO title="Cart" />
    <h1>Cart</h1>
    {console.log("location:", location)}
    {console.log("cart:", location.state.selectedItems)}
    {
    location.state.selectedItems.length <= 0 
    ?
    <p>No items added in cart</p>
    :
     location.state.selectedItems.map(item => (
      <CartItem product={item} key={ item.sku } />
    )) 
    }
    
  </Layout>
  )
}

export default Cart
