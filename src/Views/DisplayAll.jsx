import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const DisplayAll = (props) => {
    const {removeFromDom} = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => removeFromDom(productId))
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                props.productList.map((product, idx) => {
                    return (
                        <div>
                            <Link to={"/" + product._id} key={product._id}>
                                {product.title}
                            </Link>
                            <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default DisplayAll;
