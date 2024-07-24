import React from "react";
import Carousel from "./Carousel";

function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-4xl font-bold mb-4">
        Welcome to Springdale Public School
      </h1>
      <p className="mb-8">
        Where we nurture young minds for a brighter future.
      </p> */}
      <Carousel />
    </div>
  );
}

export default Home;
