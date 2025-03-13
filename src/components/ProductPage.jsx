// import React, { useState, useEffect, useContext } from "react";
// export const WishlistContext = createContext();
import React, { useState, useEffect, useContext, createContext } from "react";
import { WishlistContext } from "./context/WishlistContext";
import { CartContext, CartProvider } from "./CartContext";
import {
  useParams,
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { subcategoryToCategoryMap } from "./HeroCategories";
import { Heart } from "lucide-react";

// Import images (same as before)
import soaps from "../images/soaps.jpeg";
import kitchen from "../images/kitchen.jpeg";
import indoorplanters from "../images/indoorplants.png";
import decor from "../images/decor.png";
import fashion from "../images/fashion.jpeg";
import cosmetics from "../images/cosmetics.jpg";
import candle from "../images/candle.jpeg";
import drink from "../images/drink.jpeg";

// Dummy Products Data (same as before)
const dummyProducts = {
  // ... (same dummyProducts data as provided)
  "natural-soaps": {
    title: "Natural Soaps",
    products: [
      {
        id: 1,
        name: "Lavender Soap",
        price: "$5.99",
        image: cosmetics,
      },
      {
        id: 2,
        name: "Charcoal Soap",
        price: "$6.99",
        image: soaps,
      },
      {
        id: 3,
        name: "Coconut Soap",
        price: "$4.99",
        image: soaps,
      },
      {
        id: 4,
        name: "Mint Soap",
        price: "$7.99",
        image: cosmetics,
      },
    ],
  },
  "skin-body-care": {
    title: "Skin Body Care",
    products: [
      {
        id: 1,
        name: "Body Lotion",
        price: "$12.99",
        image: soaps,
      },
      {
        id: 2,
        name: "Body Scrub",
        price: "$9.99",
        image: cosmetics,
      },
      {
        id: 3,
        name: "Shower Gel",
        price: "$8.99",
        image: cosmetics,
      },
    ],
  },
  "organic-beauty-products": {
    title: "Organic Beauty Products",
    products: [
      {
        id: 1,
        name: "Organic Face Mask",
        price: "$14.99",
        image: cosmetics,
      },
      {
        id: 2,
        name: "Organic Shampoo",
        price: "$16.99",
        image: "/images/cosmetics.jpg",
      },
      {
        id: 3,
        name: "Organic Conditioner",
        price: "$15.99",
        image: cosmetics,
      },
    ],
  },
  "face-care": {
    title: "Face Care",
    products: [
      {
        id: 1,
        name: "Face Wash",
        price: "$10.99",
        image: cosmetics,
      },
      {
        id: 2,
        name: "Face Cream",
        price: "$18.99",
        image: cosmetics,
      },
      {
        id: 3,
        name: "Face Serum",
        price: "$22.99",
        image: cosmetics,
      },
    ],
  },
  "oral-care": {
    title: "Oral Care",
    products: [
      {
        id: 1,
        name: "Bamboo Toothbrush",
        price: "$4.99",
        image: cosmetics,
      },
      {
        id: 2,
        name: "Natural Toothpaste",
        price: "$6.99",
        image: cosmetics,
      },
      {
        id: 3,
        name: "Mouthwash",
        price: "$8.99",
        image: cosmetics,
      },
    ],
  },
  "classic-tableware": {
    title: "Classic Tableware",
    products: [
      {
        id: 1,
        name: "Bamboo Plates",
        price: "$15.99",
        image: kitchen,
      },
      {
        id: 2,
        name: "Wooden Bowls",
        price: "$19.99",
        image: kitchen,
      },
      {
        id: 3,
        name: "Eco Cups",
        price: "$12.99",
        image: kitchen,
      },
    ],
  },
  "kitchen-essentials": {
    title: "Kitchen Essentials",
    products: [
      {
        id: 1,
        name: "Wooden Spoons",
        price: "$9.99",
        image: kitchen,
      },
      {
        id: 2,
        name: "Bamboo Cutting Board",
        price: "$24.99",
        image: kitchen,
      },
      {
        id: 3,
        name: "Eco Dish Cloths",
        price: "$7.99",
        image: kitchen,
      },
    ],
  },
  handicrafts: {
    title: "Handicrafts",
    products: [
      {
        id: 1,
        name: "Handmade Vase",
        price: "$29.99",
        image: decor,
      },
      {
        id: 2,
        name: "Woven Basket",
        price: "$19.99",
        image: decor,
      },
      {
        id: 3,
        name: "Wall Hanging",
        price: "$34.99",
        image: decor,
      },
    ],
  },
  "bamboo-products": {
    title: "Bamboo Products",
    products: [
      {
        id: 1,
        name: "Bamboo Shelf",
        price: "$39.99",
        image: decor,
      },
      {
        id: 2,
        name: "Bamboo Utensil Holder",
        price: "$14.99",
        image: decor,
      },
      {
        id: 3,
        name: "Bamboo Frame",
        price: "$19.99",
        image: decor,
      },
    ],
  },
  "fragrances-candles": {
    title: "Fragrances Candles",
    products: [
      {
        id: 1,
        name: "Lavender Candle",
        price: "$12.99",
        image: candle,
      },
      {
        id: 2,
        name: "Vanilla Candle",
        price: "$12.99",
        image: candle,
      },
      {
        id: 3,
        name: "Citrus Candle",
        price: "$14.99",
        image: candle,
      },
    ],
  },
  "festive-decor": {
    title: "Festive Decor",
    products: [
      {
        id: 1,
        name: "Holiday Wreath",
        price: "$29.99",
        image: decor,
      },
      {
        id: 2,
        name: "Eco Ornaments",
        price: "$19.99",
        image: decor,
      },
      {
        id: 3,
        name: "Festive Lights",
        price: "$24.99",
        image: decor,
      },
    ],
  },
  "hydroponic-planters": {
    title: "Hydroponic Planters",
    products: [
      {
        id: 1,
        name: "Small Hydroponic Planter",
        price: "$19.99",
        image: indoorplanters,
      },
      {
        id: 2,
        name: "Medium Hydroponic Planter",
        price: "$29.99",
        image: indoorplanters,
      },
      {
        id: 3,
        name: "Large Hydroponic Planter",
        price: "$39.99",
        image: indoorplanters,
      },
    ],
  },
  "indoor-planters": {
    title: "Indoor Planters",
    products: [
      {
        id: 1,
        name: "Ceramic Planter",
        price: "$24.99",
        image: indoorplanters,
      },
      {
        id: 2,
        name: "Hanging Planter",
        price: "$19.99",
        image: indoorplanters,
      },
      {
        id: 3,
        name: "Bamboo Planter",
        price: "$22.99",
        image: indoorplanters,
      },
    ],
  },
  "eco-friendly-bags": {
    title: "Eco-Friendly Bags",
    products: [
      {
        id: 1,
        name: "Cotton Tote",
        price: "$14.99",
        image: fashion,
      },
      {
        id: 2,
        name: "Hemp Backpack",
        price: "$49.99",
        image: fashion,
      },
      {
        id: 3,
        name: "Jute Market Bag",
        price: "$19.99",
        image: fashion,
      },
    ],
  },
  "natural-juices": {
    title: "Natural Juices",
    products: [
      {
        id: 1,
        name: "Green Smoothie",
        price: "$7.99",
        image: drink,
      },
      {
        id: 2,
        name: "Berry Juice",
        price: "$6.99",
        image: drink,
      },
      {
        id: 3,
        name: "Citrus Blend",
        price: "$5.99",
        image: drink,
      },
    ],
  },
  "reusable-bags": {
    title: "Reusable Bags",
    products: [
      {
        id: 1,
        name: "Produce Bags (3pc)",
        price: "$9.99",
        image: fashion,
      },
      {
        id: 2,
        name: "Reusable Grocery Bag",
        price: "$12.99",
        image: fashion,
      },
      {
        id: 3,
        name: "Lunch Bag",
        price: "$16.99",
        image: fashion,
      },
    ],
  },
  "travel-essentials": {
    title: "Travel Essentials",
    products: [
      {
        id: 1,
        name: "Bamboo Toothbrush Case",
        price: "$8.99",
        image: fashion,
      },
      {
        id: 2,
        name: "Travel Soap Container",
        price: "$6.99",
        image: fashion,
      },
      {
        id: 3,
        name: "Reusable Travel Utensils",
        price: "$14.99",
        image: fashion,
      },
    ],
  },
  "home-care": {
    title: "Home Care",
    products: [
      {
        id: 1,
        name: "Natural Cleaner",
        price: "$9.99",
        image: candle,
      },
      {
        id: 2,
        name: "Bamboo Dish Brush",
        price: "$7.99",
        image: candle,
      },
      {
        id: 3,
        name: "Eco Laundry Detergent",
        price: "$14.99",
        image: candle,
      },
    ],
  },
  "eco-friendly-stationary": {
    title: "Eco Friendly Stationary",
    products: [
      {
        id: 1,
        name: "Recycled Paper Notebook",
        price: "$8.99",
        image: candle,
      },
      {
        id: 2,
        name: "Bamboo Pen",
        price: "$5.99",
        image: candle,
      },
      {
        id: 3,
        name: "Hemp Pencil Case",
        price: "$12.99",
        image: candle,
      },
    ],
  },
  "food-beverages": {
    title: "Food & Beverages",
    products: [
      {
        id: 1,
        name: "Organic Tea",
        price: "$8.99",
        image: drink,
      },
      {
        id: 2,
        name: "Organic Honey",
        price: "$12.99",
        image: drink,
      },
      {
        id: 3,
        name: "Herbal Infusion",
        price: "$9.99",
        image: drink,
      },
    ],
  },
};

// Existing RelatedSubcategories component (unchanged)
const RelatedSubcategories = ({ currentSubcategory, parentInfo }) => {
  if (!parentInfo) return null;

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-[#2D6A4F] mb-3">
        {parentInfo.categoryName}
      </h3>
      <ul className="space-y-2">
        {parentInfo.subcategories.map((subcategory) => {
          const subcategorySlug = subcategory.link.split("/").pop();
          const isActive = subcategorySlug === currentSubcategory;

          return (
            <li key={subcategory.id}>
              <Link
                to={subcategory.link}
                className={`inline-block py-2 px-3 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-[#2D6A4F] text-white font-semibold"
                    : "hover:bg-[#e0f0ea] text-gray-700 hover:text-[#2D6A4F]"
                }`}
              >
                {subcategory.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ProductPage = () => {
  const { subcategoryId } = useParams();
  const wishlistContext = useContext(WishlistContext);
  const cartContext = useContext(CartContext); // Use CartContext

  // Conditional rendering check
  if (!subcategoryId) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <p className="text-xl text-gray-600">
          Please select a category to view products.
        </p>
      </div>
    );
  }

  const categoryData = dummyProducts[subcategoryId] || {
    title: "Category Not Found",
    products: [],
  };

  const parentInfo = subcategoryToCategoryMap[subcategoryId];

  return (
    <div className="container mx-auto py-8 px-4">
      {cartContext.alertMessage && (
        <div
          className={`absolute top-4 left-1/2 mt-6 bg-green transform -translate-x-1/2 bg-${
            cartContext.alertMessage.type === "success"
              ? "green-100"
              : "red-100"
          } border-${
            cartContext.alertMessage.type === "success"
              ? "green-400"
              : "red-400"
          } text-${
            cartContext.alertMessage.type === "success"
              ? "green-700"
              : "red-700"
          } px-4 py-2 rounded-md transition-opacity duration-300 shadow-md`} // Added shadow
        >
          {cartContext.alertMessage.message}
        </div>
      )}
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 mb-6 -mx-4 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-[#2D6A4F]">
            {categoryData.title}
          </h1>
          <div className="flex items-center mt-1">
            <a href="/" className="text-gray-600 hover:text-[#2D6A4F]">
              Home
            </a>
            <span className="mx-2 text-gray-400">/</span>
            {parentInfo && (
              <>
                <span className="text-gray-600">{parentInfo.categoryName}</span>
                <span className="mx-2 text-gray-400">/</span>
              </>
            )}
            <span className="text-[#2D6A4F]">{categoryData.title}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {parentInfo && (
          <div className="md:w-1/4 lg:w-1/5 order-2 md:order-1">
            <div className="sticky top-4">
              <RelatedSubcategories
                currentSubcategory={subcategoryId}
                parentInfo={parentInfo}
              />
            </div>
          </div>
        )}

        <div
          className={`order-1 md:order-2 ${
            parentInfo ? "md:w-3/4 lg:w-4/5" : "w-full"
          }`}
        >
          {categoryData.products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryData.products.map((product) => (
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
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-[#2D6A4F]">
                        {product.name}
                      </h3>
                      {wishlistContext && subcategoryId && (
                        <button
                          onClick={() =>
                            wishlistContext.addToWishlist(
                              product,
                              subcategoryId
                            )
                          }
                          className="focus:outline-none"
                        >
                          <Heart
                            className={`transition-colors duration-200 ${
                              (console.log(wishlistContext),
                              wishlistContext.isInWishlist(
                                product,
                                subcategoryId
                              )
                                ? "fill-red-500 text-red-500"
                                : "text-gray-400 hover:text-red-500")
                            }`}
                            size={24}
                          />
                        </button>
                      )}
                    </div>
                    <p className="text-gray-700 mt-1">{product.price}</p>
                    <button
                      className="mt-3 w-full bg-[#2D6A4F] text-white py-2 rounded-md hover:bg-[#1B4332] transition-colors duration-200"
                      onClick={() =>
                        cartContext.addToCart(product, subcategoryId)
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No products found for this category
              </p>
              <a
                href="/"
                className="inline-block mt-4 bg-[#2D6A4F] text-white px-6 py-2 rounded-md hover:bg-[#1B4332] transition-colors duration-200"
              >
                Return to Home
              </a>
            </div>
          )}
        </div>

        {parentInfo && (
          <div className="md:hidden order-3 mt-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-[#2D6A4F] mb-3">
                Browse {parentInfo.categoryName}
              </h3>
              <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
                {parentInfo.subcategories.map((subcategory) => {
                  const subcategorySlug = subcategory.link.split("/").pop();
                  const isActive = subcategorySlug === subcategoryId;

                  return (
                    <Link
                      key={subcategory.id}
                      to={subcategory.link}
                      className={`whitespace-nowrap px-3 py-2 rounded-md text-sm ${
                        isActive
                          ? "bg-[#2D6A4F] text-white font-semibold"
                          : "bg-white border border-gray-200 text-gray-700"
                      }`}
                    >
                      {subcategory.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
