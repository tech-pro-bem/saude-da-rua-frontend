import React from 'react';
import {
  AboutUs,
  WhereAreWe,
  Partners,
  Banner,
  SliderData,
} from './components/index';

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />

      <SliderData />

      <WhereAreWe />

      <Partners />
    </>
  );
};

export default Home;
