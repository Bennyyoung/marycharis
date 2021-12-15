import React from 'react';

const AidTrackerItem = props => {
  return (
    <div className='col m3 s12'>
      <div
        className='card blue-grey darken-1 z-depth-4'
        style={{ height: '250px' }}
      >
        <div className='card-content white-text'>
          <br />
          <i className='medium material-icons'>{props.icon}</i>
          <span className='card-title'>{props.title}</span>
          <span className='card-title'>{props.count}</span>
        </div>
      </div>
    </div>
  );
};

export default AidTrackerItem;
