import React from 'react';
import one from '../../data/img/banner/1.jpg';
import two from '../../data/img/banner/2.jpg';
import three from '../../data/img/banner/3.jpg';
import four from '../../data/img/banner/4.jpg';
import five from '../../data/img/banner/5.jpg';
import convener from '../../data/img/banner/convener.jpg';
import convener_pointing_banner from '../../data/img/banner/convener_pointing_banner.jpg';



const Banner = () => {
  return (
    <div>
      {/* <div className='slider'>
        <ul className='slides'>
          <li>
            <img src={one} alt='' style={{ opacity: '0.5' }} />
            <div className='caption center-align'>
              <h1 className='black-text'>MBF</h1>
            </div>
          </li>
          <li>
            <img src={two} alt='' style={{ opacity: '0.5' }} />
            <div className='caption left-align'>
            </div>
          </li>
          <li>
            <img src={three} alt='' style={{ opacity: '0.5' }} />
            <div className='caption right-align'>
            </div>
          </li>
          <li>
            <img src={four} alt='' style={{ opacity: '0.5' }} />
            <div className='caption right-align'>
            </div>
          </li>
          <li>
            <img src={five} alt='' style={{ opacity: '0.5' }} />
            <div className='caption right-align'>
            </div>
          </li>
          <li>
            <img src={convener} alt='' style={{ opacity: '0.5' }} />
            <div className='caption right-align'>
            </div>
          </li>
          <li>
            <img src={convener_pointing_banner} alt='' style={{ opacity: '0.5' }} />
            <div className='caption right-align'>
            </div>
          </li>
          
        </ul>
      </div> */}
      <br />

      {/* <div className="carousel carousel-slider center">
        <a className="carousel-item" href="#one!"><img src={one} alt='' style={{ opacity: '0.5' }} /></a>
        <a className="carousel-item" href="#two!"><img src={two} alt='' style={{ opacity: '0.5' }} /></a>
        <a className="carousel-item" href="#three!"><img src={three} alt='' style={{ opacity: '0.5' }} /></a>
        <a className="carousel-item" href="#four!"><img src={four} alt='' style={{ opacity: '0.5' }} /></a>
        <a className="carousel-item" href="#five!"><img src={five} alt='' style={{ opacity: '0.5' }} /></a>
      </div> */}

      <div className="carousel carousel-slider center">
        <div className="carousel-item">
          <img src={one} alt='' style={{maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto', objectFit: 'cover'}} />
        </div>
        <div className="carousel-item " href="#one!">

          <img src={two} alt='' style={{maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto', objectFit: 'cover'}} />
        </div>
        <div className="carousel-item" href="#two!">

          <img src={three} alt='' style={{maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto', objectFit: 'cover'}} />
        </div>
        <div className="carousel-item" href="#three!">

          <img src={five} alt='' style={{maxWidth: '100%', maxHeight: '100%', height: 'auto', width: 'auto', objectFit: 'cover'}} />
        </div>
      </div>

    </div>
  );
};

export default Banner;
