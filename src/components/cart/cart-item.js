import React, { useContext, useState } from "react";
import CartContext from '../../context/cart/cart.context';

const CartItem = ({ product }) => {
    const cart = useContext(CartContext);

    const [ cartCollection, setNewCart] = useState(cart)
    // console.log('this is the cart item props in cart', cartCollection);
  
    return (
        (cartCollection.map(product => {
            return (
                <div className="product cell small-12 grid-x grid-margin-x" id={ product.sku } key={ product.sku }>
                {console.log('cart-item product', product)}
                  <div className="product-image cell small-2"><img src={ product.image } alt={ product.title } /></div>
                  <div className="product-title cell small-4">{ product.title }</div>
                  <div className="product-sku cell small-2">{ product.sku }</div>
                  <div className="product-price cell small-2">${ product.price }</div>
                  <div className="product-add-to-cart cell small-2">
                      <button value={product.sku} onClick={() => {
                          console.log(product.sku)
                          let filteredCartCollection = cartCollection.filter(p => {
                              return p.sku !== product.sku
                            })
                   
                    console.log('this is the removed cartCollection arr', filteredCartCollection)
                    setNewCart(filteredCartCollection)
                  }}  id="add-to-cart"> Remove From Cart</button>
                  </div>
                </div>
            )
        }))
     
    )

}


export default CartItem