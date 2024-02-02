import React from "react";
import "tailwindcss/tailwind.css";
import Example from "./DailyWord";
function Body() {
  return (
    <>
      <div className="image">
        <img
          className=" w-full   border rounded-lg  "
          src="https://www.rekhtadictionary.com/content/assets/img/Desktop/rdic-banner-desktop-en.jpg"
          alt="mfklje"
        />

        <Example />
      </div>
    </>
  );
}

export default Body;
