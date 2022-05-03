import { Routes, Route } from 'react-router-dom';
import { Layout } from '../shared/components';
import { Home, Donation, Volunteers } from '../pages';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="doacao" element={<Donation />} />
      <Route path="seja-voluntario" element={<Volunteers />} />
    </Route>
  </Routes>
);

export default AppRoutes;
