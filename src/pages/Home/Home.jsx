import React from 'react';
import { AboutUs, WhereAreWe, Partners, Banner } from './components/index';

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />

      <WhereAreWe />

      <Partners />
    </>
  );
};

export default Home;
