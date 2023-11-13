import React, { useEffect, useRef, useState } from 'react'
import Product from './Product'

export default function ProductsList() {
    const api_url = 'https://fakestoreapi.com/products'
    const [products,setProducts]= useState([])
    const [categories,setCategories]= useState([])
    const allBtns = document.querySelectorAll("button.nav-link")

    function handelActiveBtn(e){
        allBtns.forEach((btn)=> btn.classList.remove("active"))
        e.target.classList.add("active")
    }
    function fetchProductsOrCategories(url,setFun){
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setFun(data)
        })
    }
    useEffect(()=>{
        fetchProductsOrCategories(`${api_url}`,setProducts)
        fetchProductsOrCategories(`${api_url}/categories`,setCategories)
    },[])
    return (
    <div className='py-5 products'>
        <h2>Our Products</h2>
        <div className="container">
            <div className="card mb-3">
                <div className="card-header">
                    <ul className='nav nav-tabs card-header-tabs'>
                        <li className='nav-item'>
                            <button className='nav-link active' onClick={(e)=>{
                                handelActiveBtn(e)
                                fetchProductsOrCategories(`${api_url}`,setProducts)
                            }}>All</button>
                        </li>
                        {categories.map(cat => <li className='nav-item' key={cat}>
                            <button className='nav-link' onClick={(e)=>{
                                handelActiveBtn(e)
                                fetchProductsOrCategories(`${api_url}/category/${cat}`,setProducts)
                            }}>{cat}</button>
                            </li>)}
                    </ul>
                </div>
            </div>
            <div className="row gy-2">
                {products.map(product=>{
                    return <Product key={product.id} {...product}/>
                })}
            </div>
        </div>
    </div>
    )
}
