import React from 'react'
import {Link } from 'react-router-dom';
import ProductPage from './ProductPage';

export default function Product({title,description,image,id}) {
    return (
        <div className="card col-sm-12 col-md-6 col-lg-4 product">
            <img src={image} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <Link to={`product/${id}`} className="btn btn-primary">Details</Link>
            </div>
        </div>
    )
}
