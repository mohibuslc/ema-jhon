import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../Product/product.css';
const Product = (props) => {
    console.log(props.product)
    const{img , name , seller , price, stock,shipping} = props.product
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
        <button className="MainButton" ><FontAwesomeIcon icon={faCoffee} />Add to Cart</button>
        </div>

                        
            
        </div>
    );
};

export default Product;