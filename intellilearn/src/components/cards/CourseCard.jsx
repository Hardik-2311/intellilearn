import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function CourseCard({ dummyData }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      {dummyData.map((course) => (
        <SwiperSlide key={course._id}>
          <div className="p-4">
            <div className="max-w-sm bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-56 object-cover object-center"
                src={course.image}
                alt="Course Image"
              />
              <div className="px-6 py-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold text-xl">{course.title}</div>
                  <div className="text-gray-700 text-base">
                    ${course.price.toFixed(2)}
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                  >
                    {/* Rating SVG */}
                  </svg>
                  <p className="text-gray-700 text-base ml-2">{`${course.rating} Rating`}</p>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                  >
                    {/* Lessons SVG */}
                  </svg>
                  <p className="text-gray-700 text-base ml-2">{`${course.lessons} Lessons`}</p>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                  >
                    {/* Enrollment Limit SVG */}
                  </svg>
                  <p className="text-gray-700 text-base ml-2">{`${course.enrollmentLimit} Students`}</p>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Start Course
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CourseCard;
