import React from 'react';
import { Banner, AidTracker, CardBlock } from '../components/layouts'
import HomeMedia from './HomeMedia'
const Home = () => {
  return (
    <main>
      <Banner />
      <AidTracker />
      {/* <Campaign /> */}
      <CardBlock />
      <HomeMedia />
      {/* <Quote /> */}
    </main>
  );
};

export default Home;
