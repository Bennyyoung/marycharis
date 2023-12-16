import React from 'react';
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';

const HomeMedia: React.FC = () => {
return (
<div>
<h4 className="center">Testimonials and More</h4>
<div className="row">
<div className="col m4 s12">
  <div style={{ width: '320px' }}>
    <div className="card-content white-text">
      <Player src="https://www.youtube.com/embed/lBA2sk5s7mQ">
        <BigPlayButton position="center" />
        <LoadingSpinner />
      </Player>
    </div>
  </div>
</div>
<div className="col m4 s12">
  <div style={{ height: '250px' }}>
    <div className="card-content white-text">
      <Player src="https://www.youtube.com/embed/9unejYjXTzs">
        <BigPlayButton position="center" />
        <LoadingSpinner />
      </Player>
    </div>
  </div>
</div>
<div className="col m4 s12">
  <div style={{ height: '250px' }}>
    <Player src="https://www.youtube.com/embed/R2oD60XIY90">
      <BigPlayButton position="center" />
      <LoadingSpinner />
    </Player>
  </div>
</div>
</div>

<div className="row">
<div className="col m4 s12">
  <div style={{ height: '250px' }}>
    <Player src="https://www.youtube.com/embed/R2oD60XIY90">
      <BigPlayButton position="center" />
      <LoadingSpinner />
    </Player>
  </div>
</div>

<div className="col m4 s12">
  <div style={{ height: '250px' }}>
    <Player src="https://www.youtube.com/embed/kMAycPmX4Bc">
      <BigPlayButton position="center" />
      <LoadingSpinner />
    </Player>
  </div>
</div>
<div className="col m4 s12">
  <div style={{ height: '250px' }}>
    <Player src="https://www.youtube.com/embed/LC4upuexjx8">
      <BigPlayButton position="center" />
      <LoadingSpinner />
    </Player>
  </div>
</div>
<div className="col m4 s12">
  <div style={{ height: '250px' }}>
    <Player src="https://www.youtube.com/embed/Mu0KX_Yf4pw">
      <BigPlayButton position="center" />
      <LoadingSpinner />
    </Player>
  </div>
</div>
<div className="col m4 s12">
  <div style={{ height: '250px' }}>
    <Player src="https://www.youtube.com/embed/kMAycPmX4Bc">
      <BigPlayButton position="center" />
      <LoadingSpinner />
    </Player>
  </div>
</div>
<div className="col m4 s12">
  <div style={{ height: '250px' }}>
    <Player src="https://www.youtube.com/embed/DUQJkhQxUrw">
      <BigPlayButton position="center" />
      <LoadingSpinner />
    </Player>
  </div>
</div>
<div className="col m4 s12">
  <div style={{ height: '250px' }}>
    <Player src="https://www.youtube.com/embed/_dfcU-h-VGA">
      <BigPlayButton position="center" />
      <LoadingSpinner />
    </Player>
  </div>
</div>
<div className="col m4 s12">
  <div style={{ height: '250px' }}>
    <Player src="https://www.youtube.com/embed/F0HNhJ-RxPk">
      <BigPlayButton position="center" />
      <LoadingSpinner />
    </Player>
  </div>
</div>
</div>
</div>
);
};

export default HomeMedia;