import React from 'react';
import videos1 from '../data/videos1';
import videos2 from '../data/videos2';
import videos3 from '../data/videos3';

interface Video {
  id: number;
  url: string;
}

const VideoGallery: React.FC = () => {
  return (
    <>
      <div className="row center">
        <h4>Gallery</h4>
      </div>
      <div className="row" style={{ textAlign: 'center' }}>
        <div className="col s12">
          <p className="flow-text">Fun Fair Event</p>
        </div>
      </div>
      <div className='gallery-3-col'>
        {videos1.map((video: any) => (
          <div className='gallery-card' key={video.id}>
            <div className="video-container" style={{ marginBottom: '2rem' }}>
              <video className="responsive-video" src={video.url} controls />
            </div>
          </div>
        ))}
      </div>
      <div className="row" style={{ textAlign: 'center' }}>
        <div className="col s12">
          <p className="flow-text">These events took place on the 30th December 2022. It was the usual Annual Programme of "FOOD F.A.I.R- GO TO WHERE THEY ARE."</p>
        </div>
      </div>
      <div className='gallery-3-col'>
        {videos2.map((video: Video) => (
          <div className='gallery-card' key={video.id}>
            <div className="video-container" style={{ marginBottom: '2rem' }}>
              <video className="responsive-video" src={video.url} controls />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoGallery;
