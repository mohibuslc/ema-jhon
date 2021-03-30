import React from 'react';

const cart = (props) => {
    const cart = props.cart

    let total = 0;
    for( let i = 0; i<cart.length; i++){
        const pd = cart[i];
        total =total+pd.price;


    }
    return (
        <div>
          <h4> Order Summery:</h4>
          <h3>Items Orders:{cart.length}</h3>
          <p>Total Price : {total}</p>
        </div>
    );
};

export default cart;