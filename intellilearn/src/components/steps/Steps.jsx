import React from "react";

const Steps = () => {
  return (
    <div className="mx-auto my-20 max-w-5xl">
      <div className="mb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="mt-4 font-bold text-4xl text-gray-900 sm:text-5xl">
            Learn Anytime, Anywhere with Intellilearn
          </h2>
          <p className="mt-8 text-lg text-gray-600">
            Access high-quality courses and resources to enhance your skills and
            accelerate your career growth.
          </p>
        </div>
      </div>
      <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 px-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-[#20B486]">Step 1</span>
            <span className="text-xl font-semibold">
              Explore our Course Catalog
            </span>
            <span className="mt-2 text-zinc-700">
              Browse through a wide range of courses covering various subjects
              and disciplines.
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 px-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-[#20B486]">Step 2</span>
            <span className="text-xl font-semibold">
              Enroll in Your Chosen Course
            </span>
            <span className="mt-2 text-zinc-700">
              Sign up for an account and enroll in the course that aligns with
              your goals and interests.
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 px-4 md:border-l-0 md:border-t-2 md:pb-0 md:px-0  md:pt-4">
            <span className="text-sm font-medium text-[#20B486]">Step 3</span>
            <span className="text-xl font-semibold">
              Learn and Track Your Progress
            </span>
            <span className="mt-2 text-zinc-700">
              Dive into your course materials, complete assignments, and track
              your progress as you advance through the curriculum.
            </span>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Steps;
