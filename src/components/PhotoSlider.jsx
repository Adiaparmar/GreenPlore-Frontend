import { useState } from "react";

// Importing images for categories
import HC1 from "../images/Category Images/Handicraft/HC 1.jpeg";
import HC2 from "../images/Category Images/Handicraft/HC 2.jpeg";
import HC3 from "../images/Category Images/Handicraft/HC 3.jpeg";
import HC4 from "../images/Category Images/Handicraft/HC 4.jpeg";
import HC5 from "../images/Category Images/Handicraft/HC 5.jpeg";
import HC6 from "../images/Category Images/Handicraft/HC 6.jpeg";

import HD1 from "../images/Category Images/Home Decor/HD 1.jpeg";
import HD2 from "../images/Category Images/Home Decor/HD 2.jpeg";
import HD3 from "../images/Category Images/Home Decor/HD 3.jpeg";
import HD4 from "../images/Category Images/Home Decor/HD 4.jpeg";
import HD5 from "../images/Category Images/Home Decor/HD 5.jpeg";
import HD6 from "../images/Category Images/Home Decor/HD 6.jpeg";

import IP1 from "../images/Category Images/Indoor Plant/IP 1.jpeg";
import IP2 from "../images/Category Images/Indoor Plant/IP 2.jpeg";
import IP3 from "../images/Category Images/Indoor Plant/IP 3.jpeg";
import IP4 from "../images/Category Images/Indoor Plant/IP 4.jpeg";
import IP5 from "../images/Category Images/Indoor Plant/IP 5.jpeg";
import IP6 from "../images/Category Images/Indoor Plant/IP 6.png";

import PC1 from "../images/Category Images/Personal Care/PC 1.jpeg";
import PC2 from "../images/Category Images/Personal Care/PC 2.jpeg";
import PC3 from "../images/Category Images/Personal Care/PC 3.jpeg";
import PC4 from "../images/Category Images/Personal Care/PC 4.jpeg";
import PC5 from "../images/Category Images/Personal Care/PC 5.jpeg";
import PC6 from "../images/Category Images/Personal Care/PC 6.jpeg";

import SC1 from "../images/Category Images/Soap and Cosmetics/soap 1.jpeg";
import SC2 from "../images/Category Images/Soap and Cosmetics/soap 2.jpeg";
import SC3 from "../images/Category Images/Soap and Cosmetics/soap 3.jpeg";
import SC4 from "../images/Category Images/Soap and Cosmetics/soap 4.jpeg";
import SC5 from "../images/Category Images/Soap and Cosmetics/soap 5.jpeg";
import SC6 from "../images/Category Images/Soap and Cosmetics/soap 6.jpeg";

// Array containing categories and their images
const slides = [
  {
    text: "Handicrafts",
    images: [HC2, HC1, HC3, HC4, HC5, HC6],
  },
  {
    text: "Home Decore",
    images: [HD1, HD2, HD3, HD4, HD5, HD6],
  },
  {
    text: "Indoor Plants",
    images: [IP1, IP2, IP3, IP4, IP5, IP6],
  },
  {
    text: "Personal Care",
    images: [PC1, PC2, PC3, PC4, PC5, PC6],
  },
  {
    text: "Soap and Cosmetics",
    images: [SC1, SC2, SC3, SC4, SC5, SC6],
  },
];

// "Trending" row images (one from each category)
const trendingImages = [
  slides[0].images[0], // First image from Handicrafts
  slides[1].images[0], // First image from Home Decor
  slides[2].images[0], // First image from Indoor Plants
  slides[3].images[0], // First image from Personal Care
  slides[4].images[0], // First image from Soap and Cosmetics
];

const PhotoSliderWeb = () => {
  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden bg-[#EDF1F1]">
      {/* Displaying images row by row */}
      <div className="space-y-8">
        {/* Trending Row */}
        <div>
          <div
            className="text-5xl p-4 flex justify-center text-[#255640]"
            style={{
              fontFamily: "Jacques Francois, serif",
              fontSize: "3rem",
            }}
          >
            Trending
          </div>
          <div className="grid grid-cols-5 gap-5 center">
            {trendingImages.map((image, index) => (
              <div
                key={index}
                className="h-96 relative hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div
                  className="h-3/4"
                  style={{ backgroundColor: "#C2D2CA" }}
                >
                  <img
                    src={image}
                    alt={`trending-image-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="h-1/4"
                  style={{ backgroundColor: "#F5F9F7" }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Original rows from the slides array */}
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex}>
            <div
              className="text-5xl p-4 flex justify-center text-[#255640]"
              style={{
                fontFamily: "Jacques Francois, serif",
                fontSize: "3rem",
              }}
            >
              {slide.text} {/* Displaying slide text as the header */}
            </div>
            <div className="grid grid-cols-6 gap-5 center">
              {slide.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="h-96 relative hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div
                    className="h-3/4"
                    style={{ backgroundColor: "#C2D2CA" }}
                  >
                    <img
                      src={image}
                      alt={`slide-${slideIndex}-image-${imageIndex}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="h-1/4"
                    style={{ backgroundColor: "#F5F9F7" }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PhotoSlider = () => {
  return (
    <div className="mt-6 mb-6">
      <PhotoSliderWeb />
    </div>
  );
};

export default PhotoSlider;
