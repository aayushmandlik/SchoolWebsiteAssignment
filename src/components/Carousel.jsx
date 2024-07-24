import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sportsday from "../assets/sportsbanner.jpg";
import science from "../assets/sciencefair.jpg";
import cultural from "../assets/culturalfestgif2.gif";

const images = [
  { src: sportsday, alt: "Annual Sports Day" },
  { src: science, alt: "Science Exhibition" },
  { src: cultural, alt: "Cultural Fest" },
];

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-[100%] h-[100%] mx-auto object-cover border-2 border-s rounded"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
