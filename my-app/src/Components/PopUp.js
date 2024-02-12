import React, { useState, useEffect } from "react";

const LocationPopup = () => {
  const [permission, setPermission] = useState(null);

  useEffect(() => {
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
      // Check if the user has previously granted permission
      const permission = localStorage.getItem("locationPermission");
      if (permission === "allow") {
        // If permission is already granted, proceed to get location
        getLocation();
      } else if (permission === "deny") {
        // If permission is denied, do something accordingly
        // For example, display a message or fallback behavior
      } else {
        // If permission hasn't been decided yet, prompt the user
        askForPermission();
      }
    } else {
      // Geolocation not supported, handle accordingly
    }
  }, []);

  // Function to prompt the user for permission
  const askForPermission = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPermission("allow");
        localStorage.setItem("locationPermission", "allow");
        // You can do something with the location if needed
        // For example, send it to the server
        console.log("Latitude: ", position.coords.latitude);
        console.log("Longitude: ", position.coords.longitude);
      },
      (error) => {
        setPermission("deny");
        localStorage.setItem("locationPermission", "deny");
        // Handle error or fallback behavior
        console.error("Error getting location: ", error.message);
      }
    );
  };

  // Function to get location once permission is granted
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Do something with the location
        console.log("Latitude: ", position.coords.latitude);
        console.log("Longitude: ", position.coords.longitude);
      },
      (error) => {
        // Handle error or fallback behavior
        console.error("Error getting location: ", error.message);
      }
    );
  };

  return (
    <div>
      {/* Render your pop-up component here based on the permission state */}
      {/* For example: */}
      {permission === null && (
        <div>
          <p>Please allow access to your location.</p>
          <button onClick={askForPermission}>Allow this time</button>
          {/* Add an option for 'Allow in every visit' if needed */}
        </div>
      )}
    </div>
  );
};

export default LocationPopup;
