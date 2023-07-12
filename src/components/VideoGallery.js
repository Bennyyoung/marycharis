
import React from 'react';
import videos1 from '../data/videos1';
import videos2 from '../data/videos2';
import videos3 from '../data/videos3';

const VideoGallery = () => {
  return (
    <div className="container">
      <div className="row center">
        <h4>Gallery</h4>
      </div>

      <div className="row">
        <div className="col s12">
          <p className="flow-text">Fun Fair Event</p>
        </div>
      </div>

      <div className="row">
        {videos1.map((video) => (
          <div className="col s12 m6" key={video.id}>
            <div className="video-container" style={{ marginBottom: '2rem' }}>
              <video className="responsive-video" src={video.url} controls />
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col s12">
          <p className="flow-text">These events took place on the 30th December 2022. It was the usual Annual Programme of "FOOD F.A.I.R- GO TO WHERE THEY ARE."</p>
        </div>
      </div>

      <div className="row">
        {videos2.map((video) => (
          <div className="col s12 m6" key={video.id}>
            <div className="video-container" style={{ marginBottom: '2rem' }}>
              <video className="responsive-video" src={video.url} controls />
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col s12">
          <p className="flow-text">These events took place on the 30th December 2022. It was the usual Annual Programme of "FOOD F.A.I.R- GO TO WHERE THEY ARE."</p>
        </div>
      </div>

      <div className="row">
        {videos3.map((video) => (
          <div className="col s12 m6" key={video.id}>
            <div className="video-container" style={{ marginBottom: '2rem' }}>
              <video className="responsive-video" src={video.url} controls />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;

