import React, { useState, useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CartItem from "../components/cart/cart-item";
import CartContext from '../context/cart/cart.context';

const Cart = ({ location }) => {
  

  const cart = useContext(CartContext);
 
const [ cartItems, setData ] = useState(cart)

console.log('initialized hook:', cartItems)

  return(
  <Layout>
    <SEO title="Cart" />
    <h1>Cart</h1>
   
    {
    cartItems <= 0 
    ?
    <p>No items added in cart</p>
    :
    
      <CartItem />
  
    }
    
  </Layout>
  )
}

export default Cart
