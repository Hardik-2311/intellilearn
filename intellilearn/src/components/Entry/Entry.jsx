import React from "react";
import { motion } from "framer-motion";

const SpecialEntryView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-8 flex w-[90%] mx-auto bg-gray-100 justify-center items-center"
    >
      <div className="px-8 py-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg gap-4 flex items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Welcome to Our Special View!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            This is a custom view designed just for you. Feel free to explore
            and enjoy the features. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed suscipit dolor sit amet nibh volutpat, eu
            pellentesque turpis laoreet. Mauris varius felis nec ipsum posuere,
            ac ultrices eros faucibus. Nullam ultricies, ligula vel interdum
            consequat, lacus leo interdum tellus, non pharetra odio dui vitae
            ipsum.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Get Started
          </button>
        </div>
        <div className="flex-1 relative">
          <img
            src="/banner2.jpg"
            alt="Special Image"
            className="w-full h-auto rounded-lg shadow-lg"
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
