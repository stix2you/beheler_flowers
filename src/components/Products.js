import React from 'react';
import './Products.css';

const products = [
  { name: 'Bouquet of Native Flowers', description: 'A beautiful bouquet of native flowers that can be dried and their seeds dispersed for self-seeding.' },
  { name: 'Homemade Jam', description: 'Fresh homemade jam made from locally produced fruits.' },
  // Add more products here
];

const Products = () => {
  return (
    <div className="products">
      <div className="products-background" />
      <div className="products-content">
        <h2>My Products</h2>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
