import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/index';
import { Structure } from './shared/components';

import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Structure>
          <Home />
        </Structure>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
