import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    })

    const onSubmitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/products/new", {
            title: product.title,
            price: product.price,
            description: product.description
        }).then(res => console.log(res))
            .catch(err => console.log({error: err}))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <input type="text" onChange={e => setProduct({ ...product, title: e.target.value })} value={product.title}/>
            </p>
            <p>
                <label>Price</label>
                <input type="text" onChange={e => setProduct({ ...product, price: e.target.value })} value={product.price}/>
            </p>
            <p>
                <label>Description</label>
                <input type="text" onChange={e => setProduct({ ...product, description: e.target.value })} value={product.description}/>
            </p>
            <button>Add</button>
        </form>
    );
};

export default ProductForm;
