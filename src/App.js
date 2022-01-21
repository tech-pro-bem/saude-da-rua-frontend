import styled from 'styled-components';
import { Home } from './pages/index';

export const Structure = styled.div`
  width: 71.25rem;

  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  padding-left: 150rem;
`;

function App() {
  return (
    <Structure>
      <Home />
    </Structure>
  );
}
export default App;
