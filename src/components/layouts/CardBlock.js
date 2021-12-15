import React from 'react';
import CardBlockItem from './CardBlockItem.js';

import wedo_1 from '../../data/img/whatwedo/wedo_1.jpg';
import wedo_2 from '../../data/img/whatwedo/wedo_2.jpg';
import wedo_3 from '../../data/img/whatwedo/wedo_3.jpg';
import wedo_4 from '../../data/img/whatwedo/wedo_4.jpg';
import wedo_5 from '../../data/img/whatwedo/wedo_5.jpg';
import wedo_6 from '../../data/img/whatwedo/wedo_6.jpg';

const CardBlock = () => {
  return (
    <div className='container'>
      <h1 className='center'>What We Do</h1>
      <br />
      <div className='row'>
        <CardBlockItem
          card='card medium red lighten-2 hoverable'
          button='waves-effect waves-light red lighten-1 btn-large'
          // title='Education'
          image={wedo_1}
          // html='/education'
          // content='The Ilahi Foundation has partnered with ISHRAQ Schooling System (ISS) to ensure children from poor backgrounds are receiving proper education in a safe environment. ISS is a non-profit and non-commercial institution which focuses on educating children with less privileges in a competitive standard to make them excel in knowledge, character, and positive action.'
        />
        <CardBlockItem
          card='card medium purple lighten-2 hoverable'
          button='waves-effect waves-light purple lighten-1 btn-large'
          // title='Food Bank'
          image={wedo_2}
          html='/foodbank'
          // content='TIFC is committed to help those in need of food. Our goal is to provide food and supplies to less-fortunate families across the globe. We aim to collect and provide at least $50 a month to ensure the needs of poor families.'
        />
        <CardBlockItem
          card='card medium teal lighten-2 hoverable'
          button='waves-effect waves-light teal lighten-1 btn-large'
          // title='Social Welfare'
          image={wedo_3}
          html='/socialwelfare'
          // content='Our recent and ongoing projects include building wells and providing clean drinking water in poor communities across the globe. TIFC has initiated a water supply system, Sabeel-e-Rehmat (SER), to ensure that clean drinking water is being provided to poor communities around the world'
        />
      </div>
      <div className='row'>
        <CardBlockItem
          card='card medium blue lighten-2 hoverable'
          button='waves-effect waves-light blue lighten-1 btn-large'
          // title='Water'
          image={wedo_4}
          // html='/water'
          // content=''
        />
        <CardBlockItem
          card='card medium green lighten-2 hoverable'
          button='waves-effect waves-light green lighten-1 btn-large'
          // title='Woman Empowerment'
          image={wedo_5}
          // html='/womanempowerment'
          // content=''
        />
        <CardBlockItem
          card='card medium brown lighten-2 hoverable'
          button='waves-effect waves-light brown lighten-1 btn-large'
          // title='Qurbani'
          image={wedo_6}
          // html='/qurbani'
          // content=''
        />
      </div>
    </div>
  );
};

export default CardBlock;
