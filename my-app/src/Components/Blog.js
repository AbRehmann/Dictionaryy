import React from "react";

function Blog() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-3xl font-semibold mt-10">
        <h2>Latest Blogs</h2>
      </div>
      <div className="mt-10">
        <a href="kd" className="block">
          <div className="flex flex-col md:flex-row">
            <img
              className="w-full md:w-2/5 h-36 rounded mb-4 md:mb-0 md:mr-4"
              src="https://www.rekhtadictionary.com/images/ResorceImages/blog/681679d9-b7d1-417b-8f37-f76a622d9826_Mobile.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between">
              <div className="mb-2">
                <h1 className="text-lg font-bold text-gray-800">
                  Lost in Lexicon: Exploring the Untranslatable Charm of Urdu
                </h1>
                <p className="text-sm text-gray-500">by Atifa Haroon</p>
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Despite having thousands of languages across the globe,
                sometimes, human beings just fall short of finding a...{" "}
                <span className="text-blue-500">continue reading</span>
              </p>
              <a
                href="edc"
                className="inline-block mb-6 mt-16 ml-16 w-max px-4 py-2 text-sm font-medium text-white bg-blue-800 border border-blue-600 rounded-lg hover:bg-white hover:text-blue-400"
              >
                See All
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Blog;
