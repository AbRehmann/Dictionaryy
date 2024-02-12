import React from "react";
import "tailwindcss/tailwind.css";
import Example from "./DailyWord";
import CardSlider from "./CardSlider";
import SingleCard from "./SingleCard";
import Tabel from "./tabel";
import SameSoundWord from "./SameSoundWord";
import Blog from "./Blog";
function Body() {
  return (
    <>
      <div>
        <div className="  image">
          <img
            className=" w-full    border rounded-lg  "
            src="https://www.rekhtadictionary.com/content/assets/img/Desktop/rdic-banner-desktop-en.jpg"
            alt="mfklje"
          />

          <div className="mb-10">
            {" "}
            <Example />
          </div>
          <CardSlider />
        </div>
        <div>
          <SingleCard />
        </div>

        <div>
          <Tabel />
        </div>
        <div>
          <SameSoundWord />
        </div>

        <div>
          <Blog />
        </div>
      </div>
    </>
  );
}

export default Body;
