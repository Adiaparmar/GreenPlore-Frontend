import React from "react";
import "./Wishlist.css"; // Make sure to style your Wishlist page

const Wishlist = () => {
  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      <div className="product">
        <img
          src=""
          alt="Eco-friendly bag"
          className="product-image"
        />
        <div className="product-info">
          <h3>Eco-friendly bags</h3>
          <p>$5</p>
          <p>Description</p>
        </div>
        <button className="add-to-bag">Add to Bag</button>
      </div>
      {/* Add more products similarly */}
      <p>No More Products</p>
    </div>
  );
};

export default Wishlist;
