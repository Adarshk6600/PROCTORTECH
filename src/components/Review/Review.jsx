import React from 'react';
import './Review.css';
import User from './User';
import TestimonialSlider from './TestimonialSlider';
import NavigationHeading from '../NavigationHeading/NavigationHeading';

const Review = () => {
  return (

    <div className='Review_Section'>
       
      <div style={{ display: 'flex', margin: '20px', alignItems: 'center', justifyContent: 'center', width: '100%' }} > <NavigationHeading name='Testimonials' /></div>

      <div></div>
      <TestimonialSlider />
      <div className='Review_Section_3'>
        {/* Additional content if needed */}
      </div>
    </div>
  );
};

export default Review;