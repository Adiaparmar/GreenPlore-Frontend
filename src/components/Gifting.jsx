import Gifts from "../images/Gifts.png";
// import axios from "axios";
// import { useState } from "react";
import { fetchDataFromApi } from "./Utils/api";
// import { Carousel } from "react-bootstrap";
// import { fetchDataFromApi } from './Utils/api';
import { useEffect, useState } from "react";

// Array containing gift information
const gifts = [
  { id: 1, name: "Corporate Gifting" },
  { id: 2, name: "Occasion Based Gifting" },
  { id: 3, name: "Event Gifting" },
  { id: 4, name: "Personal Gifting" }, // Updated gift name
];

const Gifting = () => {
  const [gifting, setGifting] = useState([]);

  useEffect(() => {
    const fetchGifting = async () => {
      const data = await fetchDataFromApi("/api/products"); // Fetch wishlist
      console.log(data);
      setGifting(data);
    };

    fetchGifting();
  }, []);

  // if (!productData || productData.length === 0) {
  //   return <div>Loading...</div>; // Show a loading state while fetching data
  // }
  return (
    <div>
      {/* Heading for the section */}
      <div
        className="md:hidden text-[#195B3E] text-2xl mt-4  flex items-center justify-center"
        style={{ fontFamily: "Jacques Francois, serif" }}
      >
        Discover Eco-Friendly Gift Ideas!
      </div>
      <div
        className="hidden md:block text-[#195B3E] text-4xl mt-5  flex items-center justify-center"
        style={{
          fontFamily: "Jacques Francois, serif",
          fontSize: "3rem",
          textAlign: "center",
        }}
      >
        Discover Eco-Friendly Gift Ideas!
      </div>

      {/* Container for the gift items */}
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-[90vw] bg-[#C2D2CA] h-[70vh] md:h-[60vh] mt-3 mb-4 flex flex-wrap md:flex-nowrap items-center justify-evenly">
          {/* Mapping over gifts to display each one */}
          {gifts.map((gift) => (
            <a key={gift.id} href="#">
              <div className="relative bg-white h-[30vh] w-[40vw] md:h-[50vh] md:w-[20vw] hover:scale-105 transition-transform duration-300 group">
                {/* Gift image */}
                <img
                  src={Gifts}
                  alt={`Gift ${gift.name}`}
                  className="object-contain w-full h-full rounded-lg"
                />
                {/* Gift name, visible on hover */}
                <h2 className="absolute flex items-center justify-center text-3xl text-[#195B3E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  {gift.name}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gifting;
