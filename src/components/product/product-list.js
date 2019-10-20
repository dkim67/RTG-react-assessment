import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProductItem from "./product-item"
import "../../assets/css/components/product/product-list.css"

const ProductList = ({ products, addToCart }) => {
  const { allDataJson } = useStaticQuery(
    graphql`
      query {
        allDataJson {
          edges {
            node {
              products {
                sku
                title
                price
                image
              }
            }
          }
        }
      }
    `
  )

  return(
    <div className="product-list grid-x grid-margin-y">
    {console.log('products passed', addToCart)}
      { products.map(product => (
        <ProductItem product={product} addToCart={addToCart} key={ product.sku } />
      )) }
    </div>
  )
}
export default ProductList
