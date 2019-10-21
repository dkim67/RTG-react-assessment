import React, { useContext, useState } from "react"
import ProductItem from "./product-item"
import "../../assets/css/components/product/product-list.css"
import ProductsContext from '../../context/products/products.context';
import CartContext from '../../context/cart/cart.context';

const ProductList = ({ addToCart, match }) => {
  

  const products = useContext(ProductsContext);
  
  const cart = useContext(CartContext);
 
  const [ cartItems, setData ] = useState(cart)
  
  

  return(
    <div className="product-list grid-x grid-margin-y">
    
      { products.map(product => (
        <ProductItem product={product} addToCart={addToCart} cartItems={[...cartItems]} key={ product.sku } />
      )) }
    </div>
  )
}
export default ProductList
