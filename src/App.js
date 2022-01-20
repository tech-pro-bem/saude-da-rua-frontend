import styled from 'styled-components';
import { Home } from './pages/index';

export const Structure = styled.div`
  width: 1140px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50%;
`;

function App() {
  return (
    <Structure>
      <Home />
    </Structure>
  );
}
export default App;
