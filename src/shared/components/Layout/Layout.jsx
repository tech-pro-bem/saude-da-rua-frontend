import { Outlet } from 'react-router-dom';
import { Structure, Header } from '..';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* Footer here */}
    </>
  );
};

export default Layout;
