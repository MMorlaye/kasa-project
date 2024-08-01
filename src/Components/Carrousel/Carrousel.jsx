import React, { useState } from 'react';
import '../Carrousel/Carrousel.scss';
import ArrowLeft from '../../assets/arrow-back.png';
import ArrowRight from '../../assets/arrow-right.png';

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carrousel">
      {pictures.length > 1 && (
        <>
          <button className="arrow left-arrow" onClick={prevSlide}>
            <img src={ArrowLeft} alt="Previous Slide" />
          </button>
          <button className="arrow right-arrow" onClick={nextSlide}>
            <img src={ArrowRight} alt="Next Slide" />
          </button>
          <div className="slide-number">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carrousel-image" />
    </div>
  );
};

export default Carrousel;