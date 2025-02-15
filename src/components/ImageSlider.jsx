// import { Carousel } from "react-bootstrap";
// import tubeplanters from "../images/tubeplanters.png";
// import { fetchDataFromApi } from './Utils/api';
// import leaf from "../images/leaf.png";
// import { useEffect } from "react";
// import { useState } from "react";

// // const [productData,setProductData] = useState([]);

// // useEffect(() =>{
// //   fetchDataFromApi(`/api/products`).then((res)=>{
// //     console.log(res.products)
// //     // setProductData(res.products)
// //   })
// // })

// function MobileImageSlider() {
//   return (
//     <div className="relative mx-auto mt-4 h-[25vh] w-[90vw] bg-[#C2D2CA] ">
//       <Carousel className="relative h-z w-full">
//         <Carousel.Item>
//           <div className="relative flex items-center justify-end h-full w-full">
//             <a
//               href="/#"
//               className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
//             >
//               <img src={tubeplanters} className="w-[43vw]" alt="First slide" />
//             </a>
//             <Carousel.Caption
//               className=" flex flex-wrap w-[10vw] top-[23vh] left-[20vw] text-xxl tracking-wide text-black "
//               style={{ fontFamily: "Jacques Francois, serif", lineHeight: 1.2 }}
//             >
//               <a href="/#" className="cursor-pointer">
//                 Test Tube HYDROPONIC planters
//               </a>
//             </Carousel.Caption>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="relative flex items-center justify-end h-full w-full">
//             <a
//               href="/#"
//               className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
//             >
//               <img src={tubeplanters} className="w-[43vw]" alt="Second slide" />
//             </a>
//             <Carousel.Caption
//               className=" flex flex-wrap w-[10vw] top-[23vh] left-[20vw] text-xxl tracking-wide text-black "
//               style={{ fontFamily: "Jacques Francois, serif", lineHeight: 1.2 }}
//             >
//               <a href="/#" className="cursor-pointer">
//                 Test Tube HYDROPONIC planters
//               </a>
//             </Carousel.Caption>
//           </div>
//         </Carousel.Item>
//       </Carousel>
//       <img
//         src={leaf}
//         className="absolute bottom-0 left-0 w-[17vw] h-auto"
//         alt="Leaf decoration"
//       />
//     </div>
//   );
// }

// function WebImageSlider() {
//   return (
//     <div className="relative mx-auto mt-4 h-[70vh] w-[90vw] bg-[#C2D2CA] ">
//       <Carousel className="relative h-z w-full">
//         <Carousel.Item>
//           <div className="relative flex items-center justify-end h-full w-full">
//             <a
//               href="/#"
//               className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
//             >
//               {" "}
//               <img src={tubeplanters} className="w-[43vw]" alt="First slide" />
//             </a>
//             <Carousel.Caption
//               className=" flex flex-wrap w-[10vw] top-[23vh] left-[20vw] text-xxl tracking-wide text-black "
//               style={{ fontFamily: "Jacques Francois, serif", lineHeight: 1.2 }}
//             >
//               <a href="/#" className="cursor-pointer">
//                 {" "}
//                 Test Tube HYDROPONIC planters
//               </a>
//             </Carousel.Caption>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="relative flex items-center justify-end h-full w-full">
//             <a
//               href="/#"
//               className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
//             >
//               {" "}
//               <img src={tubeplanters} className="w-[43vw]" alt="Second slide" />
//             </a>
//             <Carousel.Caption
//               className=" flex flex-wrap w-[10vw] top-[23vh] left-[20vw] text-xxl tracking-wide text-black "
//               style={{ fontFamily: "Jacques Francois, serif", lineHeight: 1.2 }}
//             >
//               <a href="/#" className="cursor-pointer">
//                 {" "}
//                 Test Tube HYDROPONIC planters
//               </a>
//             </Carousel.Caption>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="relative flex items-center justify-end h-full w-full">
//             <a
//               href="/#"
//               className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
//             >
//               {" "}
//               <img src={tubeplanters} className="w-[43vw]" alt="Second slide" />
//             </a>
//             <Carousel.Caption
//               className=" flex flex-wrap w-[10vw] top-[23vh] left-[20vw] text-xxl tracking-wide text-black "
//               style={{ fontFamily: "Jacques Francois, serif", lineHeight: 1.2 }}
//             >
//               <a href="/#" className="cursor-pointer">
//                 {" "}
//                 Test Tube HYDROPONIC planters
//               </a>
//             </Carousel.Caption>
//           </div>
//         </Carousel.Item>
//         <Carousel.Item>
//           <div className="relative flex items-center justify-end h-full w-full">
//             <a
//               href="/#"
//               className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
//             >
//               {" "}
//               <img src={tubeplanters} className="w-[43vw]" alt="Second slide" />
//             </a>
//             <Carousel.Caption
//               className=" flex flex-wrap w-[10vw] top-[23vh] left-[20vw] text-xxl tracking-wide text-black "
//               style={{ fontFamily: "Jacques Francois, serif", lineHeight: 1.2 }}
//             >
//               <a href="/#" className="cursor-pointer">
//                 {" "}
//                 Test Tube HYDROPONIC planters
//               </a>
//             </Carousel.Caption>
//           </div>
//         </Carousel.Item>
//       </Carousel>
//       <img
//         src={leaf}
//         className="absolute bottom-0 left-0 w-[17vw] h-auto"
//         alt="Leaf decoration"
//       />
//     </div>
//   );
// }

// function ImageSlider() {
//   return (
//     <div>
//       <div>
//         {/* Small Screen Layout */}
//         <div className="block md:hidden">
//           <MobileImageSlider />
//         </div>

//         {/* Medium Screen Layout */}
//         <div className="hidden md:block">
//           <WebImageSlider />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ImageSlider;

import { Carousel } from "react-bootstrap";
import img1 from "../images/Slider Images/1.jpg";
import img2 from "../images/Slider Images/2.jpg";
import img3 from "../images/Slider Images/3.jpg";
import img4 from "../images/Slider Images/4.jpg";
// import img5 from "../images/Slider Images/5.jpg";
import img6 from "../images/Slider Images/6.jpg";
import img7 from "../images/Slider Images/7.jpg";
// import img8 from "../images/Slider Images/8.jpg";
import img9 from "../images/Slider Images/9.jpg";
// import img10 from "../images/Slider Images/10.jpg";

function MobileImageSlider() {
  return (
    <div className="relative mx-auto mt-4 h-[25vh] w-[90vw] bg-[#C2D2CA]">
      <Carousel className="relative h-z w-full" interval={3000}>
        <Carousel.Item>
          <img
            src={img1}
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img2}
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img3}
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img4}
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img6}
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img7}
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img9}
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
            alt="Slide 1"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

function WebImageSlider() {
  return (
    <div className="relative mx-auto mt-4 h-[71vh] w-[59vw] bg-[#C2D2CA]">
      <Carousel className="relative h-full w-full" interval={3000}>
        <Carousel.Item>
          <a
            href="/#"
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
          >
            {" "}
            <img src={img1} className="w-[59vw] flex center" alt="Slide 1" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a
            href="/#"
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
          >
            {" "}
            <img src={img2} className="w-[59vw] flex center" alt="Slide 1" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a
            href="/#"
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
          >
            {" "}
            <img src={img3} className="w-[59vw] flex center" alt="Slide 1" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a
            href="/#"
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
          >
            {" "}
            <img src={img4} className="w-[59vw] flex center" alt="Slide 1" />
          </a>
        </Carousel.Item>
        {/* <Carousel.Item>
          <a
            href="/#"
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
          >
            {" "}
            <img src={img5} className="w-[59vw] flex center" alt="Slide 1" />
          </a>
        </Carousel.Item> */}
        <Carousel.Item>
          <a
            href="/#"
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
          >
            {" "}
            <img src={img6} className="w-[59vw] flex center" alt="Slide 1" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a
            href="/#"
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
          >
            {" "}
            <img src={img7} className="w-[59vw] flex center" alt="Slide 1" />
          </a>
        </Carousel.Item>
        {/* <Carousel.Item>
          <a
            href="/#"
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
          >
            {" "}
            <img src={img8} className="w-[59vw] flex center" alt="Slide 1" />
          </a>
        </Carousel.Item> */}
        <Carousel.Item>
          <a
            href="/#"
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
          >
            {" "}
            <img src={img9} className="w-[59vw] flex center" alt="Slide 1" />
          </a>
        </Carousel.Item>
        {/* <Carousel.Item>
          <a
            href="/#"
            className="max-w-[50%] max-h-[70%] object-cover mt-5 cursor-pointer"
          >
            {" "}
            <img src={img10} className="w-[59vw] flex center" alt="Slide 1" />
          </a>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

function ImageSlider() {
  return (
    <div>
      <div>
        {/* Small Screen Layout */}
        <div className="block md:hidden">
          <MobileImageSlider />
        </div>

        {/* Medium Screen Layout */}
        <div className="hidden md:block">
          <WebImageSlider />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
