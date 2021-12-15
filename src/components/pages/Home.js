import React from 'react';

import Banner from '../layouts/Banner';
import AidTracker from '../layouts/AidTracker';
import Campaign from '../layouts/Campaign';
import CardBlock from '../layouts/CardBlock';
import Quote from '../layouts/Quote';

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
