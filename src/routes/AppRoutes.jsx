import { Routes, Route } from 'react-router-dom';
import { Layout } from '../shared/components';
import { Home } from '../pages';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="doacao" element={() => <div></div>} />
    </Route>
  </Routes>
);

export default AppRoutes;
