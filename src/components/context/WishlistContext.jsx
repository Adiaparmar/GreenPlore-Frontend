import { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const isAlreadyInWishlist = prevWishlist.some(
        (item) => item.id === product.id
      );
      if (isAlreadyInWishlist) {
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  const isInWishlist = (product) => {
    return wishlist.some((item) => item.id === product.id);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
