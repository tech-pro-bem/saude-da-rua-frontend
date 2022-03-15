import React from 'react';
import { Structure } from '../../shared/components';
import { WhereAreWe, Partners, Banner } from './components';

const Home = () => {
  return (
    <>
      <Banner />
      <Structure>
        <WhereAreWe />
        <Partners />
      </Structure>
    </>
  );
};

export default Home;
