import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Home from './component/pages/Home';
import Acoes from './component/pages/Acoes';
import Doacoes from './component/pages/Doacoes';
import Loja from './component/pages/Loja';
import Sobre from './component/pages/Sobre';
import Voluntariado from './component/pages/Voluntariado';

import Container from './component/layout/Container';
import Navbar from './component/layout/Navbar1';
import Footer1 from './component/layout/Footer1';

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
