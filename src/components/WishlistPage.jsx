import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "./context/WishlistContext"; // Import from your ProductPage.jsx

const WishlistPage = () => {
  const { wishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h2 className="text-2xl font-bold text-[#2D6A4F] mb-4">
          Your Wishlist is Empty
        </h2>
        <p className="text-gray-600">
          Add products to your wishlist to see them here.
        </p>
        <Link
          to="/"
          className="mt-4 bg-[#2D6A4F] text-white px-6 py-2 rounded-md hover:bg-[#1B4332] transition-colors duration-200 inline-block"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-[#2D6A4F] mb-6">Your Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#2D6A4F]">
                {product.name}
              </h3>
              <p className="text-gray-700 mt-1">{product.price}</p>
              <button className="mt-3 w-full bg-[#2D6A4F] text-white py-2 rounded-md hover:bg-[#1B4332] transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
