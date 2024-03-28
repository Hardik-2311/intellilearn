import React from "react";
import { motion } from "framer-motion";

const SpecialEntryView = ({ userName }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-8 flex w-[90%] mx-auto justify-center items-center relative"
      style={{
        background: `radial-gradient(circle, #E671E5 20%, transparent 20%)`,
        backgroundSize: "300px 300px",
        backgroundPosition: "center",
      }}
    >
      <div className="px-8 py-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg gap-4 flex items-center z-10">
        <div className="flex-1 p-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Welcome Back, {userName}!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Stand out from the crowd with the latest skills. Get courses from
            ₹549 during this special offer. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Iste voluptas sapiente laborum quae
            ratione est? Asperiores doloribus impedit autem odio exercitationem
            adipisci error illum quasi veritatis id, accusantium esse nostrum.
          </p>
          <div className="pt-4 pb-2">
            <button className="bg-black text-white font-bold py-2 px-4 flex items-center justify-between gap-4 rounded-lg">
              Start Course Now
              <svg
                className="my-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.25 13C6.00391 13 5.78516 12.918 5.62109 12.7539C5.26562 12.4258 5.26562 11.8516 5.62109 11.5234L9.36719 7.75L5.62109 4.00391C5.26562 3.67578 5.26562 3.10156 5.62109 2.77344C5.94922 2.41797 6.52344 2.41797 6.85156 2.77344L11.2266 7.14844C11.582 7.47656 11.582 8.05078 11.2266 8.37891L6.85156 12.7539C6.6875 12.918 6.46875 13 6.25 13Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <img
            src="/dashboard.png"
            alt="Special Image"
            className="w-full h-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0], rotate: [0, 360, 0] }}
                transition={{ duration: 3, loop: Infinity }}
                className="w-32 h-32 bg-blue-500 rounded-full opacity-50"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0], rotate: [0, -360, 0] }}
                transition={{ duration: 4, loop: Infinity }}
                className="w-24 h-24 bg-red-500 rounded-full opacity-50"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0], rotate: [0, 360, 0] }}
                transition={{ duration: 5, loop: Infinity }}
                className="w-16 h-16 bg-green-500 rounded-full opacity-50"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0], rotate: [0, -360, 0] }}
                transition={{ duration: 6, loop: Infinity }}
                className="w-12 h-12 bg-yellow-500 rounded-full opacity-50"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0], rotate: [0, 360, 0] }}
                transition={{ duration: 7, loop: Infinity }}
                className="w-8 h-8 bg-purple-500 rounded-full opacity-50"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpecialEntryView;
