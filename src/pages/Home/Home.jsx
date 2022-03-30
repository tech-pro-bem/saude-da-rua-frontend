import React from 'react';
import { Structure } from '../../shared/components';
import { AboutUs, WhereAreWe, Partners, Instagram, Banner } from './components';

const Home = () => {
  return (
    <>
      <Banner />
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
