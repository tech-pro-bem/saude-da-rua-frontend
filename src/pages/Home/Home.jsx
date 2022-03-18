import React from 'react';
import { Structure } from '../../shared/components';
import { AboutUs, WhereAreWe, Partners, Instagram } from './components';

const Home = () => {
  return (
    <>
      <Structure>
        <AboutUs />
        <WhereAreWe />
        <Instagram />
        <Partners />
      </Structure>
    </>
  );
};

export default Home;
