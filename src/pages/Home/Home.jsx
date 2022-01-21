import { AboutUs, WhereAreWe, Partners } from './components/index';
import { Header } from '../../shared/components/index';

function Home() {
  return (
    <>
      <Header />

      <AboutUs />

      <WhereAreWe />

      <Partners />
    </>
  );
}

export default Home;
