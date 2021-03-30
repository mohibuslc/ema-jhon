import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../Product/product.css';
const Product = (props) => {
    //console.log(props)
    const{img , name , seller , price, stock,shipping,key} = props.product
    return (
        <div className= "product-container">
        <div>

        <img src ={img}alt=""/> 
        </div>
        <div>


        <h3 className="product-name">{name}</h3> 
          <br/>
        <p><small>cell by: {seller}</small></p>
        <br/>
        <p>PRICE: {price} </p>
        <p>Shipping Cost:{shipping}</p>
        <p><small> only {stock} Item Left - make soon place Order</small></p>
        <p>Key:{key}</p>
        <button className="MainButton"
        
         onClick = {() => props.handle(props.product)}>
          
          <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
        </div>

                        
            
        </div>
    );
};

export default Product;