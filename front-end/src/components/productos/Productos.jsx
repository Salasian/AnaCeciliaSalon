import React from 'react'
import style from './productos.module.css';

export const Productos = () => {
  return (
    <div className="product-grid">
      <div className="product-item">
        <img src="product-1.jpg" alt="Product 1" />
          <h3>Product 1</h3>
          <p>$19.99</p>
      </div>
    </div>
  )
}

export default Productos;
