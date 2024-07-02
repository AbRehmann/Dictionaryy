import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Typography } from "@material-tailwind/react";

function Allusions() {
  const wordsData = [
    {
      id: 16,
      word: (
        <img
          className="h-36 mx-auto"
          src="https://www.rekhtadictionary.com/Uploads/Images/Allusions/1.png"
          alt="isa"
        />
      ),
      meaning: "Isa (Jesus)",
    },
    {
      id: 17,
      word: (
        <img
          className="h-36 mx-auto"
          src="https://www.rekhtadictionary.com/Uploads/Images/Allusions/2.png"
          alt="isa"
        />
      ),
      meaning: "Ejaaz-e-Masih",
    },
    {
      id: 18,
      word: (
        <img
          className="h-36 mx-auto"
          src="https://www.rekhtadictionary.com/Uploads/Images/Allusions/3.png"
          alt="isa"
        />
      ),
      meaning: "  ibn-e- maryam",
    },
    {
      id: 19,
      word: (
        <img
          className="h-36 mx-auto"
          src="https://www.rekhtadictionary.com/Uploads/Images/Allusions/0.png"
          alt="isa"
        />
      ),
      meaning: "Saqi-i-Kauser",
    },
    {
      id: 20,
      word: (
        <img
          className="h-36 mx-auto"
          src="https://www.rekhtadictionary.com/Uploads/Images/Allusions/1.png"
          alt="isa"
        />
      ),
      meaning: "Tajalli-e-Tuur ",
    },
    {
      id: 21,
      word: (
        <img
          className="h-36 mx-auto"
          src="https://www.rekhtadictionary.com/Uploads/Images/Allusions/2.png"
          alt="isa"
        />
      ),
      meaning: "Roz-e-Jaza ",
    },
    {
      id: 21,
      word: (
        <img
          className="h-36 mx-auto"
          src="https://www.rekhtadictionary.com/Uploads/Images/Allusions/3.png"
          alt="isa"
        />
      ),
      meaning: "Yaooj and Majooj ",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="font-semibold text-3xl">Allusions</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          200: { slidesPerView: 1, spaceBetween: 20 },
          1170: { slidesPerView: 4, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="swiper-container"
      >
        {wordsData.map((word) => (
          <SwiperSlide key={word.id}>
            <div className="text-center items-center max-w-sm mx-auto bg-white rounded-md overflow-hidden shadow-md m-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl group">
              <div className="p-6 group-hover:bg-blue-100">
                <h3 className="text-white italic text-2xl ml-5 font-semibold mb-2">
                  {word.word} {/* Display the Urdu word */}
                </h3>
                <Typography className="pb-4 leading-relaxed font-bold  text-lg text-black mt-5">
                  {word.meaning} {/* Display the meaning */}
                </Typography>

                <button className="mt-4 bg-white text-blue-400 border border-blue-400 px-5 py-3 rounded-md hover:bg-blue-700 hover:text-white group-hover:bg-blue-700 group-hover:text-white">
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
          color: black !important;
        }
        .swiper-container {
          padding-bottom: 18px;
        }
        .swiper-container {
          padding-bottom: 18px;
          cursor: grab; /* Change cursor appearance */
        }
        .swiper-container:active {
          cursor: grabbing; /* Change cursor appearance when grabbing */
        }
      `}</style>
    </div>
  );
}

export default Allusions;
