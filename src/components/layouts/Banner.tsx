import React, { useEffect, useState } from 'react';
import backgroundImg1 from '../../data/img/banner/backgroundImg1.jpeg';
import backgroundImg2 from '../../data/img/banner/backgroundImg2.jpg';
import backgroundImg3 from '../../data/img/banner/backgroundImg3.jpg';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  const images = [
    backgroundImg1,
    // backgroundImg2,
    backgroundImg3,
    // Add more image URLs as needed
  ];

  const text = [
    <h2 className='banner-text'>
      Lend the <br /> helping hand <br /> get involved.
    </h2>,
    <h2 className='banner-text'>
      Lend the <br /> helping hand <br /> get involved.
    </h2>,
    <h2 className='banner-text'>
      Donation <br /> Can Change <br /> Life
    </h2>
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTextIndex, setTextCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      setTextCurrentIndex((prevIndex) => (prevIndex + 1) % text.length)
    }, 3000)

    console.log('currentIndex', currentIndex)

    return () => clearInterval(intervalId)
  }, [currentIndex, images.length])
  return (
    <div className="image-slider" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <div style={{ paddingTop: '370px', paddingBottom: '180px', paddingRight: '185px' }}>
        <div className="justify-content-end row" style={{ justifyContent: 'flex-end' }}>
          <div className=" text-right col-lg-7" style={{ textAlign: 'right' }}>
            <p style={{ color: '#fcad30', fontSize: '20px', fontWeight: 600 }}>Help the poor in need</p>
            {text[currentTextIndex]}
            <Link to="/donate" data-target=".donate-options" className="scroll-to-target thm-btn ">
              Start Donating
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

