import { Carousel } from "react-bootstrap";
import { fetchDataFromApi } from './Utils/api';
import { useEffect, useState } from "react";
import leaf from "../images/leaf.png";

function MobileImageSlider({ productData }) {
  if (!productData || productData.length === 0) {
    return <div>Loading...</div>; // Or any fallback content
  }

  return (
    <div className="relative mx-auto mt-4 h-[25vh] w-[90vw] bg-[#C2D2CA] ">
      <Carousel className="relative h-z w-full">
        {productData.map((product, index) => (
          <Carousel.Item key={index}>
            <div className="relative flex items-center justify-end h-full w-full">
              <a
                href="/#"
                className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
              >
                <img
                  src={product.image || "/path/to/default/image.png"}
                  className="w-[43vw]"
                  alt={`Slide ${index + 1}`}
                />
              </a>
              <Carousel.Caption
                className=" flex flex-wrap w-[10vw] top-[23vh] left-[20vw] text-xxl tracking-wide text-black "
                style={{ fontFamily: "Jacques Francois, serif", lineHeight: 1.2 }}
              >
                <a href="/#" className="cursor-pointer">
                  {product.name || "Test Tube HYDROPONIC planters"}
                </a>
                <p className="mt-2">{product.description || "Default description"}</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <img
        src={leaf}
        className="absolute bottom-0 left-0 w-[17vw] h-auto"
        alt="Leaf decoration"
      />
    </div>
  );
}

function WebImageSlider({ productData }) {
  if (!productData || productData.length === 0) {
    return <div>Loading...</div>; // Or any fallback content
  }

  return (
    <div className="relative mx-auto mt-4 h-[70vh] w-[90vw] bg-[#C2D2CA] ">
      <Carousel className="relative h-z w-full">
        {productData.map((product, index) => (
          <Carousel.Item key={index}>
            <div className="relative flex items-center justify-end h-full w-full">
              <a
                href="/#"
                className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
              >
                <img
                  src={product.image || "/path/to/default/image.png"}
                  className="w-[43vw]"
                  alt={`Slide ${index + 1}`}
                />
              </a>
              <Carousel.Caption
                className=" flex flex-wrap w-[10vw] top-[23vh] left-[20vw] text-xxl tracking-wide text-black "
                style={{ fontFamily: "Jacques Francois, serif", lineHeight: 1.2 }}
              >
                <a href="/#" className="cursor-pointer">
                  {product.name || "Test Tube HYDROPONIC planters"}
                </a>
                <p className="mt-2">{product.description || "Default description"}</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <img
        src={leaf}
        className="absolute bottom-0 left-0 w-[17vw] h-auto"
        alt="Leaf decoration"
      />
    </div>
  );
}

function ImageSlider() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchDataFromApi(`/api/products`)
      .then((res) => {
        console.log(res.products); // Log the fetched products
        setProductData(res.products); // Update state with fetched products
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Empty array to ensure it runs once after initial render

  if (!productData || productData.length === 0) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  return (
    <div>
      <div>
        {/* Small Screen Layout */}
        <div className="block md:hidden">
          <MobileImageSlider productData={productData} />
        </div>

        {/* Medium Screen Layout */}
        <div className="hidden md:block">
          <WebImageSlider productData={productData} />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
