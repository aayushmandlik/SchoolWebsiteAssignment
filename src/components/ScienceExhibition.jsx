import React, { useState } from "react";
import science1 from "../assets/science1.jpg";
import science2 from "../assets/science2.jpg";
import science3 from "../assets/science3.webp";
import science4 from "../assets/science4.jpg";
import science5 from "../assets/science5.jpg";
import science6 from "../assets/science6.jpg";

const scienceExhibitionData = [
  { url: science1, year: 2022 },
  { url: science2, year: 2022 },
  { url: science3, year: 2022 },
  { url: science4, year: 2023 },
  { url: science5, year: 2023 },
  { url: science6, year: 2023 },
];

const ScienceExhibitionGallery = () => {
  const [selectedYear, setSelectedYear] = useState("");

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const filteredData = selectedYear
    ? scienceExhibitionData.filter(
        (item) => item.year.toString() === selectedYear
      )
    : scienceExhibitionData;

  const groupedByYear = filteredData.reduce((acc, item) => {
    (acc[item.year] = acc[item.year] || []).push(item);
    return acc;
  }, {});

  return (
    <div className="my-6 py-20" id="scienceExhibitionGallery">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Science Exhibition Gallery
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
            {[...new Set(scienceExhibitionData.map((item) => item.year))].map(
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
                    alt={`Science Exhibition Image ${index + 1}`}
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

export default ScienceExhibitionGallery;
