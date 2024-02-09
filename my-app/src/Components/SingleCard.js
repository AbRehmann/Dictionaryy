/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function SingleCard() {
  return (
    <div>
      <div className=" mt-16 max-w-full mx-auto bg-blue-50 shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-900 mb-2 text-center">
            Word in News
          </div>
          <p className="text-black font-bold  text-base mb-2 text-center">
            2nd Myanmar ki fauji hukumat ne mulk mein emergency ki muddat mein 6
            maah ki <span className="text-blue-300">tausii'</span> ki
          </p>
          <p className="text-gray-500 text-xs text-center">
            Feb 01, 2024 | Roznama Rashtriya Sahara
          </p>
          <p className="text-black font-semibold italic text-2xl  mt-5 text-center">
            tausii'
          </p>
          <p className="text-black text-xl italic  font-semibold  mt-5 text-center">
            तौसी' • تَوْسِیْع
          </p>
          <p className="text-gray-500 text-center text-sm mt-3  ">
            Origin - Arabic
          </p>
          <a className=" mt-3 text-center flex flex-col items-center">
            <span className=" bg-white p-5   rounded  flex-grow flex items-center flex-col pr-12  pl-12">
              <span className="  title-font sm:text-xs text-gray-600">
                Meaning
              </span>
              <span className="text-black mt-1 text-xs">
                extension, expansion
              </span>
            </span>
          </a>
        </div>
      </div>
      <div className=" mt-16 max-w-full mx-auto bg-blue-50 shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-900 mt-5 mb-5 text-center">
            Quote of the day
          </div>
          <p className="text-black font-bold  text-base mb-2 text-center">
            Daulat se aadmi ko jo izzat milti hai vo us ki nahin us ki daulat ki
            izzat hoti hai.
          </p>
          <p className="text-gray-500 text-sm mt-5 text-center">Premchand</p>

          <div className=" mt-7 flex justify-center items-center">
            <img
              src="https://www.rekhtadictionary.com/content/assets/img/Desktop/todayquote.png"
              alt="Your Image"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
