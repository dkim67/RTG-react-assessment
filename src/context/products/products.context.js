import { createContext } from 'react';

const products =  [
    {
      "sku": "8509698P",
      "title": "Cindy Crawford Home Bellingham Slate Sofa",
      "price": 655,
      "image": "https://images.rtg-prod.com/cindy-crawford-home-bellingham-slate-sofa_8509698P_image.png?w=150"
    },
    {
      "sku": "10132859",
      "title": "Sofia Vergara Pacific Palisades Navy Plush Sofa",
      "price": 799.99,
      "image": "https://images.rtg-prod.com/sofia-vergara-pacific-palisades-navy-sofa_10132859_image.png?w=150"
    },
    {
      "sku": "15028930",
      "title": "Eric Church Highway To Home Headliner Brown Leather Dual Power Reclining Sofa",
      "price": 1599.99,
      "image": "https://images.rtg-prod.com/eric-church-highway-to-home-headliner-brown-leather-power-plus-reclining-sofa_15028930_image.png?w=150"
    },
    {
      "sku": "10141620",
      "title": "Bonita Springs Gray Sofa",
      "price": 499.99,
      "image": "https://images.rtg-prod.com/bonita-springs-gray-sofa_10141620_image.png?w=150"
    },
    {
      "sku": "14103941",
      "title": "Villa Capri Blue Leather Sofa",
      "price": 899.99,
      "image": "https://images.rtg-prod.com/villa-capri-blue-leather-sofa_14103941_image.png?w=150"
    },
    {
      "sku": "8509697P",
      "title": "Cindy Crawford Home Bellingham Indigo Sofa",
      "price": 655,
      "image": "https://images.rtg-prod.com/cindy-crawford-home-bellingham-indigo-sofa_8509697P_image.png?w=150"
    },
    {
      "sku": "8509695P",
      "title": "Cindy Crawford Home Bellingham Cardinal Microfiber Sofa",
      "price": 655,
      "image": "https://images.rtg-prod.com/cindy-crawford-home-bellingham-cardinal-sofa_8509695P_image.png?w=150"
    },
    {
      "sku": "10132950",
      "title": "Cindy Crawford Home Chelsea Hills Gray Sofa",
      "price": 799.99,
      "image": "https://images.rtg-prod.com/cindy-crawford-home-chelsea-hills-gray-sofa_10132950_image.png?w=150"
    },
    {
      "sku": "10197704",
      "title": "Ivyleigh Silver Sofa",
      "price": 599.99,
      "image": "https://images.rtg-prod.com/ivyleigh-silver-sofa_10197704_image.png?w=150"
    },
    {
      "sku": "10131403",
      "title": "Court Street Beige Sofa",
      "price": 599.99,
      "image": "https://images.rtg-prod.com/court-street-beige-sofa_10131403_image.png?w=150"
    }
  ];

const ProductsContext = createContext(products);

export default ProductsContext;