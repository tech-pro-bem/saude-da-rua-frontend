import React from 'react';
import { Structure } from '@components';
import {
  AboutUsDesktop,
  AboutUsMobile,
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
        {mobile ? <AboutUsMobile /> : <AboutUs />} 
        {mobile ? <SlideMobile /> : <SlideDesktop />}        
        <SliderData />
        <WhereAreWe />
        <Instagram />
        <Partners />
      </Structure>
    </>
  );
};

export default Home;
