import React from 'react';
import { Banner, AidTracker, CardBlock } from '../components/layouts'
import HomeMedia from './HomeMedia'
import trade_fair from '../data/img/flair_fair_mcbf.jpeg';
import home_img from '../data/img/home_img.jpeg';
import TestimonialReview from '../components/TestimonialReview'
const Home = () => {
  return (
    <main>
      <div style={{marginTop: "3rem"}}>

      <img src={home_img} />
      </div>
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
