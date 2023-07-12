import React from 'react';
import { Banner, AidTracker, CardBlock } from '../components/layouts'
import HomeMedia from './HomeMedia'
import trade_fair from '../data/img/flair_fair_mcbf.jpeg';
import home_img from '../data/img/home_img.jpeg';
import TestimonialReview from '../components/TestimonialReview'
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <main>
      <div style={{ marginTop: "3rem" }}>
        {/* <Marquee>
          <h3>The coming soon of the Affable summit 2023</h3>
        </Marquee> */}
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
