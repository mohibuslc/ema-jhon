

import React from 'react'; //@ mandotory@ for this line declare about this page under the react:
import fakeData from '../../../fakeData'; // for this  line declare to react have one fakeData:
import {useState} from 'react'; // for this line declare to useState:



const Shop = () => {

    const first10 = fakeData.slice(5,20); // 1st 10 data 

    const [products, setProducts] = useState(first10);

    return (
        <div>
            <h1>This All Product Are abulavale</h1>

            <h3>{products.length}</h3>
            <ul>
                {

                    products.map(pd => <li>{pd.name}</li>)
                }
                </ul>
            
        </div>
    );
};

export default Shop;