import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/index';
import { Footer, Structure } from './shared/components/';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';
import { Header } from './shared/components/index';
import { Banner } from './pages/Home/components';
import ExemploApi from './pages/Home/ExemploApi/ExemploApi';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          {/*
          OBS: Elementos que ocupam mais de 1140px de largura devem estar FORA da estrutura
       */}
          <Header />
          <Banner />

          <Structure>
            <Home />
            <ExemploApi />
          </Structure>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
