import React from 'react';


function ProductCard({ items }) {
  return (
    <div className="container">
      <div className="card-container">
        {/* Iterate through each item and create a card for it */}
        {items.map((item) => (
          <div key={item.id} className="card">
            <h2 className="card-text">{item.name}</h2>
            <p className="card-price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
