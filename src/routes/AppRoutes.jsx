import { Routes, Route } from 'react-router-dom';
import { Layout } from '../shared/components';
import { Home, Donation } from '../pages';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="doacao" element={<Donation />} />
    </Route>
  </Routes>
);

export default AppRoutes;
