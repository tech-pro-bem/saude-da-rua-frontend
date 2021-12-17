
import {BrowserRouter as Routes, Switch, Route} from 'react-router-dom'
import Home from './component/pages/Home'
import Acoes from './component/pages/Acoes'
import Doacoes from './component/pages/Doacoes'
import Loja from './component/pages/Loja'
import Sobre from './component/pages/Sobre'
import Voluntariado from './component/pages/Voluntariado'

import Container from './component/layout/Container'
import Navbar from './component/layout/Navbar1'
import Footer1 from './component/layout/Footer1'



//teste Bulma
import "rbx/index.css"

function App() {
  return (
    <Routes>
      <Navbar />
      <Switch>
        <Container  customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sobre">
            <Sobre />
          </Route>
          <Route exact path="/acoes">
            <Acoes />
          </Route>
          <Route exact path="/doacoes">
            <Doacoes />
          </Route>
          <Route exact path="/voluntariado">
            <Voluntariado />
          </Route>
          <Route exact path="/loja">
            <Loja />
          </Route>
        </Container>
      </Switch>
      <Footer1/>
    </Routes>
  );
}

export default App;
