import React, { useState } from "react";
import sports1 from "../assets/sports1.jpg";
import sports2 from "../assets/sports2.jpg";
import sports3 from "../assets/sports3.webp";
import sports4 from "../assets/sports4.jpg";
import sports5 from "../assets/sports5.jpg";
import sports6 from "../assets/sports6.jpg";
import sports7 from "../assets/sports7.png";
import sports8 from "../assets/sports8.jpg";
import sports9 from "../assets/sports9.jpg";

const sportsGalleryData = [
  { url: sports1, year: 2022 },
  { url: sports2, year: 2022 },
  { url: sports3, year: 2022 },
  { url: sports4, year: 2022 },
  { url: sports5, year: 2023 },
  { url: sports6, year: 2023 },
  { url: sports7, year: 2023 },
  { url: sports8, year: 2024 },
  { url: sports9, year: 2024 },
];

const SportsGallery = () => {
  const [selectedYear, setSelectedYear] = useState("");

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const filteredData = selectedYear
    ? sportsGalleryData.filter((item) => item.year.toString() === selectedYear)
    : sportsGalleryData;

  const groupedByYear = filteredData.reduce((acc, item) => {
    (acc[item.year] = acc[item.year] || []).push(item);
    return acc;
  }, {});

  return (
    <div className="my-6 py-20" id="sportsgallery">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Sports Gallery</h1>

        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Filter by Year
          </label>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="w-full md:w-1/2 px-3 py-2 border rounded"
          >
            <option value="">All Years</option>
            {[...new Set(sportsGalleryData.map((item) => item.year))].map(
              (year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              )
            )}
          </select>
        </div>

        {Object.keys(groupedByYear).map((year) => (
          <div key={year}>
            <h2 className="text-2xl font-semibold mb-4">{year}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {groupedByYear[year].map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image.url}
                    alt={`Sports Gallery Image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsGallery;
