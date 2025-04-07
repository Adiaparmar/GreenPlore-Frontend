// import { useState } from "react";

// // Importing images for categories
// import HC1 from "../images/Category Images/Handicraft/HC 1.jpeg";
// import HC2 from "../images/Category Images/Handicraft/HC 2.jpeg";
// import HC3 from "../images/Category Images/Handicraft/HC 3.jpeg";
// import HC4 from "../images/Category Images/Handicraft/HC 4.jpeg";
// import HC5 from "../images/Category Images/Handicraft/HC 5.jpeg";
// import HC6 from "../images/Category Images/Handicraft/HC 6.jpeg";

// import HD1 from "../images/Category Images/Home Decor/HD 1.jpeg";
// import HD2 from "../images/Category Images/Home Decor/HD 2.jpeg";
// import HD3 from "../images/Category Images/Home Decor/HD 3.jpeg";
// import HD4 from "../images/Category Images/Home Decor/HD 4.jpeg";
// import HD5 from "../images/Category Images/Home Decor/HD 5.jpeg";
// import HD6 from "../images/Category Images/Home Decor/HD 6.jpeg";

// import IP1 from "../images/Category Images/Indoor Plant/IP 1.jpeg";
// import IP2 from "../images/Category Images/Indoor Plant/IP 2.jpeg";
// import IP3 from "../images/Category Images/Indoor Plant/IP 3.jpeg";
// import IP4 from "../images/Category Images/Indoor Plant/IP 4.jpeg";
// import IP5 from "../images/Category Images/Indoor Plant/IP 5.jpeg";
// import IP6 from "../images/Category Images/Indoor Plant/IP 6.png";

// import PC1 from "../images/Category Images/Personal Care/PC 1.jpeg";
// import PC2 from "../images/Category Images/Personal Care/PC 2.jpeg";
// import PC3 from "../images/Category Images/Personal Care/PC 3.jpeg";
// import PC4 from "../images/Category Images/Personal Care/PC 4.jpeg";
// import PC5 from "../images/Category Images/Personal Care/PC 5.jpeg";
// import PC6 from "../images/Category Images/Personal Care/PC 6.jpeg";

// import SC1 from "../images/Category Images/Soap and Cosmetics/soap 1.jpeg";
// import SC2 from "../images/Category Images/Soap and Cosmetics/soap 2.jpeg";
// import SC3 from "../images/Category Images/Soap and Cosmetics/soap 3.jpeg";
// import SC4 from "../images/Category Images/Soap and Cosmetics/soap 4.jpeg";
// import SC5 from "../images/Category Images/Soap and Cosmetics/soap 5.jpeg";
// import SC6 from "../images/Category Images/Soap and Cosmetics/soap 6.jpeg";

// // Array containing categories and their images
// const slides = [
//   {
//     text: "Handicrafts",
//     images: [HC2, HC1, HC3, HC4, HC5, HC6],
//   },
//   {
//     text: "Home Decor",
//     images: [HD1, HD2, HD3, HD4, HD5, HD6],
//   },
//   {
//     text: "Indoor Plants",
//     images: [IP1, IP2, IP3, IP4, IP5, IP6],
//   },
//   {
//     text: "Personal Care",
//     images: [PC1, PC2, PC3, PC4, PC5, PC6],
//   },
//   {
//     text: "Soap and Cosmetics",
//     images: [SC1, SC2, SC3, SC4, SC5, SC6],
//   },
// ];

// // "Trending" row images (one from each category)
// const trendingImages = [
//   slides[0].images[0], // First image from Handicrafts
//   slides[1].images[0], // First image from Home Decor
//   slides[2].images[0], // First image from Indoor Plants
//   slides[3].images[0], // First image from Personal Care
//   slides[4].images[0], // First image from Soap and Cosmetics
// ];

// const PhotoSliderWeb = () => {
//   return (
//     <div className="relative w-full max-w-full mx-auto overflow-hidden bg-[#EDF1F1]">
//       {/* Displaying images row by row */}
//       <div className="space-y-8">
//         {/* Trending Row */}
//         <div>
//           <div
//             className="text-5xl p-4 flex justify-center text-[#255640]"
//             style={{
//               fontFamily: "Jacques Francois, serif",
//               fontSize: "3rem",
//             }}
//           >
//             Trending
//           </div>
//           <div className="grid grid-cols-5 gap-5 center">
//             {trendingImages.map((image, index) => (
//               <div
//                 key={index}
//                 className="h-96 relative hover:scale-105 transition-transform duration-300 cursor-pointer"
//               >
//                 <div className="h-3/4" style={{ backgroundColor: "#C2D2CA" }}>
//                   <img
//                     src={image}
//                     alt={`trending-image-${index}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div
//                   className="h-1/4"
//                   style={{ backgroundColor: "#F5F9F7" }}
//                 ></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Original rows from the slides array */}
//         {slides.map((slide, slideIndex) => (
//           <div key={slideIndex}>
//             <div
//               className="text-5xl p-4 flex justify-center text-[#255640]"
//               style={{
//                 fontFamily: "Jacques Francois, serif",
//                 fontSize: "3rem",
//               }}
//             >
//               {slide.text} {/* Displaying slide text as the header */}
//             </div>
//             <div className="grid grid-cols-6 gap-5 center">
//               {slide.images.map((image, imageIndex) => (
//                 <div
//                   key={imageIndex}
//                   className="h-96 relative hover:scale-105 transition-transform duration-300 cursor-pointer"
//                 >
//                   <div className="h-3/4" style={{ backgroundColor: "#C2D2CA" }}>
//                     <img
//                       src={image}
//                       alt={`slide-${slideIndex}-image-${imageIndex}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div
//                     className="h-1/4"
//                     style={{ backgroundColor: "#F5F9F7" }}
//                   ></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const PhotoSlider = () => {
//   return (
//     <div className="mt-6 mb-6">
//       <PhotoSliderWeb />
//     </div>
//   );
// };

// export default PhotoSlider;

// API Fetching :-

// import { useState } from "react";
import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "./Utils/api";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PhotoSlider = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);

  // Hardcoded category names
  const categoryNames = [
    "Organic Beauty Products",
    "Face Care",
    "Oral Care",
    "Fragrances & Candles",
    "Festive Decor",
    "Travel Planters",
    "Travel Essential",
  ];

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetchDataFromApi("/api/products");
        const products = response?.products || [];

        if (Array.isArray(products)) {
          const processedCategories = {};
          let allProducts = [];

          products.forEach((product, index) => {
            // Assign category from hardcoded list in a cyclic manner
            let category = categoryNames[index % categoryNames.length];

            if (!processedCategories[category]) {
              processedCategories[category] = [];
            }

            const productData = {
              name: product.name.split(" ").slice(0, 6).join(" "),
              images: product.images || [],
            };

            processedCategories[category].push(productData);
            allProducts.push(productData);
          });

          // Limit each category to max 6 products
          Object.keys(processedCategories).forEach((key) => {
            processedCategories[key] = processedCategories[key].slice(0, 6);
          });

          // Set the categories, excluding "Trending"
          setCategories(processedCategories);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, []);

  const shiftCategory = (category, direction) => {
    setCategories((prevCategories) => {
      const items = prevCategories[category];
      if (!items || items.length === 0) return prevCategories;

      let newItems = [...items];
      if (direction === 1) {
        newItems = [...newItems.slice(1), newItems[0]];
      } else {
        newItems = [newItems[newItems.length - 1], ...newItems.slice(0, -1)];
      }

      return { ...prevCategories, [category]: newItems };
    });
  };

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden bg-[#EDF1F1] p-6">
      {loading ? (
        <p className="text-center text-xl font-semibold">Loading...</p>
      ) : Object.keys(categories).length > 0 ? (
        <div className="space-y-8">
          {Object.entries(categories).map(([category, items], index) => (
            <div key={index}>
              <div
                className="text-5xl p-4 flex justify-center text-[#255640]"
                style={{
                  fontFamily: "Jacques Francois, serif",
                  fontSize: "3rem",
                }}
              >
                {category}
              </div>
              <div className="relative flex items-center">
                <button
                  className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
                  onClick={() => shiftCategory(category, -1)}
                >
                  <FaArrowLeft size={24} />
                </button>
                <div className="flex gap-4 mx-auto transition-transform duration-500 ease-in-out overflow-hidden">
                  {items &&
                    items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="h-[330px] w-[220px] flex-shrink-0 relative hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => navigate("/product-details")}
                      >
                        <div className="h-4/4 bg-gray-300 center">
                          {item &&
                          item.images &&
                          Array.isArray(item.images) &&
                          item.images.length > 0 ? (
                            <img
                              src={`http://localhost:4000/uploads/${item.images[0]}`}
                              alt={`${category}-image-${itemIndex}`}
                              className="w-full h-full object-cover"
                              onError={(e) => (e.target.style.display = "none")}
                            />
                          ) : (
                            <p className="absolute top-2 left-2 text-sm text-white bg-black px-2 py-1 rounded">
                              No Image Available
                            </p>
                          )}
                        </div>
                        <div className="h-1/5 bg-[#F5F9F7] flex items-center justify-center font-semibold text-lg">
                          {item && item.name}
                        </div>
                      </div>
                    ))}
                </div>
                <button
                  className="absolute right-0 z-10 bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
                  onClick={() => shiftCategory(category, 1)}
                >
                  <FaArrowRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl font-semibold">
          No categories found.
        </p>
      )}
    </div>
  );
};

export default PhotoSlider;
