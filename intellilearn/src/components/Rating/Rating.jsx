import React from 'react';
import Rating from 'react-rating';

const CircleRating = ({ rating }) => {
  return (
    <Rating
      initialRating={rating}
      emptySymbol={<div className="w-4 h-4 border-2 border-purple-500 rounded-full mr-1" />}
      fullSymbol={<div className="w-4 h-4 bg-purple-500 rounded-full mr-1" />}
      readonly
      quiet={true}
    />
  );
};

export default CircleRating;
