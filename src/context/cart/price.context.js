import { createContext } from 'react';

const PriceContext = createContext(

    {
        subtotal: 0,
        quantity:0
    }
);

export default PriceContext;