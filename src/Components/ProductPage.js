import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function ProductPage() {
    const params = useParams()
    const productId = params.productId;
    const [productDetails,setProductDetails] = useState({})
    console.log(productId);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(data => {
                console.log(data);
                setProductDetails(data)
            })
    },[productId])
    return (
        <div className="container">
            <div className="card my-3 product">
                <div className="row g-0">
                    <div className="col-md-4 img-container">
                        <img src={productDetails.image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{productDetails.title}</h5>
                            <p className="card-text">{productDetails.description}</p>
                            <p className="card-text"><strong>Category:</strong> {productDetails.category}</p>
                            <p className="card-text"><strong>Price:</strong> {productDetails.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
