import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 >= 0.5; // Check if there's a half star

  return (
    <div className='star-rating'>
      {Array(5).fill(false).map((_, index) => {
        if (index < fullStars) {
          return <span key={index} className='star filled'>★</span>;
        } else if (index === fullStars && halfStar) {
          return <span key={index} className='star half'>★</span>;
        } else {
          return <span key={index} className='star'>☆</span>;
        }
      })}
    </div>
  );
};

export default StarRating;