import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
    if (path.startsWith("/#")) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Faculty", path: "/faculty" },
    { name: "Students", path: "/#students" },
    { name: "Gallery", path: "/#gallery" },
    { name: "Contact Us", path: "/#contact" },
  ];

  return (
    <div className="mb-28">
      <nav className="fixed w-full z-10 top-0 shadow bg-white">
        <div className="container mx-auto flex items-center justify-between text-gray-500 p-1">
          <div>
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                className="w-24 h-24"
                src={Logo}
                alt="Springdale Public School"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-10 font-thin">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => {
                  handleLinkClick(link.path);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className={`font-medium text-xl ${
                  activeLink === link.path ? "border-b-2 border-black" : ""
                } hover:text-black`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-500 hover:text-black font-medium text-xl"
                  onClick={() => handleLinkClick(link.path)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
