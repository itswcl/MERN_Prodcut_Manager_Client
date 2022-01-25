import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom'


const Update = (props) => {
    const { id } = useParams()
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    })
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data.product))
            .catch(err => console.log(err))
    }, [])

    const handleUpdate = e => {
        e.preventDefault();
        axios.put(`/api/products/update/${id}`, {
            title: product.title,
            price: product.price,
            description: product.description
        }).then(res => console.log(res))
            .catch(err => console.log(err))
        history.push("/")
    }

    return (
        <>
            <h1>Update Product</h1>
            <form onSubmit={handleUpdate}>
                <p>
                    <label>Title</label>
                    <input type="text" value={product.title} onChange={e => { setProduct({ ...product, title: e.target.value }) }}></input>
                </p>
                <p>
                    <label>Price</label>
                    <input type="text" value={product.price} onChange={e => { setProduct({ ...product, price: e.target.value }) }}></input>
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" value={product.description} onChange={e => { setProduct({ ...product, description: e.target.value }) }}></input>
                </p>
                <button type="submit">Update</button>
            </form>
        </>
    );
};

export default Update;
