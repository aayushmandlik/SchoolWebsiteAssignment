import React from "react";
import { useNavigate } from "react-router-dom";

const GalleryItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="relative group">
      {item.type === "photo" ? (
        <img
          src={item.url}
          alt={item.event}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      ) : (
        <video
          src={item.url}
          controls
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      )}
      {item.event === "Sports Day" && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
          onClick={() => {
            navigate("/sportsgallery");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View Sports Gallery
          </button>
        </div>
      )}
      {item.event === "Science Exhibition" && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
          onClick={() => {
            navigate("/exhibitiongallery");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View Exhibition Gallery
          </button>
        </div>
      )}
      {item.event === "Cultural Fest" && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
          onClick={() => {
            navigate("/culturalgallery");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View Fest Gallery
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryItem;
