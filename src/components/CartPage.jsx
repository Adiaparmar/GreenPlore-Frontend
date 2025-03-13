import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center border p-4 rounded-md">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-20 h-20 object-cover rounded-md mr-4"
            />
            <div className="flex-grow">
              <h3 className="font-semibold">{item.product.name}</h3>
              <p className="text-gray-600">{item.product.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>{" "}
              {/* Display quantity */}
            </div>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              onClick={() => removeFromCart(item.product, item.subcategoryId)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
