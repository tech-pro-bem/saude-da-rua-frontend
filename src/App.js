import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/index';
import { Structure } from './shared/components/';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './shared/components/Header/components/Header';

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
          <Structure>
            <Home />
          </Structure>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
