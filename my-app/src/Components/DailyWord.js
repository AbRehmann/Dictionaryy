/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Example() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-3 py-10 mx-auto">
          <div className="flex flex-wrap -m-6">
            <div className="p-4 md:w-1/2 w-full">
              <h1 className="text-2xl font-medium title-font text-gray-900 mb-6 text-center">
                Word of the day
              </h1>
              <div className="h-3/3 flex items-center flex-col bg-blue-50 p-8 rounded">
                <h5 className="text-blue-600 text-base font-medium italic  mb-3 ">
                  tasaadum
                </h5>
                <p className="leading-relaxed mb-6">तसादुम•تَصادُم</p>
                <p className=" text-xs  mb-3">Origin - Arabic</p>
                <a className="inline-flex items-center">
                  <span className=" bg-white p-2 rounded  flex-grow flex items-center flex-col pl-4">
                    <span className="  title-font sm:text-xs text-gray-900">
                      Meaning
                    </span>
                    <span className="text-gray-500 text-xs">
                      dashing one against another, collision
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="p-4 md:w-1/2 w-full">
              <h1 className="text-2xl font-medium title-font text-gray-900 mb-6 text-center">
                Proverb of the day
              </h1>
              <div className="h-3/3 flex items-center flex-col bg-blue-50 p-8 rounded">
                <h5 className="text-blue-600 text-base font-medium italic  mb-3 ">
                  tasaadum
                </h5>
                <p className="leading-relaxed mb-6">तसादुम•تَصادُم</p>
                <p className=" text-xs  mb-3">Origin - Arabic</p>
                <a className="inline-flex items-center">
                  <span className="  p-2 rounded  flex-grow flex items-center flex-col pl-4">
                    <img
                      className="h-8 w-16 "
                      src="https://www.rekhtadictionary.com/Content/assets/img/Desktop/todaySphrase.png"
                      alt=""
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Example;
