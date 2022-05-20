import React from 'react';
import { Banner, AidTracker, CardBlock } from '../components/layouts'
import HomeMedia from './HomeMedia'
import trade_fair from '../data/img/flair_fair_mcbf.jpeg';
import TestimonialReview from '../components/TestimonialReview'
const Home = () => {
  return (
    <main>
      <img src={trade_fair} />
      {/* <Banner /> */}
      <AidTracker />
      {/* <Campaign /> */}
      <CardBlock />
      {/* <TestimonialReview /> */}
      <HomeMedia />
      
      {/* <Quote /> */}
    </main>
  );
};

export default Home;
