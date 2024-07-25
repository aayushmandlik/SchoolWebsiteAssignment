import React from "react";
import admissionBanner from "../assets/admissionsopen.jpg";
import admissionform from "../assets/admissionform.pdf";

const Admissions = () => {
  const handleDownload = () => {
    window.open(admissionform, "_blank");
  };

  return (
    <div className="container max-w-6xl mx-auto mt-10 mb-10 p-6 bg-white rounded-lg shadow-lg">
      <div>
        <img
          src={admissionBanner}
          alt="Admission Banner"
          className="w-full object-cover rounded-t-lg"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-3xl font-bold mb-4">Admission Process:</h2>
        <p className="text-2xl mb-4">
          Admission forms are available for download. Submit the completed form
          along with required documents at the school office.
        </p>

        <h2 className="text-3xl font-bold mb-4">Criteria:</h2>
        <p className="text-2xl mb-6">
          Admission is based on merit and availability of seats. Entrance tests
          may be conducted for certain grades.
        </p>
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Download Admission Form
        </button>

        <h2 className="text-3xl font-bold mt-10 mb-4">Important Dates:</h2>
        <ul className="list-disc pl-5 text-2xl">
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </div>
    </div>
  );
};

export default Admissions;
