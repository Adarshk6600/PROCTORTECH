import './Slider.css';
import React, { useState } from 'react';

const Slider = () => {
  // State to track which box is currently the main one
  const [mainBox, setMainBox] = useState('main');
  // State to track which box was clicked
  const [clickedBox, setClickedBox] = useState(null);

  const handleBoxClick = (box) => {
    if (box !== mainBox) {
      // Set the clicked box to the one clicked and make it the main box
      setClickedBox(box);
      setMainBox(box);
    }
  };

  return (
    <div className="slider_main">
      <div className="slider_box">
        {/* Left box */}
        <div
          className={`left_box box_style ${mainBox === 'left' ? 'left_to_main' : clickedBox === 'left' ? 'main_to_left' : ''
            }`}
          onClick={() => handleBoxClick('left')}
        ></div>

        {/* Main box */}
        <div
          className={`main_box box_style ${mainBox === 'main' ? 'active_box' : clickedBox === 'main' ? 'main_to_left' : ''}`}
        ></div>

        {/* Right box */}
        <div
          className={`right_box box_style ${mainBox === 'right' ? 'right_to_main' : clickedBox === 'right' ? 'main_to_right' : ''
            }`}
          onClick={() => handleBoxClick('right')}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
