import React from 'react';
import { Banner, AidTracker, CardBlock } from '../components/layouts'
import HomeMedia from './HomeMedia'
import TestimonialReview from '../components/TestimonialReview'
const Home = () => {
  return (
    <main>
      <Banner />
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
