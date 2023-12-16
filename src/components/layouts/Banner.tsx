import React from 'react';
import one from '../../data/img/banner/1.jpg';
import two from '../../data/img/banner/2.jpg';
import three from '../../data/img/banner/3.jpg';
import five from '../../data/img/banner/5.jpg';

const Banner: React.FC = () => {
  return (
    <div>
      <br />
      <div className="carousel carousel-slider center">
        <div className="carousel-item">
          <img src={one} alt='' style={{maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto', objectFit: 'cover'}} />
        </div>
        <div className="carousel-item">
          <img src={two} alt='' style={{maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto', objectFit: 'cover'}} />
        </div>
        <div className="carousel-item">
          <img src={three} alt='' style={{maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto', objectFit: 'cover'}} />
        </div>
        <div className="carousel-item">
          <img src={five} alt='' style={{maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto', objectFit: 'cover'}} />
        </div>
      </div>
    </div>
  );
};

export default Banner;

