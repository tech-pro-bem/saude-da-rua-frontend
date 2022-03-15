import React from 'react';
import { Structure } from '../../shared/components';
import { AboutUs, WhereAreWe, Partners, Banner, Instagram } from './components';

const Home = () => {
  return (
    <>
      <Structure>
        <Banner />
        <AboutUs />
        <WhereAreWe />
        <Instagram />
        <Partners />
      </Structure>
    </>
  );
};

export default Home;
