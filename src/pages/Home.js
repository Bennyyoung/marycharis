import React from 'react';
import { Banner, AidTracker, CardBlock } from '../components/layouts'

const Home = () => {
  return (
    <main>
      <Banner />
      <AidTracker />
      {/* <Campaign /> */}
      <CardBlock />
      {/* <Quote /> */}
    </main>
  );
};

export default Home;
