import React, { useContext, useState } from "react";
import CartContext from '../../context/cart/cart.context';

const ProductItem = ({ product }) => {

  const cart = useContext(CartContext);

  const [ cartCollection, addToCart] = useState(cart)
  console.log('this is the cart item props', cartCollection);

 

  
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
          let cartCheck = cartCollection.findIndex(item => item.sku === e.target.value)
          console.log("This is a cart check", cartCheck)
          if (cartCheck > -1) {
            cartCollection[cartCheck].quantity += 1
            addToCart(cartCollection)
            console.log("cart collection is increasing", cartCollection)

          } else {
            product.quantity = 1
            cartCollection.push(product)
            console.log('this is the added cartCollection arr', cartCollection)
            addToCart(cartCollection)

          }


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
