import React from 'react';
import data from '../data.jsx';
import './styles/Card.css';

export default Card =>
    <div className="card-hold">
        {
            data.product.map(product => (
            <div key={product._id} className="card">
                <a href={`/product/${product._id}`}><img className="medium" src={product.image} alt={product.name}></img></a>
                <div className="card-body">
                    <a href={`/product/${product._id}`}><h2>{product.name}</h2></a>
                </div>
                <div className="desc">
                    <p>{product.desc}</p>
                </div>
                <div className="price">
                    R${product.price}
                </div>
            </div>
            ))
        }
    </div>