import React, { useState } from "react";
import facultyImage1 from "../assets/principal.jpg"; // Replace with actual image paths
import facultyImage2 from "../assets/faculty2.jpg"; // Replace with actual image paths
import facultyImage3 from "../assets/faculty3.webp"; // Replace with actual image paths
import facultyImage4 from "../assets/faculty4.jpg"; // Replace with actual image paths
import facultyImage5 from "../assets/faculty5.jpg"; // Replace with actual image paths
import facultyImage6 from "../assets/faculty6.jpg"; // Replace with actual image paths

const facultyMembers = [
  {
    name: "John Doe",
    position: "Principal",
    qualifications: "M.Ed",
    experience: "20 years",
    image: facultyImage1,
    description:
      "John Doe is the Principal of Springdale Public School. With over 20 years of experience in educational administration, he has successfully led the school through various phases of growth, emphasizing academic excellence and holistic development.",
  },
  {
    name: "Jane Smith",
    position: "Vice Principal",
    qualifications: "M.Sc. in Physics",
    experience: "15 years",
    image: facultyImage2,
    description:
      "Jane Smith, the Vice Principal, holds an M.Sc. in Physics and has 15 years of experience in teaching and administrative roles. She is known for her dedication to improving teaching methodologies and supporting student achievement.",
  },
  {
    name: "Emily Johnson",
    position: "English Teacher",
    qualifications: "M.A. in English",
    experience: "10 years",
    image: facultyImage3,
    description:
      "Emily Johnson is an English Teacher with an M.A. in English and a decade of teaching experience. She is passionate about literature and language, and her classes are designed to enhance students' communication and analytical skills.",
  },
  {
    name: "Michael Brown",
    position: "Mathematics Teacher",
    qualifications: "M.Sc. in Mathematics",
    experience: "8 years",
    image: facultyImage4,
    description:
      "Michael Brown, a Mathematics Teacher with an M.Sc. in Mathematics, has been teaching for 8 years. His focus on practical problem-solving and interactive learning helps students excel in mathematics and develop critical thinking skills.",
  },
  {
    name: "Sophia Davis",
    position: "Science Teacher",
    qualifications: "M.Sc. in Chemistry",
    experience: "12 years",
    image: facultyImage5,
    description:
      "Sophia Davis is a Science Teacher with an M.Sc. in Chemistry and 12 years of experience. She is dedicated to making science engaging through hands-on experiments and interactive lessons that stimulate curiosity and understanding.",
  },
  {
    name: "David Wilson",
    position: "Computer Science Teacher",
    qualifications: "B.Tech in Computer Science",
    experience: "5 years",
    image: facultyImage6,
    description:
      "David Wilson, our Computer Science Teacher, holds a B.Tech in Computer Science. With 5 years of teaching experience, he is focused on equipping students with the skills needed for the rapidly evolving tech industry.",
  },
];

const Faculty = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = facultyMembers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(facultyMembers.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container max-w-6xl mx-auto mb-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Faculty</h2>
      <div className="space-y-6">
        {currentItems.map((member, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-start space-x-6 p-4 border rounded-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
              <p className="text-lg font-semibold">{member.position}</p>
              <p className="text-sm text-gray-600">{member.qualifications}</p>
              <p className="text-sm text-gray-600">{member.experience}</p>
              <p className="mt-2 text-gray-800 text-lg">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <ul className="flex space-x-2">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === number
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } hover:bg-blue-700 hover:text-white`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faculty;
