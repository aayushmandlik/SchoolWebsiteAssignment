import React from "react";
import herolg from "../assets/herolg.jpg";
import heroxs from "../assets/heroxs.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="flex items-start justify-end">
        <img src={herolg} alt="" className="w-full h-full hidden lg:block" />
        <img src={heroxs} alt="" className="w-full h-full block lg:hidden" />

        <div className="flex flex-col absolute top-[8vw] right-[2vw] justify-end text-end lg:max-w-[100%]">
          <div className="flex lg:flex-col justify-end pr-5 text-start">
            <h2 className="font-bold text-white text-2xl lg:text-5xl max-w-[30%] lg:max-w-[100%]">
              Welcome To SpringDale Public School
            </h2>
          </div>
          <p className="text-2xl font-bold mt-10 hidden lg:block">
            We are a school that believes in the power of education to transform
            lives.
          </p>
          <div className="flex lg:flex-col justify-end pr-5 text-start">
            <h2 className="font-bold text-white text-xl lg:text-6xl text-start mt-4 lg:mt-12 max-w-[30%] lg:max-w-[100%]">
              New Admissions Are Open:
            </h2>
          </div>
          <div className="flex lg:flex-col justify-end pr-7 text-start">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 max-w-[30%] lg:max-w-[100%]"
              onClick={() => navigate("/admissions")}
            >
              Admissions
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="flex gap-5">
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-10 w-1/2"
                onClick={() => navigate("/#contact")}
              >
                Contact Us
              </button>
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-10 w-1/2"
                onClick={() => navigate("/academics")}
              >
                Our Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
