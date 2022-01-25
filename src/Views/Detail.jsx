import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom"

const Detail = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data.product))
            .catch(err => console.log(err))
    }, [])
    return (

        <div>
            {/* {JSON.stringify(product)} */}
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/" + product._id + "/edit"} key={product._id}>
                Edit
            </Link>
        </div>
    );
};

export default Detail;
