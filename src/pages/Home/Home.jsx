import React from 'react';
import { Structure } from '@components';
import {
  AboutUs,
  WhereAreWe,
  Partners,
  Slide,
  SliderData,
  Instagram,
  Banner,
} from './containers';
import useMedia from '../../Hooks/useMedia';

const Home = () => {
  const mobile = useMedia('(max-width:960px)');
  return (
    <>
      <Banner />
      <Structure>
        <AboutUs />
        {mobile ? <Slide /> : <SliderData />}
        <WhereAreWe />
        <Instagram />
        <Partners />
      </Structure>
    </>
  );
};

export default Home;
