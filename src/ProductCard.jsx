import React from "react";

function ProductCard({name, price, description}){
    return(
        <div className="product-card">
            <h3 className="product-name">{name}</h3>
            <p className="product-price">${price}</p>
            <p className="product-description">{description}</p>
            <button className="add-to-cart">Agregar al carrito</button>
        </div>
    );
}

export default ProductCard;