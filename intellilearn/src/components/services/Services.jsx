import React from "react";

// swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Services = () => {
  const servicesData = [
    {
      title: "Course Title 1",
      instructor: "John Doe",
      price: "$99",
      ratings: 4.5,
    },
    {
      title: "Course Title 1",
      instructor: "John Doe",
      price: "$99",
      ratings: 4.5,
    },
    {
      title: "Course Title 1",
      instructor: "John Doe",
      price: "$99",
      ratings: 4.5,
    },
    {
      title: "Course Title 1",
      instructor: "John Doe",
      price: "$99",
      ratings: 4.5,
    },
  ];
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
        {servicesData.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="course-card bg-white p-4 shadow-lg cursor-pointer hover:bg-[#4AC8AE] hover:text-white rounded-lg">
              <div className="course-details">
                <h3 className="course-title text-xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="course-instructor">
                  Instructor: {service.instructor}
                </p>
                <p className="course-price hover:text-gray-700">
                  {service.price}
                </p>
                <div className="course-ratings mt-2">
                  Ratings: {service.ratings}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
