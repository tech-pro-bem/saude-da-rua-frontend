import React from 'react';
import { Structure } from '../../shared/components';
import { AboutUs, WhereAreWe, Partners, Banner } from './components';

const Home = () => {
  return (
    <>
      <Structure>
        <Banner />
        <AboutUs />
        <WhereAreWe />
        <Partners />
      </Structure>
    </>
  );
};

export default Home;
