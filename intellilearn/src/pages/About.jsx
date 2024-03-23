import React from "react";
import Layout from "../layout/Layout";

const About = () => {
  const benefitsData = [
    {
      name: "Standardization",
      description:
        "Enhance efficiency and consistency across processes by implementing standardized procedures tailored to your organization's needs.",
    },
    {
      name: "Reduced Costs",
      description:
        "Streamline operations and optimize resources to achieve significant cost savings, ensuring better financial stability and competitiveness.",
    },
    {
      name: "More Customization",
      description:
        "Tailor solutions precisely to individual requirements, offering unparalleled flexibility and adaptability to diverse needs and preferences.",
    },
    {
      name: "Affordable Pricing",
      description:
        "Access high-quality services and products at competitive prices, enabling you to achieve your goals without exceeding your budget constraints.",
    },
    {
      name: "Learner Satisfaction",
      description:
        "Prioritize learners' needs and preferences, fostering engagement and motivation, resulting in a more satisfying and rewarding learning experience.",
    },
    {
      name: "Multimedia Materials",
      description:
        "Utilize a diverse range of multimedia resources to deliver engaging and interactive learning experiences, catering to different learning styles effectively.",
    },
  ];
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 my-14 flex items-center justify-between gap-4">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-[#1A906B]">About Us</h1>
          <h3 className="text-3xl capitalize font-bold">
            <span className="text-[#FF9B26]">INTELLILEARN</span> providing the
            best opportunities to the students around the globe
          </h3>
          <p className="text-md leading-relaxed mt-4">
            We are committed to revolutionizing the learning experience for
            students worldwide. With a focus on innovation and excellence,
            INTELLILEARN opens doors to endless possibilities, empowering
            learners to achieve their full potential.
          </p>
          <button className="bg-[#FF9B26] my-8 px-8 w-[200px] text-white py-2 rounded-full">
            Join us
          </button>
        </div>
        <div className="relative w-[400px] h-[330px] bg-[#F2F2F2] rounded-xl">
          <div className="absolute -top-10 -right-10">
            <img
              src="/banner2.jpg"
              alt=""
              className="w-[250px] h-[140px] rounded-xl"
            />
          </div>
          <div className="absolute top-60 -left-10 rounded-xl">
            <img
              src="/banner2.jpg"
              alt=""
              className="w-[250px] h-[140px] rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 my-14 flex items-center justify-between gap-6">
        <div className="w-1/2">
          <img src="/banner-image.jpg" alt="" />
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <h3 className="text-2xl font-bold mb-2 text-[#1A906B] uppercase">
            Discover Our Features
          </h3>
          <div className="flex flex-col gap-4">
            <p>
              Explore our range of innovative features designed to elevate your
              learning experience to new heights. With cutting-edge technology
              and personalized learning solutions, we strive to meet your unique
              needs and preferences.
            </p>
            <p>
              Embark on a journey of discovery and growth with INTELLILEARN. Our
              comprehensive platform offers a wealth of resources and
              opportunities to expand your knowledge and skills, empowering you
              to thrive in today's dynamic world.
            </p>
          </div>
          <p>
            Dive into a world of endless possibilities and unlock your full
            potential with INTELLILEARN. Join us on a journey of learning and
            discovery, where every step brings you closer to your goals and
            aspirations.
          </p>
          <button className="bg-[#FF9B26] px-8 w-[200px] text-white py-2 rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="mx-auto my-16 max-w-5xl">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="text-lg text-[#ff9b26] font-bold uppercase">
              Our Benefits
            </p>
            <h2 className="mt-4 font-bold text-xl text-gray-900 sm:text-3xl">
              By Joining INTELLILEARN, You Can Avail a Host of Benefits
            </h2>
            <p className="mt-8 text-lg text-gray-600">
              Access high-quality courses and resources to enhance your skills
              and accelerate your career growth.
            </p>
          </div>
        </div>
        {/* card */}
        <div className="container mx-auto px-4 py-8 my-14">
          <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-4">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className={`rounded-lg ${
                  index % 2 === 0 ? "bg-[#22B286]/20" : "bg-gray-100"
                } p-4`}
              >
                <div className="text-lg font-bold text-[#22b286]/90 mb-2">
                  {`0${index + 1}`}
                </div>
                <div className="mb-2 font-semibold text-lg">{benefit.name}</div>
                <div className="text-sm text-gray-600 mb-4">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
