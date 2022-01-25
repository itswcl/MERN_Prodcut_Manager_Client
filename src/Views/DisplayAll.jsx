import React from 'react';
import { Link } from 'react-router-dom'
const DisplayAll = (props) => {
    return (
        <div>
            {
                props.productList.map((product, idx) => {
                    return (
                        <div>
                            <Link to={"/" + product._id} key={product._id}>
                                {product.title}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default DisplayAll;
