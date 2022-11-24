import { Layout } from '@components';
import {
  Donation,
  Home,
  Medicines,
  SignUp,
  SignUpSuccess,
  Volunteers,
} from '@pages';
import { Route, Routes } from 'react-router-dom';
import { Scroll } from '../components/Scroll';

const AppRoutes = () => (
  <Scroll>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="doacao" element={<Donation />} />
        <Route path="seja-voluntario" element={<Volunteers />} />
        <Route path="doe-medicamentos" element={<Medicines />} />
        <Route path="inscreva-se" element={<SignUp />} />
        <Route path="inscreva-se/sucesso" element={<SignUpSuccess />} />
      </Route>
    </Routes>
  </Scroll>
);

export default AppRoutes;
