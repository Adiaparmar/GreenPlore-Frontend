// import bags from "../images/bags.jpg";
// import soaps from "../images/soaps.jpeg";
// import kitchen from "../images/kitchen.jpeg";
// import indoorplanters from "../images/indoorplants.png";
// import decor from "../images/decor.png";
// import fashion from "../images/fashion.jpeg";

// import cosmetics from "../images/cosmetics.jpg";
// import candle from "../images/candle.jpeg";
// import cleaner from "../images/cleaner.jpeg";
// import drink from "../images/drink.jpeg";
// const Menu = [
//   {
//     id: 1,
//     name: "Natural Soaps",
//     link: "/#",
//     image: soaps,
//   },
//   {
//     id: 2,
//     name: "Skin & Body Care",
//     link: "/#",
//     image: kitchen,
//   },
//   {
//     id: 3,
//     name: "Classic Tableware",
//     link: "/#",
//     image: indoorplanters,
//   },
//   {
//     id: 4,
//     name: "Kitchen Essential",
//     link: "/#",
//     image: decor,
//   },
//   {
//     id: 5,
//     name: "Handicraft",
//     link: "/#",
//     image: fashion,
//   },
//   {
//     id: 6,
//     name: "Bamboo Products",
//     link: "/#",
//     image: drink,
//   },
//   {
//     id: 7,
//     name: "Hydroponic Planter",
//     link: "/#",
//     image: cosmetics,
//   },
//   {
//     id: 8,
//     name: "Indoor Planter",
//     link: "/#",
//     image: candle,
//   },
//   {
//     id: 9,
//     name: "Eco Friendly Bags",
//     link: "/#",
//     image: bags,
//   },
//   {
//     id: 10,
//     name: "Reusable Bags",
//     link: "/#",
//     image: cleaner,
//   },
// ];

// function WebCat() {
//   return (
//     <div className="hidden md:block flex justify-center items-center h-screen  mt-3vh px-7 bg-[white] border-b">
//       <div className="mt-20 px-4">
//         <ul className="flex flex-wrap justify-between">
//           {Menu.map((item) => (
//             <li className=" p-4 group flex flex-col items-center" key={item.id}>
//               <div className="rounded-full cursor-pointer overflow-hidden group-hover:drop-shadow-sm w-[15vw] h-[31vh] object-fill transition-transform duration-300 group hover:scale-105  group-hover:shadow-md  group-hover:shadow-[#2D6A4F] border-[#2D6A4F] border-5">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <a
//                 href={item.link}
//                 className="mt-2 text-2xl px-3 hover:text-primary duration-200 text-[#255640] text-center"
//                 style={{ fontFamily: "Jacques Francois, serif" }}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default WebCat;

// API fetching :-

import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "./Utils/api";

const WebCat = () => {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);

  const categoryNames = [
    "Natural Soaps",
    "Skin & Body Care",
    "Classic Tableware",
    "Kitchen Essential",
    "Handicraft",
    "Bamboo Products",
    "Hydroponic Planter",
    "Indoor Planter",
    "Eco Friendly Bags",
    "Reusable Bags",
  ];

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetchDataFromApi("/api/category");
        // console.log("API Response:", response);

        if (
          response &&
          response.categoryList &&
          Array.isArray(response.categoryList)
        ) {
          const updatedCategories = response.categoryList.map((cat, index) => ({
            ...cat,
            name: categoryNames[index] || cat.name,
          }));
          setCategories(updatedCategories);
        } else {
          console.error("Invalid API response format");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  });

  return (
    <div className="hidden md:block flex justify-center items-center h-screen mt-3vh px-7 bg-[white] border-b">
      <div className="mt-20 px-4">
        <ul className="flex flex-wrap justify-between">
          {loading ? (
            <p className="text-center text-xl font-semibold">
              Loading categories...
            </p>
          ) : categories && categories.length > 0 ? (
            categories.map((cat) => {
              if (!cat) return null;

              return (
                <li
                  className="p-4 group flex flex-col items-center"
                  key={cat._id}
                >
                  <div
                    className="rounded-full cursor-pointer overflow-hidden group-hover:drop-shadow-sm w-[15vw] h-[31vh] object-fill transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md"
                    style={{ border: `5px solid ${cat.color || "#2D6A4F"}` }}
                  >
                    {cat &&
                    cat.images &&
                    Array.isArray(cat.images) &&
                    cat.images.length > 0 ? (
                      <img
                        src={`http://localhost:4000/uploads/${cat.images[0]}`}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    ) : (
                      <p className="text-center text-gray-500">No Image</p>
                    )}
                  </div>
                  <a
                    href="/#"
                    className="mt-2 text-2xl px-3 hover:text-primary duration-200 text-[#255640] text-center"
                    style={{ fontFamily: "Jacques Francois, serif" }}
                  >
                    {cat && cat.name
                      ? cat.name.length > 10
                        ? `${cat.name.substring(0, 30)}...`
                        : cat.name
                      : ""}
                  </a>
                </li>
              );
            })
          ) : (
            <p className="text-center text-xl font-semibold">
              No categories available
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default WebCat;
