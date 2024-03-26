import React from "react";

function CourseCard({ image, name, students, rating, lessons }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="Course Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="flex items-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
          >
            <path
              d="M7 8C4.78125 8 3 6.21875 3 4C3 1.8125 4.78125 0 7 0C9.1875 0 11 1.8125 11 4C11 6.21875 9.1875 8 7 8ZM8.5625 9.5C11.5625 9.5 14 11.9375 14 14.9375C14 15.5312 13.5 16 12.9062 16H1.0625C0.46875 16 0 15.5312 0 14.9375C0 11.9375 2.40625 9.5 5.40625 9.5H8.5625Z"
              fill="#080808"
              fill-opacity="0.25"
            />
          </svg>
          <p className="text-gray-700 text-base">{students} Students</p>
        </div>
        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
          >
            <path
              d="M18.875 2.59375C18.875 2.6875 19.4688 5.25 17.75 7.6875C16.5625 9.4375 14.5938 10.6562 11.875 11.375C11.3125 11.5312 10.9062 12.0625 10.9062 12.6562C10.9062 13.4062 11.5 14 12.25 14H12.4062C13.2188 14 13.9062 14.6875 13.9062 15.5C13.9062 15.7812 13.7188 16 13.4375 16H6.46875C6.21875 16 6 15.7812 6 15.5C6 14.6875 6.65625 14 7.5 14H7.625C8.375 14 9 13.4062 8.96875 12.6562C8.96875 12.0625 8.59375 11.5312 8 11.375C5.28125 10.6562 3.3125 9.4375 2.15625 7.6875C0.5 5.25 1.09375 2.6875 1.09375 2.59375C1.1875 2.25 1.5 2 1.84375 2H5C4.96875 1.625 4.96875 1.28125 5 0.96875C5 0.4375 5.4375 0 6 0H13.9688C14.5312 0 14.9688 0.4375 14.9688 0.96875C15 1.28125 15 1.625 14.9688 2H18.125C18.4688 2 18.7812 2.25 18.875 2.59375ZM3.40625 6.875C4.125 7.96875 5.28125 8.8125 6.8125 9.4375C5.65625 7.625 5.1875 5.375 5 3.5H2.5C2.46875 4.25 2.53125 5.59375 3.40625 6.875ZM16.5625 6.875C17.4375 5.59375 17.5 4.25 17.4688 3.5H14.9688C14.7812 5.375 14.3125 7.625 13.1562 9.4375C14.6875 8.8125 15.8438 7.96875 16.5625 6.875Z"
              fill="#080808"
              fill-opacity="0.25"
            />
          </svg>
          <p className="text-gray-700 text-base">{rating} Rating</p>
        </div>
        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
          >
            <path
              d="M14 10.5V1.5C14 0.6875 13.3125 0 12.5 0H11V6C11 6.40625 10.5 6.625 10.1875 6.375L8.5 5L6.78125 6.40625C6.46875 6.65625 6 6.4375 6 6V0H3C1.3125 0 0 1.34375 0 3V13C0 14.6875 1.3125 16 3 16H13C13.5312 16 14 15.5625 14 15C14 14.6562 13.7812 14.3438 13.5 14.1562V11.625C13.7812 11.3438 14 10.9688 14 10.5ZM12 14H3C2.4375 14 2 13.5625 2 13C2 12.4688 2.4375 12 3 12H12V14Z"
              fill="#080808"
              fill-opacity="0.25"
            />
          </svg>
          <p className="text-gray-700 text-base">{lessons} Lessons</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Course
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
