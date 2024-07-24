// src/ContactUs.js

import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent Successfully", {
      // position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000, // Duration in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="mt-6 bg-gray-100 py-10" id="contact">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 mt-5">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 underline">Address</h2>
              <p>
                Springdale Public School, 123 Education Lane, Mumbai,
                Maharashtra, 401101
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 underline">
                Contact Numbers
              </h2>
              <a href="tel:+1 (123) 456-7890" className="hover:text-blue-500">
                <i className="fa fa-phone mr-2"></i>+1 (123) 456-7890
              </a>
              {/* <p>Fax: (123) 456-7891</p> */}
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 underline">Email</h2>
              <a
                href="mailto:info@springdale.edu"
                className="hover:text-blue-500"
              >
                <i className="fa fa-envelope mr-2"></i>info@springdale.edu
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full px-3 py-2 border rounded"
                  rows="5"
                  required
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Our Location</h2>
          <div className="w-full h-64">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538587945439!2d-122.0842490846811!3d37.4219998798252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9e2b8a35f2f%3A0xd7afec6760b46f1!2sGoogleplex!5e0!3m2!1sen!2sus!4v1630574578522!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
