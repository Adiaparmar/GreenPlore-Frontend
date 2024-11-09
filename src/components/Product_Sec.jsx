import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product_Sec.css";

const MakeupPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this URL with the actual API endpoint
    axios
      .get("your-api-endpoint-here") // API URL goes here
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="makeup-page-container">
      <header className="makeup-header">
        <h1>Makeup</h1>
        <div className="makeup-header-image">
          <img src="/path_to_image_in_public_folder.jpg" alt="Makeup" />
          <div className="makeup-header-text">
            <h2>Flawless Makeup</h2>
            <p>Never ask a girl with winged eyeliner why she's late.</p>
          </div>
        </div>
      </header>

      <div className="products-count">{products.length} Products</div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.company_name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <button className="select-button">SELECT</button>
              <button className="wishlist-button">♡</button>
            </div>
          </div>
        ))}
      </div>

      <div className="filters">
        <button>Sort by</button>
        <button>Filter</button>
      </div>
    </div>
  );
};

export default MakeupPage;
