/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SameSoundWord() {
  return (
    <div>
      <div>
        <h1 className=" mt-10 mb-4 font-semibold  text-3xl  ">
          Same Sounding words
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
              <div className=" flex-1  text-center p-6">
                <div className="border-b border-gray-300 m-2">
                  <p className=" mb-5 text-xl font-medium text-blue-700">
                    <a href="">
                      <span>taa'ziir</span>
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm mb-1">Origin - Arabic</p>
                  <p className="mb-6 text-sm">
                    punishment, penalty, penalization
                  </p>
                </div>
                <div className=" m-2">
                  <p className=" mb-5 text-xl font-medium text-blue-700">
                    <a href="">
                      <span>taa'ziir</span>
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm mb-1">Origin - Arabic</p>
                  <p className="mb-3 text-sm">making an excuse, apologizing,</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" w-full max-w-sm mx-auto bg-blue-50 flex  justify-center rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className=" flex-1  text-center p-6">
                <div className="border-b border-gray-300 m-2">
                  <p className=" mb-5 text-xl font-medium text-blue-700">
                    <a href="">
                      <span>arz</span>
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm mb-1">Origin - Persian</p>
                  <p className="mb-6 text-sm">price, cost</p>
                </div>
                <div className=" m-2">
                  <p className=" mb-5 text-xl font-medium text-blue-700">
                    <a href="">
                      <span>arz</span>
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm mb-1">Origin - Arabic</p>
                  <p className="mb-3 text-sm">land, the earth</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" w-full max-w-sm mx-auto bg-blue-50 flex  justify-center rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className=" flex-1  text-center p-6">
                <div className="border-b border-gray-300 m-2">
                  <p className=" mb-5 text-xl font-medium text-blue-700">
                    <a href="">
                      <span>baras</span>
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm mb-1">
                    Origin - Sanskrit
                  </p>
                  <p className="mb-6 text-sm">
                    an year, a span of twelve months
                  </p>
                </div>
                <div className=" m-2">
                  <p className=" mb-5 text-xl font-medium text-blue-700">
                    <a href="">
                      <span>baras</span>
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm mb-1">Origin - Arabic</p>
                  <p className="mb-3 text-sm">vitiligo or leucoderma</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SameSoundWord;
