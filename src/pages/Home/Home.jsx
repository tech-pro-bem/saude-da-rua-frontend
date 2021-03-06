import React from 'react';
import { Structure } from '@components';

import {
  AboutUs,
  WhereAreWe,
  Partners,
  Instagram,
  SliderData,
  Banner,
} from './containers';

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
