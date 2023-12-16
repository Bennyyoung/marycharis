import React from 'react';
import { Banner, AidTracker, CardBlock } from '../components/layouts';
import HomeMedia from './HomeMedia';
import trade_fair from '../data/img/flair_fair_mcbf.jpeg';
import home_img from '../data/img/home_img.jpeg';
import TestimonialReview from '../components/TestimonialReview';
import Marquee from 'react-fast-marquee';

const Home: React.FC = () => {
return (
<main>
<div style={{ marginTop: '3rem' }}>
<AidTracker />
      {/* <Campaign /> */}
      <CardBlock />
      {/* <TestimonialReview /> */}
      <HomeMedia />
</div>
</main>
);
};

export default Home;