import React, { useState } from "react";
import cultural1 from "../assets/cultural1.jpg";
import cultural2 from "../assets/cultural2.jpg";
import cultural3 from "../assets/cultural3.jpg";
import cultural4 from "../assets/cultural4.png";
import cultural5 from "../assets/cultural5.jpg";
import cultural6 from "../assets/cultural6.webp";

const culturalFestData = [
  { url: cultural1, year: 2022 },
  { url: cultural2, year: 2022 },
  { url: cultural3, year: 2022 },
  { url: cultural4, year: 2023 },
  { url: cultural5, year: 2023 },
  { url: cultural6, year: 2023 },
];

const CulturalFestGallery = () => {
  const [selectedYear, setSelectedYear] = useState("");

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const filteredData = selectedYear
    ? culturalFestData.filter((item) => item.year.toString() === selectedYear)
    : culturalFestData;

  const groupedByYear = filteredData.reduce((acc, item) => {
    (acc[item.year] = acc[item.year] || []).push(item);
    return acc;
  }, {});

  return (
    <div className="my-6 py-20" id="culturalFestGallery">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Cultural Fest Gallery
        </h1>

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
            {[...new Set(culturalFestData.map((item) => item.year))].map(
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
                <div key={index} className="relative mt-4">
                  <img
                    src={image.url}
                    alt={`Cultural Fest Image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
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

export default CulturalFestGallery;
