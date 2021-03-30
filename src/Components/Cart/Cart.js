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
        
        const tax = (total/10).toFixed(2);
        const GrandTotal = (total+shipping+Number(tax)).toFixed(2);

        const RoundDigit =num =>{ // Makeing This Function for Making Digit Round figure: 
            const precision = num.toFixed(2);
            return Number (precision);
        }
        return (
            <div>
            <h4> Order Summery:</h4>
            <h3>Items Orders:{cart.length}</h3>
            <p>Product-Price: {RoundDigit(total)}</p>
            <p> Shipping cost:{shipping} </p>
            <p>TAX+VAT:{tax}</p>
            <p>Total Price : {GrandTotal}</p>

            </div>
        );
    };

    export default cart;