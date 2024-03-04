// /* eslint-disable import/no-anonymous-default-export */

// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import { Typography } from "@material-tailwind/react";

// export default () => {
//   return (
//     <>
//       <div>
//         <div>
//           <h1 className=" font-semibold  text-3xl  ">Trending words</h1>
//         </div>

//         <Swiper
//           modules={[Navigation, Pagination, Scrollbar, A11y]}
//           spaceBetween={50}
//           slidesPerView={4}
//           navigation
//           pagination={{
//             clickable: true,
//           }}
//           onSwiper={(swiper) => console.log(swiper)}
//           onSlideChange={() => console.log("slide change")}
//           breakpoints={{
//             // Breakpoints for different screen sizes
//             200: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             1170: {
//               slidesPerView: 4,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 30,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 40,
//             },
//           }}
//         >
//           <SwiperSlide>
//             <div className=" text-center  max-w-sm mx-auto bg-blue-900 rounded-md overflow-hidden shadow-md m-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
//               <div className="p-6">
//                 <h3 className=" text-white italic text-2xl font-semibold mb-2">
//                   Saahir
//                 </h3>
//                 <h4 className="mt-4">
//                   <span className="text-blue-200 mr-1">साहिर</span>
//                   <strong className="text-blue-200">•</strong>
//                   <span className=" italic text-blue-200 ml-1">ساحِر</span>
//                 </h4>
//                 <Typography className=" mb-5 border-b   border-blue-200 pb-4 leading-relaxed  text-sm  text-white mt-20">
//                   Origin - Arabic
//                 </Typography>
//                 <p className=" text-sm font-medium  text-white mt-4 mb-4">
//                   magician, sorcerer, wizard, conjuror
//                 </p>
//                 <button className=" mt-4 bg-white text-black-200 px-5 py-3 rounded-md hover:bg-blue-100">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <div className=" text-center  max-w-sm mx-auto bg-blue-900 rounded-md overflow-hidden shadow-md m-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
//               <div className="p-6">
//                 <h3 className=" text-white italic text-2xl font-semibold mb-2">
//                   Saahir
//                 </h3>
//                 <h4 className="mt-4">
//                   <span className="text-blue-200 mr-1">साहिर</span>
//                   <strong className="text-blue-200">•</strong>
//                   <span className=" italic text-blue-200 ml-1">ساحِر</span>
//                 </h4>
//                 <Typography className=" mb-5 border-b   border-blue-200 pb-4 leading-relaxed  text-sm  text-white mt-20">
//                   Origin - Arabic
//                 </Typography>
//                 <p className=" text-sm font-medium  text-white mt-4 mb-4">
//                   magician, sorcerer, wizard, conjuror
//                 </p>
//                 <button className=" mt-4 bg-white text-black-200 px-5 py-3 rounded-md hover:bg-blue-100">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <div className=" text-center  max-w-sm mx-auto bg-blue-900 rounded-md overflow-hidden shadow-md m-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
//               <div className="p-6">
//                 <h3 className=" text-white italic text-2xl font-semibold mb-2">
//                   Saahir
//                 </h3>
//                 <h4 className="mt-4">
//                   <span className="text-blue-200 mr-1">साहिर</span>
//                   <strong className="text-blue-200">•</strong>
//                   <span className=" italic text-blue-200 ml-1">ساحِر</span>
//                 </h4>
//                 <Typography className=" mb-5 border-b   border-blue-200 pb-4 leading-relaxed  text-sm  text-white mt-20">
//                   Origin - Arabic
//                 </Typography>
//                 <p className=" text-sm font-medium  text-white mt-4 mb-4">
//                   magician, sorcerer, wizard, conjuror
//                 </p>
//                 <button className=" mt-4 bg-white text-black-200 px-5 py-3 rounded-md hover:bg-blue-100">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <div className=" text-center  max-w-sm mx-auto bg-blue-900 rounded-md overflow-hidden shadow-md m-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
//               <div className="p-6">
//                 <h3 className=" text-white italic text-2xl font-semibold mb-2">
//                   Saahir
//                 </h3>
//                 <h4 className="mt-4">
//                   <span className="text-blue-200 mr-1">साहिर</span>
//                   <strong className="text-blue-200">•</strong>
//                   <span className=" italic text-blue-200 ml-1">ساحِر</span>
//                 </h4>
//                 <Typography className=" mb-5 border-b   border-blue-200 pb-4 leading-relaxed  text-sm  text-white mt-20">
//                   Origin - Arabic
//                 </Typography>
//                 <p className=" text-sm font-medium  text-white mt-4 mb-4">
//                   magician, sorcerer, wizard, conjuror
//                 </p>
//                 <button className=" mt-4 bg-white text-black-200 px-5 py-3 rounded-md hover:bg-blue-100">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <div className=" text-center  max-w-sm mx-auto bg-blue-900 rounded-md overflow-hidden shadow-md m-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
//               <div className="p-6">
//                 <h3 className=" text-white italic text-2xl font-semibold mb-2">
//                   Saahir
//                 </h3>
//                 <h4 className="mt-4">
//                   <span className="text-blue-200 mr-1">साहिर</span>
//                   <strong className="text-blue-200">•</strong>
//                   <span className=" italic text-blue-200 ml-1">ساحِر</span>
//                 </h4>
//                 <Typography className=" mb-5 border-b   border-blue-200 pb-4 leading-relaxed  text-sm  text-white mt-20">
//                   Origin - Arabic
//                 </Typography>
//                 <p className=" text-sm font-medium  text-white mt-4 mb-4">
//                   magician, sorcerer, wizard, conjuror
//                 </p>
//                 <button className=" mt-4 bg-white text-black-200 px-5 py-3 rounded-md hover:bg-blue-100">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <div className=" text-center  max-w-sm mx-auto bg-blue-900 rounded-md overflow-hidden shadow-md m-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
//               <div className="p-6">
//                 <h3 className=" text-white italic text-2xl font-semibold mb-2">
//                   Saahir
//                 </h3>
//                 <h4 className="mt-4">
//                   <span className="text-blue-200 mr-1">साहिर</span>
//                   <strong className="text-blue-200">•</strong>
//                   <span className=" italic text-blue-200 ml-1">ساحِر</span>
//                 </h4>
//                 <Typography className=" mb-5 border-b   border-blue-200 pb-4 leading-relaxed  text-sm  text-white mt-20">
//                   Origin - Arabic
//                 </Typography>
//                 <p className=" text-sm font-medium  text-white mt-4 mb-4">
//                   magician, sorcerer, wizard, conjuror
//                 </p>
//                 <button className=" mt-4 bg-white text-black-200 px-5 py-3 rounded-md hover:bg-blue-100">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>

//         <style jsx>{`
//           .swiper-pagination {
//             display: flex !important;
//             justify-content: center;
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

/* eslint-disable import/no-anonymous-default-export */

import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Typography } from "@material-tailwind/react";

function CardSlider() {
  const [wordsData, setWordsData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/users") // Replace with your dummy API endpoint
      .then((response) => response.json())
      .then((data) => setWordsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div>
        <div>
          <h1 className="font-semibold text-3xl">Trending words</h1>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{
            clickable: true,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            // Breakpoints for different screen sizes
            200: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1170: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {wordsData.map((word) => (
            <SwiperSlide key={word.id}>
              <div className="text-center max-w-sm mx-auto bg-blue-900 rounded-md overflow-hidden shadow-md m-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <div className="p-6">
                  <h3 className="text-white italic text-2xl font-semibold mb-2">
                    {word.title} {/* Assuming title field exists in the data */}
                  </h3>
                  <Typography className="mb-5 border-b border-blue-200 pb-4 leading-relaxed text-sm text-white mt-20">
                    {word.body} {/* Assuming body field exists in the data */}
                  </Typography>
                  <p className="text-sm font-medium text-white mt-4 mb-4">
                    Additional content here...
                  </p>
                  <button className="mt-4 bg-white text-black-200 px-5 py-3 rounded-md hover:bg-blue-100">
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx>{`
          .swiper-pagination {
            display: flex !important;
            justify-content: center;
          }
          .swiper-button-prev,
          .swiper-button-next {
            color: white !important; // Change navigation color to white
          }
        `}</style>
      </div>
    </>
  );
}
export default CardSlider;
