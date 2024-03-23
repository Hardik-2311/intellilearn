import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Popular = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6">Most Popular Courses</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
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
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="p-12"
      >
        <SwiperSlide>
          <div className="course-card bg-white p-4 shadow-lg rounded-lg">
            <img
              src="/banner-image.jpg"
              alt="Course"
              className="course-image w-full rounded-md mb-4"
            />
            <div className="course-details">
              <h3 className="course-title text-xl font-bold mb-2">
                Course Title 1
              </h3>
              <p className="course-instructor">Instructor: John Doe</p>
              <p className="course-price text-gray-700">$99</p>
              <div className="course-ratings mt-2">Ratings: 4.5</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-card bg-white p-4 shadow-lg rounded-lg">
            <img
              src="/banner-image.jpg"
              alt="Course"
              className="course-image w-full rounded-md mb-4"
            />
            <div className="course-details">
              <h3 className="course-title text-xl font-bold mb-2">
                Course Title 1
              </h3>
              <p className="course-instructor">Instructor: John Doe</p>
              <p className="course-price text-gray-700">$99</p>
              <div className="course-ratings mt-2">Ratings: 4.5</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-card bg-white p-4 shadow-lg rounded-lg">
            <img
              src="/banner-image.jpg"
              alt="Course"
              className="course-image w-full rounded-md mb-4"
            />
            <div className="course-details">
              <h3 className="course-title text-xl font-bold mb-2">
                Course Title 1
              </h3>
              <p className="course-instructor">Instructor: John Doe</p>
              <p className="course-price text-gray-700">$99</p>
              <div className="course-ratings mt-2">Ratings: 4.5</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-card bg-white p-4 shadow-lg rounded-lg">
            <img
              src="/banner-image.jpg"
              alt="Course"
              className="course-image w-full rounded-md mb-4"
            />
            <div className="course-details">
              <h3 className="course-title text-xl font-bold mb-2">
                Course Title 1
              </h3>
              <p className="course-instructor">Instructor: John Doe</p>
              <p className="course-price text-gray-700">$99</p>
              <div className="course-ratings mt-2">Ratings: 4.5</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="course-card bg-white p-4 shadow-lg rounded-lg">
            <img
              src="/banner-image.jpg"
              alt="Course"
              className="course-image w-full rounded-md mb-4"
            />
            <div className="course-details">
              <h3 className="course-title text-xl font-bold mb-2">
                Course Title 1
              </h3>
              <p className="course-instructor">Instructor: John Doe</p>
              <p className="course-price text-gray-700">$99</p>
              <div className="course-ratings mt-2">Ratings: 4.5</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Popular;
