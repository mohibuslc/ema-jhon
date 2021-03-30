

import React from 'react'; //@ mandotory@ for this line declare about this page under the react:
import fakeData from '../../../fakeData'; // for this  line declare to react have one fakeData:
import {useState} from 'react'; // for this line declare to useState:
import './Shop.css'; // link of Shop style sheet : 
import Cart from '../../Cart/Cart.js';
import Product from '../../Product/Product.js';







const Shop = () => {

   const first10 = fakeData.slice(0,25)

    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([]);

    
    const handle = (product) =>{
        //console.log('Product Added', product);

        const newCart =[...cart,product];
        setCart(newCart);

    } 
    return (
        <div className="shop-container">

            <div className="product-container">

                             
                {
 
                    products.map(pd => <Product 
                        handle = {handle}
                        product={pd}></Product>) // call product from product.js. // working on button 

                }
                
            </div>
            <div className="cart-container">
              
        <Cart cart = {cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;