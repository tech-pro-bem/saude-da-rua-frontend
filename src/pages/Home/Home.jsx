import React from 'react';
import { Structure } from '../../shared/components';

import {
  AboutUs,
  WhereAreWe,
  Partners,
  Instagram,
  SliderData,
  Banner
} from './components';

const Home = () => {
  return (
    <>
      <Banner />
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
