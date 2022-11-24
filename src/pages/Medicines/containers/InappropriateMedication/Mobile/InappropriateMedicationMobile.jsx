import { Highlight } from '@components';
import { DontCheck } from '@assets/MedicinePage';
import { Container, List, Option } from './InappropriateMedicationMobile.style';

export function InappropriateMedicationMobile() {
  return (
    <>
      <Container>
        <div>
          <h2>
            <Highlight>
              Medicamentos impróprios
              <br />
            </Highlight>{' '}
            para doação
          </h2>
          <List>
            <Option>
              <img alt="dontcheck-svg" src={DontCheck}></img>
              <p>Remédios fora do prazo de validade.</p>
            </Option>
            <Option>
              <img alt="dontcheck-svg" src={DontCheck}></img>
              <p>Quando não for possível verificar a validade.</p>
            </Option>
            <Option>
              <img alt="dontcheck-svg" src={DontCheck}></img>
              <p>Remédios que não foram armazenados de forma correta.</p>
            </Option>
            <Option>
              <img alt="dontcheck-svg" src={DontCheck}></img>
              <p>Remédios fora da cartela de comprimidos.</p>
            </Option>
          </List>
        </div>
      </Container>
    </>
  );
}
