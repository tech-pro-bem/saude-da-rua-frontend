import React from 'react';
import { Structure } from '../../shared/components';
import { AboutUs, WhereAreWe, Partners, Banner } from './components';

const Home = () => {
  return (
    <>
      <Banner />
      <Structure>
        <AboutUs />
        <WhereAreWe />
        <Partners />
      </Structure>
    </>
  );
};

export default Home;
