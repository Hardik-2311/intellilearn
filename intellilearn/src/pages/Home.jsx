import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Initialize Swiper core components

const Home = () => {
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
  const testimonials = [
    {
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      comment:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Alex Johnson",
      comment:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Emily Brown",
      comment:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <Layout>
      <div className="mx-auto mb-16 mt-16 max-w-5xl">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Banner */}
          <div className="col-span-1 relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
            <div className="flex flex-col  h-full px-6 lg:px-8">
              <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl capitalize">
                Up you <span className="text-[#20B486]">skills</span> to{" "}
                <span className="text-[#20B486]">Advannce</span> your{" "}
                <span className="text-[#20B486]">career</span> path.
              </h2>
              <p className="my-4 text-lg text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam minima nesciunt maxime saepe repellat ipsa
                consequuntur at odio accusantium corrupti! Quisquam consequatur
                in repellat deleniti delectus tenetur rerum, id illum.
              </p>
              <div className=" gap-4 flex items-center justify-items-start ">
                <div>
                  <Link
                    to="/signup"
                    className="inline-block px-6 py-3 rounded-lg bg-[#20B486] text-white"
                  >
                    Get Started
                  </Link>
                </div>
                <div>
                  <Link
                    to="/trial"
                    className="inline-block px-6 py-3 rounded-lg bg-gray-500 text-white hover:bg-gray-600"
                  >
                    Free Trial
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Banner */}
          <div className="col-span-1 relative">
            {/* Image */}
            <img
              src="/banner2.jpg"
              alt="Banner Image"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="absolute w-72 h-72 rounded-full bg-[#20B486] bg-opacity-20 animate-pulse"></div>
              <div className="absolute w-48 h-48 rounded-full bg-[#20B486] bg-opacity-20 animate-pulse"></div>
              <div className="absolute w-36 h-36 rounded-full bg-[#20B486] bg-opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mx-auto my-16 max-w-5xl">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="mt-4 font-bold text-4xl text-gray-900 sm:text-5xl">
                Learn Anytime, Anywhere with Intellilearn
              </h2>
              <p className="mt-8 text-lg text-gray-600">
                Access high-quality courses and resources to enhance your skills
                and accelerate your career growth.
              </p>
            </div>
          </div>
          <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 px-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-[#20B486]">
                  Step 1
                </span>
                <span className="text-xl font-semibold">
                  Explore our Course Catalog
                </span>
                <span className="mt-2 text-zinc-700">
                  Browse through a wide range of courses covering various
                  subjects and disciplines.
                </span>
              </div>
            </li>
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 px-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-[#20B486]">
                  Step 2
                </span>
                <span className="text-xl font-semibold">
                  Enroll in Your Chosen Course
                </span>
                <span className="mt-2 text-zinc-700">
                  Sign up for an account and enroll in the course that aligns
                  with your goals and interests.
                </span>
              </div>
            </li>
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 px-4 md:border-l-0 md:border-t-2 md:pb-0 md:px-0  md:pt-4">
                <span className="text-sm font-medium text-[#20B486]">
                  Step 3
                </span>
                <span className="text-xl font-semibold">
                  Learn and Track Your Progress
                </span>
                <span className="mt-2 text-zinc-700">
                  Dive into your course materials, complete assignments, and
                  track your progress as you advance through the curriculum.
                </span>
              </div>
            </li>
          </ol>
        </div>
        {/* courses popular */}
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
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="p-14"
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
                  <CiLinkedin className="w-7 h-7 cursor-pointer hover:scale-110" />
                  <CiTwitter className="w-7 h-7 cursor-pointer hover:scale-110" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
