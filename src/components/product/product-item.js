import React, { useContext, useState } from "react";
import CartContext from '../../context/cart/cart.context';
import PriceContext from "../../context/cart/price.context";


const ProductItem = ({ product }) => {

  const cart = useContext(CartContext);

  const [ cartCollection, addToCart] = useState(cart)

  const price = useContext(PriceContext)

  const [prices, setPrices] = useState(price)
  

 

  
  return (
    <div
      className="product cell small-12 grid-x grid-margin-x"
      id={product.sku}
    >
      <div className="product-image cell small-2">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-title cell small-4">{product.title}</div>
      <div className="product-sku cell small-2">{product.sku}</div>
      <div className="product-price cell small-2">${product.price}</div>
      <div className="product-add-to-cart cell small-2">
        <button value={product.sku} onClick={(e) => {
          let cartCheck = cartCollection.findIndex(item => item.sku === e.target.value);
          
          if (cartCheck > -1) {
            cartCollection[cartCheck].quantity += 1
            addToCart(cartCollection)
            
          } else {
            product.quantity = 1
            cartCollection.push(product)
            
            addToCart(cartCollection)
          }
          prices.subtotal += product.price 
          prices.quantity ++
          
          setPrices(prices)
          

        }} 
        id="add-to-cart">
          {" "}
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductItem
