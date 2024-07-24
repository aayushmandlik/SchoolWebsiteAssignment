import React from "react";
import schoolBuilding from "../assets/schoolhistory.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="container max-w-6xl mx-auto mb-10 bg-white p-6 rounded-lg shadow-lg"
      id="about"
    >
      <h2 className="text-3xl font-bold mb-6 items-center text-center">
        About Us
      </h2>
      <div className="mb-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto ">
        <div className="md:w-3/5 md:pr-10 ">
          {/* <h2 className="text-3xl font-medium mb-4">History</h2> */}
          <p className="text-xl">
            Founded in 1985, SpringDale Public School has been dedicated to
            providing quality education and holistic development to students.
            Over the years, we have grown into a vibrant community of learners,
            educators, and parents who share a commitment to excellence in
            education and a passion for nurturing young minds.
          </p>
          <p className="text-xl">
            SpringDale Public School was established with a vision to create a
            nurturing environment that promotes academic excellence and personal
            growth. Since its inception, the school has maintained a tradition
            of academic rigor, cultural enrichment, and a supportive community.
            With each passing year, we have expanded our facilities and
            introduced innovative programs to meet the evolving needs of our
            students.
          </p>
          <Link to="/about">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-5"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              View More
            </button>
          </Link>
        </div>
        <div className="md:w-2/5 mt-6 md:mt-0">
          <img
            src={schoolBuilding}
            alt="School Building"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
