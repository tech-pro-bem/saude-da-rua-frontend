import React from 'react';
import { Structure } from '../../shared/components';
import {
  AboutUs,
  WhereAreWe,
  Partners,
  Instagram,
  SliderData,
} from './components';

const Home = () => {
  return (
    <>
      <Structure>
        <AboutUs />
        <SliderData />
        <WhereAreWe />
        <Instagram />
        <Partners />
      </Structure>
    </>
  );
};

export default Home;
