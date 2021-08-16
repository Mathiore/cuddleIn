import React from 'react';
import data from '../data.jsx';
import './styles/Card.css';

export default Card =>
    <div className="card-hold">
        {
            data.products.map(products => (
            <div className="card">
                <a href="product.html"><img className="medium" src={products.image} alt="product"></img></a>
                <div className="card-body">
                    <a href="product.html"><h2>{products.name}</h2></a>
                </div>
                <div className="desc">
                    <p>{products.desc}</p>
                </div>
                <div className="price">
                    R${products.price}
                </div>
            </div>
            ))
        }
    </div>