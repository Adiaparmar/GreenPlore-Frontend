import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "./Utils/api"; // Import API function
import "./Wishlist.css"; // Import CSS
// import { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const data = await fetchDataFromApi("/wishlist"); // Fetch wishlist
      // console.log(data);
      setWishlist(data);
    };

    fetchWishlist();
  }, []);

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>

      {wishlist.length > 0 ? (
        wishlist.map((item, index) => (
          <div key={index} className="product">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>{item.description}</p>
            </div>
            <button className="add-to-bag">Add to Bag</button>
          </div>
        ))
      ) : (
        <p>No More Products</p>
      )}
    </div>
  );
};

export default Wishlist;
