import React from 'react';

const cart = (props) => {
    const cart = props.cart

    let total = 0;
    for( let i = 0; i<cart.length; i++){
        const pd = cart[i];
        total =total+pd.price;


    }

    let shipping = 0;
    if (total > 35){
        shipping = 0
    }
    else if(total > 15){
        shipping = 0
    }
    else if (total > 0){

        shipping =12.99;
    }

    return (
        <div>
          <h4> Order Summery:</h4>
          <h3>Items Orders:{cart.length}</h3>
          <p> Shipping cost:{shipping} </p>
          <p>Total Price : {total+shipping}</p>
        </div>
    );
};

export default cart;