import React from 'react';
import { Link } from 'react-router-dom';

import CampaignModel from './CampaignModal';
const Campaign = () => {
  return (
    <div className='container teal center white-text'>
      <div className='container'>
        <h1>Campaign</h1>
        <h3>Lahore Winter Aid</h3>
        <p>
          Lahore is facing its coldest winter in 30 years! TIFC will be
          providing warm sweaters, shawls, and blankets to those in need. Let's
          help keep the needy people of Lahore warm!
        </p>
        <Link
          className='waves-effect waves-light pulse btn-large modal-trigger hide-on-small-only'
          to='/donateprop'
        >
          <i className='material-icons right'>mood</i>Contribute
        </Link>
        <Link
          className='waves-effect waves-light pulse btn-small modal-trigger hide-on-med-and-up'
          to='/donateprop'
        >
          <i className='material-icons right'>mood</i>Contribute
        </Link>
        <CampaignModel />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Campaign;
