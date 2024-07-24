import React from "react";
import academicsBanner from "../assets/academicsbanner.webp";
import primaryImage from "../assets/primary.webp";
import secondaryImage from "../assets/secondaryimg.jpg";
import seniorSecondaryImage from "../assets/seniorsecondary.png";
import teachingMethodologiesImage from "../assets/teaching.jpg";
import educationalResourcesImage from "../assets/digitalclass.jpg";
import educationalResourcesImage1 from "../assets/digital4.jpeg";
import educationalResourcesImage2 from "../assets/digital2.webp";
import educationalResourcesImage3 from "../assets/digital3.png";

const Academics = () => {
  return (
    <div className="container max-w-6xl mx-auto mt-10 mb-10 p-6 bg-white rounded-lg shadow-lg">
      <div>
        <img
          src={academicsBanner}
          alt="Academics Banner"
          className="w-full object-cover rounded-t-lg"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Curriculum</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <img
              src={primaryImage}
              alt="Primary"
              className="w-full md:w-1/3 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Primary (Grades 1-5)
              </h3>
              <p className="text-lg mb-2">
                Our primary curriculum focuses on foundational skills in
                English, Mathematics, Science, and Social Studies. We emphasize
                the development of literacy, numeracy, and critical thinking
                skills through engaging and interactive lessons.
              </p>
              <p className="text-lg">
                Subjects: English, Mathematics, Science, Social Studies, Art,
                Physical Education
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <img
              src={secondaryImage}
              alt="Secondary"
              className="w-full md:w-1/3 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Secondary (Grades 6-10)
              </h3>
              <p className="text-lg mb-2">
                Our secondary curriculum builds on the foundation laid in the
                primary years, offering a broad and balanced education. We
                provide students with opportunities to explore various subjects
                in-depth, preparing them for higher education and future
                careers.
              </p>
              <p className="text-lg">
                Subjects: English, Mathematics, Science (Physics, Chemistry,
                Biology), Social Studies, Computer Science, Physical Education,
                Art
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <img
              src={seniorSecondaryImage}
              alt="Senior Secondary"
              className="w-full md:w-1/3 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Senior Secondary (Grades 11-12)
              </h3>
              <p className="text-lg font-semibold mt-2">Science Stream:</p>
              <p className="text-lg">
                Physics, Chemistry, Biology, Mathematics, Computer Science,
                English
              </p>
              <p className="text-lg font-semibold mt-2">Commerce Stream:</p>
              <p className="text-lg">
                Accountancy, Business Studies, Economics, Mathematics, English
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-10 mb-4 text-center">
          Teaching Methodologies
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <div>
            <p className="text-lg">
              We use a blend of traditional and modern teaching techniques to
              cater to different learning styles. Our methodologies include
              hands-on activities, collaborative projects, and the integration
              of technology in the classroom. We believe in fostering a
              student-centered learning environment that encourages creativity,
              critical thinking, and problem-solving skills.
            </p>
          </div>
          <img
            src={teachingMethodologiesImage}
            alt="Teaching Methodologies"
            className="w-full md:w-1/3 object-cover rounded-lg"
          />
        </div>

        <h2 className="text-3xl font-bold mt-10 mb-4 text-center">
          Educational Resources
        </h2>
        <div className="flex lg:flex-row md:flex-col flex-col items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col space-y-4 lg:w-[150%] xs:w-full md:w-full mb-5">
            <img
              src={educationalResourcesImage}
              alt="Educational Resources 1"
              className="w-full object-cover rounded-lg mb-4"
            />
            <img
              src={educationalResourcesImage1}
              alt="Educational Resources 2"
              className="w-full object-cover rounded-lg mb-4"
            />
            <img
              src={educationalResourcesImage2}
              alt="Educational Resources 3"
              className="w-full object-cover rounded-lg mb-4"
            />
            <img
              src={educationalResourcesImage3}
              alt="Educational Resources 4"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-grow">
            <p className="text-lg">
              Our school is equipped with state-of-the-art educational resources
              designed to provide a comprehensive and engaging learning
              experience. Here’s how we utilize these resources to enhance
              education: <br></br>
              <span className="font-bold">Digital Classrooms:</span> Our
              classrooms are equipped with the latest digital technology to
              create an interactive learning environment. This includes
              high-resolution projectors, smart boards, and digital tablets that
              facilitate dynamic and engaging lessons. The integration of
              technology into the classroom allows for real-time feedback,
              interactive discussions, and multimedia presentations that enhance
              student understanding and participation.<br></br>
              <span className="font-bold">
                Interactive Learning Modules:
              </span>{" "}
              We employ a variety of interactive learning modules that cater to
              different learning styles and needs. These modules include
              educational software, simulation tools, and interactive games that
              make learning more engaging and effective. Students can explore
              complex concepts through hands-on activities and virtual
              experiments, which help them grasp difficult topics more easily
              and retain information better.<br></br>
              <span className="font-bold">
                Online Educational Platforms:
              </span>{" "}
              To complement traditional teaching methods, we provide access to a
              range of online educational platforms. These platforms offer a
              wealth of resources, including e-books, research articles, and
              video tutorials, which support both classroom learning and
              independent study. Students can access these platforms from
              anywhere, allowing them to continue their education beyond school
              hours and stay updated with the latest developments in their
              subjects.<br></br>
              <span className="font-bold">Digital Libraries:</span> Our digital
              libraries offer an extensive collection of academic and reference
              materials that are accessible to students and teachers alike.
              These libraries include a vast array of digital books, journals,
              and research papers that support advanced learning and research.
              With easy access to these resources, students can explore various
              topics in depth and conduct thorough research for their projects
              and assignments.
              <br></br>
              <span className="font-bold">Collaborative Tools:</span> We use
              various collaborative tools and platforms that enable students to
              work together on projects and assignments in a virtual
              environment. These tools facilitate communication, file sharing,
              and collaborative document editing, allowing students to engage in
              group work and discussions from different locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
