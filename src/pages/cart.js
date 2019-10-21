import React, { useState, useContext, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CartContext from '../context/cart/cart.context';
import PriceContext from "../context/cart/price.context";

const Cart = () => {
  

  const cart = useContext(CartContext);
 
const [ cartCollection, setNewCart ] = useState(cart)

const price = useContext(PriceContext)

const [prices, setPrices] = useState(price)

console.log('initialized price object', prices)

console.log('initialized hook:', cartCollection)

  return(
  <Layout>
    <SEO title="Cart" />
    <h1>Cart</h1>
   
    {
    prices.quantity <= 0 
    ?
    <p>No items added in cart</p>
    :
    
    cartCollection.map(product => {
      return (
          (
              product.quantity <= 0 ?
              null
              :
              <div
              className="product cell small-12 grid-x grid-margin-x"
              id={product.sku}
              key={product.sku}
            >
              {console.log("cart-item product", product)}
              <div className="product-image cell small-2">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-title cell small-4">{product.title}</div>
              <div className="product-sku cell small-2">{product.sku}</div>
              <div className="product-price cell small-1">${product.price}</div>
              <div className="product-price cell small-2">
                Quantity: {product.quantity}
                <button
                  value={product.sku}
                  className="inc-dec-button"
                  onClick={e => {
                    let cartCheck = cartCollection.findIndex(
                      item => item.sku === e.target.value
                    )
                    let copyCart = [...cartCollection]
                    copyCart[cartCheck].quantity -= 1
                    setNewCart(copyCart)
                    console.log("cart collection is decreasing", cartCollection)
                    let copyPrices = {...prices}
                    console.log('the subtotal', copyPrices.subtotal, typeof copyPrices.subtotal )
                    prices.subtotal -= product.price
                    prices.quantity --
                    
                    setPrices({...prices})
                    console.log("this is the subtotal", prices)
                  }}
                >
                  -
                </button>
                <button
                  value={product.sku}
                  name={product.price}
                  className="inc-dec-button"
                  onClick={e => {
                    let cartCheck = cartCollection.findIndex(
                      item => item.sku === e.target.value
                    )
                    let copyCart = [...cartCollection]
                    copyCart[cartCheck].quantity += 1
                    setNewCart(copyCart)
                    console.log("cart collection is increasing", cartCollection)
                      console.log('the price', typeof product.price)
                      console.log('the subtotal', prices.subtotal)
                    let copyPrices = {...prices}
                    console.log('the subtotal', copyPrices.subtotal, typeof copyPrices.subtotal )
                    prices.subtotal += product.price
                    prices.quantity ++
                    
                    setPrices({...prices})
                    console.log("this is the subtotal", prices)
  
                  }}
                >
                  +
                </button>
              </div>
              <div className="product-add-to-cart cell small-1">
                <button
                  value={product.sku}
                  onClick={(e) => {

                    
                    setPrices({...prices})

                      let cartCheck = cartCollection.findIndex(
                          item => item.sku === e.target.value
                        )
                        let copyCart = [...cartCollection]


                        prices.subtotal -= (product.price * copyCart[cartCheck].quantity)
                        prices.quantity -= copyCart[cartCheck].quantity
                        setPrices({...prices})
                        copyCart[cartCheck].quantity = 0
                        
                        setNewCart(copyCart)
                        console.log("cart collection is decreasing", cartCollection)
                  }}
                  id="add-to-cart"
                >
                  {" "}
                  Remove From Cart
                </button>
              </div>
            </div>
          )
      
      )
    })
      
      
    }
     <div>Subtotal: ${prices.subtotal}</div>
      <div>Tax: ${prices.subtotal * .1}</div>
      <div>Shipping: ${prices.quantity <= 0 ? 0 : `${(50 + (prices.subtotal * .2)) - (5 * prices.quantity)}`} </div>
      <div>Total: ${prices.quantity <= 0 ? 0 : (prices.subtotal) + (prices.subtotal * .1) + (((50 + (prices.subtotal * .2)) - (5 * prices.quantity)))} </div>
  </Layout>
  )
}

export default Cart
