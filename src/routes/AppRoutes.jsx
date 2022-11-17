import { Layout } from '@components';
import { Donation, Home, Medicament, Volunteers } from '@pages';
import { Route, Routes } from 'react-router-dom';
import { Scroll } from '../components/Scroll';

const AppRoutes = () => (
  <Scroll>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="doacao" element={<Donation />} />
        <Route path="seja-voluntario" element={<Volunteers />} />
        <Route path="medicament" element={<Medicament />} />
      </Route>
    </Routes>
  </Scroll>
);

export default AppRoutes;
