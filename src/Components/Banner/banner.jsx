import React from 'react';

const Banner = ({ text }) => {
  return (
    <div className="banner">
      <div className="banner-text">
        {text}
      </div>
    </div>
  );
};

export default Banner;

