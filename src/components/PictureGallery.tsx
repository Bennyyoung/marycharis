import React from 'react';
import pictures1 from '../data/pictures1';

interface Picture {
  id: number;
  url: string;
}

const PictureGallery: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col s12">
          <p className="flow-text">@Marycharis Foundation With JOHNEVERGREEN</p>
        </div>
        <div className='gallery-3-col'>
          {pictures1.map((picture: Picture) => (
            <div className='gallery-card' key={picture.id}>
              <img
                className="responsive-img"
                src={picture.url}
                alt="Gallery Image"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PictureGallery;
