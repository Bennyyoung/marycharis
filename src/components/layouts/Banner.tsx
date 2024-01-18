import React, { useEffect, useState } from 'react';
import backgroundImg1 from '../../data/img/banner/backgroundImg1.jpeg';
import backgroundImg2 from '../../data/img/banner/backgroundImg2.jpg';
import backgroundImg3 from '../../data/img/banner/backgroundImg3.jpg';

const Banner: React.FC = () => {
  const images = [
    backgroundImg1,
    // backgroundImg2,
    backgroundImg3,
    // Add more image URLs as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [currentIndex, images.length])
  return (
    <div className="image-slider" style={{ backgroundImage: `url(${images[currentIndex]})`}}>
    </div>
  );
};

export default Banner;

