import React from 'react';
import AidTrackerItem from './AidTrackerItem';

const AidTracker: React.FC = () => {
  return (
    <div className='container center'>
      <h1>What We Have Done</h1>
      <br />
      <div className='row'>
        <AidTrackerItem icon='build' title='Wells Constructed' count={40} />
        <AidTrackerItem icon='school' title='Schools Created' count={70} />
        <AidTrackerItem icon='people' title='Students Enrolled' count={500} />
        <AidTrackerItem icon='fingerprint' title='People Helped' count={1000} />
      </div>
      <div className='row'>
        <h6>Updated 5:15PM | Since Dec 2021</h6>
      </div>
    </div>
  );
};

export default AidTracker;
