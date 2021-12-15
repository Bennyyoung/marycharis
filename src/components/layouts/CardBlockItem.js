import React from 'react';
import { Link } from 'react-router-dom';

const CardBlockItem = props => {
  return (
    <div className='col s12 m4'>
      <div className={props.card}>
        <div className='card-image waves-effect waves-block waves-light'>
          <img className='activator' src={props.image} alt='' />
        </div>
        <div className='card-content'>
          <span className='card-title activator white-text'>
            {props.title}
            <i className='material-icons right'>more_vert</i>
          </span>
          <p>
            <Link className={props.button} to={props.html}>
              Learn More
            </Link>
          </p>
        </div>
        <div className='card-reveal'>
          <span className='card-title black-text'>
            {props.title}
            <i className='material-icons right grey'>close</i>
          </span>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardBlockItem;
