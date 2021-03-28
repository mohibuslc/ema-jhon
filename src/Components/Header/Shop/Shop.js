

import React from 'react'; //@ mandotory@ for this line declare about this page under the react:
import fakeData from '../../../fakeData'; // for this  line declare to react have one fakeData:
import {useState} from 'react'; // for this line declare to useState:
import './Shop.css';
import Product from '../../Product/Product.js';





const Shop = () => {

   const first10 = fakeData.slice(0,10)

    const [products, setProducts] = useState(first10)
    return (
        <div className="shop-container">

            <div className="product-container">

                 
            
                {

                    products.map(pd => <Product product={pd}></Product>) // call product from product.js.

                }
                
            </div>
            <div className="cart-container">

                <h2>This Is Cart:</h2>
            </div>
            
        </div>
    );
};

export default Shop;