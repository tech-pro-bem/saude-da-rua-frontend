import React, { useEffect, useState } from 'react';
import './Carousel.style';
import { Arrow } from '../../../../../assets/index';

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const isFirstSlide = activeIndex === 0;
  const isLastSlide = activeIndex === React.Children.count(children) - 1;
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onmouseleave={() => setPaused(false)}
    >
      {!isFirstSlide && (
        <button
          type="button"
          className="slide slide-left"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <img src={Arrow} alt="arrow" className="arrow" />
        </button>
      )}

      <div>
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { width: '100%' });
          })}
        </div>

        <div className="indicators">
          {React.Children.map(children, (_, index) => {
            return (
              <button
                className={`${index === activeIndex ? 'active' : ''} `}
                onClick={() => {
                  updateIndex(index);
                }}
              ></button>
            );
          })}
        </div>
      </div>

      {!isLastSlide && (
        <button
          type="button"
          className="slide slide-right"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <img src={Arrow} alt="arrow" className="arrow" />
        </button>
      )}
    </div>
  );
};

export default Carousel;
