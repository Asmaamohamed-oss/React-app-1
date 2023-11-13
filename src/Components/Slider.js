import React from 'react'
import img1 from '../imgs/97767959.jpg'
import img2 from '../imgs/Purpose-of-E-commerce-website.jpg'
import img3 from '../imgs/Impact-of-eCommerce-On-Society (1).png'

export default function Slider() {
    return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={img1} className="d-block w-100 img-fluid"/>
            </div>
            <div className="carousel-item">
                <img src={img2} className="d-block w-100 img-fluid" />
            </div>
            <div className="carousel-item">
                <img src={img3} className="d-block w-100 img-fluid" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    )
}
