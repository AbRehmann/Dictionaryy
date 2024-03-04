import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const Sidebar = () => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const extractedNames = data.map((user) => user.name);
        setNames(extractedNames);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchNames();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      id="slider"
      className="fixed top-15 left-0 h-screen w-80 bg-white text-black overflow-y-auto"
    >
      <h2 className="text-xl p-4">Top searched</h2>
      <ul>
        {names.map((name, index) => (
          <li
            key={index}
            className="p-4 m-5 bg-white text-black border rounded-lg mb-4 flex items-center hover:bg-blue-50 cursor-pointer"
          >
            <div className="flex-1">
              <h3 className="text-base font-bold">{name}</h3>
              <p className="text-sm">Description goes here...</p>
            </div>
            <div className="ml-4">
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
