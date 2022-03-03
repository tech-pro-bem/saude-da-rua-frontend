import { Outlet } from 'react-router-dom';
import { Structure, Header, Footer } from '..';

const Layout = () => {
  return (
    <>
      <Header />
      <Structure>
        <Outlet />
      </Structure>
      <Footer />
    </>
  );
};

export default Layout;
