/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Tabel() {
  return (
    <div className="mt-12">
      <div>
        <h1 className="  mb-4 font-semibold  text-3xl  ">
          Singular and Plural
        </h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          // Breakpoints for different screen sizes
          200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1170: {
            slidesPerView: 3,
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
        <SwiperSlide>
          <div className=" w-full max-w-sm mx-auto bg-blue-50 flex  justify-center rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="p-5">
                <div className="flex justify-between ">
                  <div className=" mb-5 ml-5 border border-gray-400 rounded px-3 py-2 text-gray-500  tracking-wide  text-xs font-semibold">
                    Singular
                  </div>
                  <div className="border border-gray-400 rounded px-3 py-2 text-gray-500  tracking-wide  text-xs font-semibold mr-10 mb-5  ">
                    Plural
                  </div>
                </div>
                <div className="flex justify-between ">
                  <a
                    href="#"
                    className=" no-underline bg-white rounded-2xl p-6 block mt-1 text-lg leading-tight font-medium text-blue-700 "
                  >
                    iKHtiyaar
                  </a>

                  <a
                    href="#"
                    className=" bg-white p-6 rounded-2xl  ml-4 block mt-1 text-lg leading-tight font-medium text-blue-700 "
                  >
                    iKHtiyaaraat
                  </a>
                </div>
                <div className="text-left border border-gray-400 rounded-2xl px-3 py-2 pt-0  mt-8">
                  <div className=" line-height-relaxed pb-2 border-b border-gray-400  tracking-wide text-sm italic text-gray-500  mt-4">
                    Origin - Arabic
                  </div>
                  <p className="mt-2 text-black">will, pleasure, discretion</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" w-full max-w-sm mx-auto bg-blue-50 flex  justify-center rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="p-5">
                <div className="flex justify-between ">
                  <div className=" mb-5 ml-5 border border-gray-400 rounded px-3 py-2 text-gray-500  tracking-wide  text-xs font-semibold">
                    Singular
                  </div>
                  <div className="border border-gray-400 rounded px-3 py-2 text-gray-500  tracking-wide  text-xs font-semibold mr-10 mb-5  ">
                    Plural
                  </div>
                </div>
                <div className="flex justify-between ">
                  <a
                    href="#"
                    className=" no-underline bg-white rounded-2xl p-6 block mt-1 text-lg leading-tight font-medium text-blue-700 "
                  >
                    iKHtiyaar
                  </a>

                  <a
                    href="#"
                    className=" bg-white p-6 rounded-2xl  ml-4 block mt-1 text-lg leading-tight font-medium text-blue-700 "
                  >
                    iKHtiyaaraat
                  </a>
                </div>
                <div className="text-left border border-gray-400 rounded-2xl px-3 py-2 pt-0 mt-8">
                  <div className=" line-height-relaxed pb-2 border-b border-gray-400  tracking-wide text-sm italic text-gray-500  mt-4">
                    Origin - Arabic
                  </div>
                  <p className="mt-2 text-black">will, pleasure, discretion</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" w-full max-w-sm mx-auto bg-blue-50 flex  justify-center rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="p-5">
                <div className="flex justify-between ">
                  <div className=" mb-5 ml-5 border border-gray-400 rounded px-3 py-2 text-gray-500  tracking-wide  text-xs font-semibold">
                    Singular
                  </div>
                  <div className="border border-gray-400 rounded px-3 py-2 text-gray-500  tracking-wide  text-xs font-semibold mr-10 mb-5  ">
                    Plural
                  </div>
                </div>
                <div className="flex justify-between ">
                  <a
                    href="#"
                    className=" no-underline bg-white rounded-2xl p-6 block mt-1 text-lg leading-tight font-medium text-blue-700 "
                  >
                    iKHtiyaar
                  </a>

                  <a
                    href="#"
                    className=" bg-white p-6 rounded-2xl  ml-4 block mt-1 text-lg leading-tight font-medium text-blue-700 "
                  >
                    iKHtiyaaraat
                  </a>
                </div>
                <div className="text-left border border-gray-400 rounded-2xl px-3 py-2 pt-0 mt-8">
                  <div className=" line-height-relaxed pb-2 border-b border-gray-400  tracking-wide text-sm italic text-gray-500  mt-4">
                    Origin - Arabic
                  </div>
                  <p className="mt-2 text-black">will, pleasure, discretion</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Tabel;
