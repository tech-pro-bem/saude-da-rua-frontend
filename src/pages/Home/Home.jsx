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
import { Head, useMedia } from '../../hooks';

const Home = () => {
  const mobile = useMedia('(max-width:960px)');
  return (
    <>
      <Head
        title="Pagina inicial"
        description="Se você é profissional ou estudante da área da saúde, participe das ações do Saúde da Rua"
      />
      <Banner />
      <Structure>
        {mobile ? <AboutUsMobile /> : <AboutUsDesktop />}
        {mobile ? <SlideMobile /> : <SlideDesktop />}
        <WhereAreWe />
        <Instagram />
        <Partners />
      </Structure>
    </>
  );
};

export default Home;
