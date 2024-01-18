import React from 'react';
import { Link } from 'react-router-dom';
import CardBlockItem from './CardBlockItem';

import wedo_1 from '../../data/img/whatwedo/wedo_1.jpg';
import wedo_2 from '../../data/img/whatwedo/wedo_2.jpg';
import wedo_3 from '../../data/img/whatwedo/wedo_3.jpg';
import wedo_4 from '../../data/img/whatwedo/wedo_4.jpg';
import wedo_5 from '../../data/img/whatwedo/wedo_5.jpg';
import wedo_6 from '../../data/img/whatwedo/wedo_6.jpg';

const CardBlock: React.FC = () => {
  return (

    <section className='video-card-two'>
      <div className='container'>
        <div className='inner-container'>
          <div className='align-items-center row'>
            <div className="col-lg-3">
              <div className="video-card-two__box">
                <img src={wedo_1} style={{ borderRadius: '50%', width: '251px', height: '251px' }} alt="" />
                <span className="video-card-two__box-btn video-popup" role="button" tabIndex={0}><i className="fa fa-play"></i></span>
              </div>
            </div>
            <div className="col-lg-4">
              <h3>We’re worldwide non-profit charity ogranization.</h3>
            </div>
            <div className="col-lg-5">
              <p>MBF is a non-profit, non-political, dispositioned to do good, charitable, kind, altruistic, individual (s) and groups supported, faith based organization, dedicated to providing needed humanitarian care and to assist the less-privileged, widows, fatherless and orphans (minor) and vulnerable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardBlock;
