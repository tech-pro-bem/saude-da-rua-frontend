import React from 'react';
import { AboutUs, WhereAreWe, Partners } from './components/index';
import { Header } from '../../shared/components/index';

const Home = () => {
  return (
    <>
      <AboutUs />

      <WhereAreWe />

      <Partners />
    </>
  );
};

export default Home;
