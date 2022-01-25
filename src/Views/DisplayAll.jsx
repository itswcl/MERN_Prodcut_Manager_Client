import React from 'react';
import axios from 'axios';

const DisplayAll = (props) => {
    return (
        <div>
            {
                props.productList.map((product, idx) => {
                    return (
                        <p key={product._id}>{product.title} ${product.price}</p>
                    )
                })
            }
        </div>
    );
};

export default DisplayAll;
