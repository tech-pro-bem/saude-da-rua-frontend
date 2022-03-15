import React from 'react';
import { Structure } from '../../shared/components';
import { AboutUs, WhereAreWe, Partners } from './components';

const Home = () => {
  return (
    <>
      <Structure>
        <AboutUs />
        <WhereAreWe />
        <Partners />
      </Structure>
    </>
  );
};

export default Home;
