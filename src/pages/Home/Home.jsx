import React from 'react';
import { Structure } from '@components';
import {
  AboutUs,
  WhereAreWe,
  Partners,
  SlideMobile,
  SlideDesktop,
  Instagram,
  Banner,
} from './containers';
import { useMedia } from '../../hooks';

const Home = () => {
  const mobile = useMedia('(max-width:960px)');
  return (
    <>
      <Banner />
      <Structure>
        <AboutUs />
        {mobile ? <SlideMobile /> : <SlideDesktop />}
        <WhereAreWe />
        <Instagram />
        <Partners />
      </Structure>
    </>
  );
};

export default Home;
