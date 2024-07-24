// src/Gallery.js

import React, { useState } from "react";
import GalleryItem from "./GalleryItem";

const galleryData = [
  // Example data; replace with actual data
  {
    id: 1,
    type: "photo",
    url: "src/assets/sportsdaybanner.png",
    date: "2024-07-01",
    event: "Sports Day",
  },
  {
    id: 2,
    type: "photo",
    url: "src/assets/sciencefair.jpg",
    date: "2024-07-03",
    event: "Science Exhibition",
  },
  {
    id: 3,
    type: "photo",
    url: "src/assets/culturalgallery.jpeg",
    date: "2024-07-03",
    event: "Cultural Fest",
  },
  {
    id: 4,
    type: "video/mp4",
    url: "src/assets/schooltour.mp4",
    date: "2024-07-01",
    event: "School Tour",
  },
  {
    id: 5,
    type: "video/mp4",
    url: "src/assets/annualvideo.mp4",
    date: "2024-08-05",
    event: "Annual Function",
  },
  {
    id: 6,
    type: "video/mp4",
    url: "src/assets/videoplayback.mp4",
    date: "2024-09-010",
    event: "Crafting",
  },

  // Add more items here...
];

const Gallery = () => {
  const [filter, setFilter] = useState({ type: "", date: "" });

  const filteredItems = galleryData.filter((item) => {
    const matchesType = filter.type ? item.type === filter.type : true;
    const matchesDate = filter.date ? item.date === filter.date : true;
    return matchesType && matchesDate;
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="my-6 py-20" id="gallery">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>

        <div className="my-6">
          <h2 className="text-xl font-semibold mb-2">Filters</h2>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
            <div className="mb-4 md:mb-0 w-full md:w-1/2">
              <label className="block text-gray-700">Event Type</label>
              <select
                name="type"
                value={filter.type}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">All</option>
                <option value="photo">Photos</option>
                <option value="video">Videos</option>
              </select>
            </div>
            <div className="w-full md:w-1/2">
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={filter.date}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
