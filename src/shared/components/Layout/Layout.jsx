import { Outlet } from 'react-router-dom';
import { Structure, Header } from '..';

const Layout = () => {
  return (
    <>
      <Header />
      <Structure>
        <Outlet />
      </Structure>
      {/* Footer here */}
    </>
  );
};

export default Layout;
