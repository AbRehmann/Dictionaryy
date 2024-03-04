import React from "react";

function Blog() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px- py-14 mx-auto flex flex-wrap">
          <h1 className=" mb-10 text-black  text-4xl  font-semibold  ">
            Latest Blogs
          </h1>

          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-300 border-opacity-50 p-2 sm:flex-row flex-col">
                <div class=" w-9/12  sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center ">
                  <img
                    src="https://www.rekhtadictionary.com/images/ResorceImages/blog/681679d9-b7d1-417b-8f37-f76a622d9826_Mobile.jpg"
                    alt=""
                  />
                </div>
                <div class="flex-grow">
                  <h1 className="text-lg  text-gray-800">
                    Lost in Lexicon: Exploring the Untranslatable Charm of Urdu
                  </h1>
                  <p className="text-sm text-gray-500">by Atifa Haroon</p>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-300 border-opacity-50 p-2 sm:flex-row flex-col">
                <div class=" w-9/12  sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center ">
                  <img
                    src="https://www.rekhtadictionary.com/images/ResorceImages/blog/681679d9-b7d1-417b-8f37-f76a622d9826_Mobile.jpg"
                    alt=""
                  />
                </div>
                <div class="flex-grow">
                  <h1 className="text-lg  text-gray-800">
                    Lost in Lexicon: Exploring the Untranslatable Charm of Urdu
                  </h1>
                  <p className="text-sm text-gray-500">by Atifa Haroon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
