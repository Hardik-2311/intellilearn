import React from "react";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
const Instructors = () => {
  const instructors = [
    {
      name: "John Doe",
      position: "Lead Instructor",
      about: "John Doe is an experienced educator with expertise in...",
      imageUrl: "/banner2.jpg",
    },
    {
      name: "Jane Smith",
      position: "Senior Instructor",
      about: "Jane Smith has been teaching for over 10 years...",
      imageUrl: "/banner2.jpg",
    },
    {
      name: "Alex Johnson",
      position: "Instructor",
      about: "Alex Johnson specializes in advanced topics such as...",
      imageUrl: "/banner2.jpg",
    },
    {
      name: "Emily Brown",
      position: "Assistant Instructor",
      about: "Emily Brown is passionate about helping students...",
      imageUrl: "/banner2.jpg",
    },
  ];
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center my-4 text-[#20B486]">
        Meet Our Heroes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className="bg-[#F2F4F7] shadow-md rounded-lg p-6 pb-2"
          >
            <img
              src={instructor.imageUrl}
              alt={instructor.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl text-center font-semibold">
              {instructor.name}
            </h2>
            <p className="text-[#20B486] mb-2 text-center">
              {instructor.position}
            </p>
            <p className="text-gray-700">{instructor.about}</p>
            <div className="flex justify-center gap-2 items-center my-2">
              <CiLinkedin className="w-7 h-7 cursor-pointer transition-all duration-500 ease-in-out hover:scale-110" />
              <CiTwitter className="w-7 h-7 cursor-pointer transition-all duration-500 ease-in-out hover:scale-110" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
