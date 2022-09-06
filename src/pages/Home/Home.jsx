import React from 'react';
import { Structure } from '@components';
import {
  AboutUs,
  WhereAreWe,
  Partners,
  SlideMobile,
  SliderDesktop,
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
        {mobile ? <SlideMobile /> : <SliderDesktop />}
        <WhereAreWe />
        <Instagram />
        <Partners />
      </Structure>
    </>
  );
};

export default Home;
