// src/Students.js

import React, { useState } from "react";
import excbanner from "../assets/extracurricularbanner.png";
import exc1 from "../assets/exc1.jpg";
import exc2 from "../assets/exc2.jpg";
import exc3 from "../assets/exc3.jpg";
import exc4 from "../assets/exc4.jpg";

import achievebanner from "../assets/achievementbanner.jpg";
import achieve1 from "../assets/achieve1.jpg";
import achieve2 from "../assets/achieve2.jpg";
import achieve3 from "../assets/achieve3.jpg";
import achieve4 from "../assets/achieve4.jpg";

import studentcouncilbanner from "../assets/studentcouncilbanner.png";
import studentcouncil1 from "../assets/studentcouncil1.jpg";
import studentcouncil2 from "../assets/studentcouncil2.jpg";
import studentcouncil3 from "../assets/studentcouncil3.jpg";
import studentcouncil4 from "../assets/studentcouncil4.jpg";

const Students = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("activities");

  // Function to change the active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Sample gallery images
  const galleryImagesExc = [exc1, exc2, exc3, exc4];

  const galleryImagesAchieve = [achieve1, achieve2, achieve3, achieve4];

  const galleryImagesStudentCouncil = [
    studentcouncil1,
    studentcouncil2,
    studentcouncil3,
    studentcouncil4,
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10" id="students">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Students Life</h1>

        {/* Tabs Navigation */}
        <div className="relative mb-6">
          <div className="flex flex-wrap border-b border-gray-300">
            <button
              onClick={() => handleTabChange("activities")}
              className={`flex-1 py-2 px-4 text-center font-semibold ${
                activeTab === "activities"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-700"
              } transition-colors duration-300 whitespace-nowrap`}
            >
              Extracurricular Activities
            </button>
            <button
              onClick={() => handleTabChange("achievements")}
              className={`flex-1 py-2 px-4 text-center font-semibold ${
                activeTab === "achievements"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-700"
              } transition-colors duration-300 whitespace-nowrap`}
            >
              Achievements
            </button>
            <button
              onClick={() => handleTabChange("leadership")}
              className={`flex-1 py-2 px-4 text-center font-semibold ${
                activeTab === "leadership"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-700"
              } transition-colors duration-300 whitespace-nowrap`}
            >
              Leadership Opportunities
            </button>
          </div>
        </div>

        {/* Tabs Content */}
        <div className="transition-opacity duration-500 ease-in-out">
          {activeTab === "activities" && (
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-4">
                Extracurricular Activities, Clubs, and Societies
              </h2>
              <p className="mb-4">
                Our school offers a vibrant range of extracurricular activities,
                clubs, and societies to cater to diverse interests. Students can
                participate in sports teams, debate clubs, music ensembles, art
                societies, and more. These activities not only help students
                develop their skills and talents but also encourage teamwork and
                leadership.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
                  <img
                    src={excbanner}
                    alt="Extracurricular Activities"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:col-span-1 grid grid-cols-2">
                  {galleryImagesExc.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        className="w-full h-32 object-cover border border-gray-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-4">
                Achievements and Accolades
              </h2>
              <p className="mb-4">
                We are proud of our students' accomplishments both inside and
                outside the classroom. Our students regularly achieve top honors
                in academic competitions, sports events, and cultural festivals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
                  <img
                    src={achievebanner}
                    alt="Achievements"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:col-span-1 grid grid-cols-2">
                  {galleryImagesAchieve.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        className="w-full h-32 object-cover border border-gray-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "leadership" && (
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-4">
                Student Council and Leadership Opportunities
              </h2>
              <p className="mb-4">
                Our school encourages students to take on leadership roles and
                be active in student governance. The Student Council provides a
                platform for students to voice their opinions, organize events,
                and contribute to school improvement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
                  <img
                    src={studentcouncilbanner}
                    alt="Extracurricular Activities"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:col-span-1 grid grid-cols-2">
                  {galleryImagesStudentCouncil.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        className="w-full h-32 object-cover border border-gray-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Students;
