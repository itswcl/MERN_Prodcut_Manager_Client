import React, { useEffect, useState } from 'react';
import ProductForm from '../Components/ProductForm';
import DisplayAll from './DisplayAll';
import axios from 'axios';

const Main = () => {
    const [productList, setProductList] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProductList(res.data)
                setLoad(true)
            })
            .catch(err => console.log(err))
    }, [productList])

    return (
        <div>
            <ProductForm />
            <br />
            {
                load
                ? <DisplayAll productList={productList.products} />
                : <p></p>
            }

        </div>
    )
}
export default Main;