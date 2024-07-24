// src/GalleryItem.js

import React from "react";

const GalleryItem = ({ item }) => {
  return (
    <div className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg">
      {item.type === "photo" ? (
        <img
          src={item.url}
          alt={item.event}
          className="w-full h-64 object-cover"
        />
      ) : (
        <video
          src={item.url}
          controls
          loop
          className="w-full h-64 object-cover"
        >
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
        <p>{item.event}</p>
        <p>{item.date}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
