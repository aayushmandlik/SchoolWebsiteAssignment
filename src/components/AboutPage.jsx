import React from "react";
import schoolBuilding from "../assets/schoolhistory.jpg";
import principal from "../assets/principal.jpg";
import vision from "../assets/vision.webp";
import mission from "../assets/mission.webp";
import values from "../assets/values.jpg";

const AboutPage = () => {
  return (
    <div className="container max-w-6xl mx-auto mb-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 items-center text-center">
        About Us
      </h2>
      <div className="mb-10 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 md:pr-10">
          <h2 className="text-3xl font-medium mb-4">History:</h2>
          <p className="text-xl">
            Founded in 1985, SpringDale Public School has been dedicated to
            providing quality education and holistic development to students.
            Over the years, we have grown into a vibrant community of learners,
            educators, and parents who share a commitment to excellence in
            education and a passion for nurturing young minds.
          </p>
        </div>
        <div className="md:w-2/5 mt-6 md:mt-0">
          <img
            src={schoolBuilding}
            alt="School Building"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

      <hr className="lg:mx-0 my-3 h-1 rounded xs:w-[95%] lg:w-full xs:mx-auto bg-[#e2e2e2] border-none" />

      <div className="mb-10 flex flex-col md:flex-row items-center">
        <div className="md:w-2/5 mt-6 md:mt-0">
          <img
            src={principal}
            alt="Principal"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="md:w-3/5 md:pl-10">
          <h2 className="text-3xl font-medium mb-4">Principal's Message:</h2>
          <p className="text-xl">
            At Springdale, we believe in nurturing the potential of every
            student and guiding them towards a successful future. SpringDale
            Public School was established with a vision to create a nurturing
            environment that promotes academic excellence and personal growth.
            Since its inception, the school has maintained a tradition of
            academic rigor, cultural enrichment, and a supportive community.
            With each passing year, we have expanded our facilities and
            introduced innovative programs to meet the evolving needs of our
            students.
          </p>
        </div>
      </div>

      <hr className="lg:mx-0 my-3 h-1 rounded xs:w-[95%] lg:w-full xs:mx-auto bg-[#e2e2e2]" />

      <div className="mb-10 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 md:pr-10">
          <h2 className="text-3xl font-medium mb-4">Vision:</h2>
          <p className="text-xl">
            Our vision is to create a learning environment that fosters academic
            excellence, critical thinking, and ethical values. We aim to equip
            our students with the knowledge, skills, and attitudes necessary to
            thrive in a rapidly changing world. By cultivating a love for
            learning and a sense of responsibility, we aspire to shape the
            leaders of tomorrow.
          </p>
        </div>
        <div className="md:w-2/5 mt-6 md:mt-0">
          <img
            src={vision}
            alt="vision"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

      <hr className="lg:mx-0 my-3 h-1 rounded xs:w-[95%] lg:w-full xs:mx-auto bg-[#e2e2e2]" />

      <div className="mb-10 flex flex-col md:flex-row items-center">
        <div className="md:w-2/5 mt-6 md:mt-0">
          <img
            src={mission}
            alt="mission"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="md:w-3/5 md:pl-10">
          <h2 className="text-3xl font-medium mb-4">Mission:</h2>
          <p className="text-xl">
            Our mission is to empower students with the knowledge, skills, and
            values needed to thrive in a dynamic world. We are committed to
            providing a well-rounded education that balances academic
            achievement with personal development. Through innovative teaching
            methods, a diverse curriculum, and a supportive community, we strive
            to help each student reach their full potential.
          </p>
        </div>
      </div>

      <hr className="lg:mx-0 my-3 h-1 rounded xs:w-[95%] lg:w-full xs:mx-auto bg-[#e2e2e2]" />

      <div className="mb-10 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 md:pr-10">
          <h2 className="text-3xl font-medium mb-4">Values:</h2>
          <p className="text-xl">
            At SpringDale Public School, our core values guide everything we do:
          </p>
          <ul className="list-disc list-inside text-xl mt-2">
            <li>
              Integrity: We believe in honesty, transparency, and ethical
              behavior in all our actions.
            </li>
            <li>
              Excellence: We strive for the highest standards in academic and
              personal achievement.
            </li>
            <li>
              Respect: We foster a culture of respect for self, others, and the
              environment.
            </li>
            <li>
              Collaboration: We value teamwork and collaboration among students,
              staff, and the community.
            </li>
            <li>
              Innovation: We encourage creativity and innovation in teaching,
              learning, and problem-solving.
            </li>
            <li>
              Responsibility: We promote a sense of responsibility and
              accountability in our students.
            </li>
            <li>
              Empathy: We nurture empathy and compassion, recognizing the
              importance of understanding and supporting others.
            </li>
          </ul>
        </div>
        <div className="md:w-2/5 mt-6 md:mt-0">
          <img
            src={values}
            alt="values"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
