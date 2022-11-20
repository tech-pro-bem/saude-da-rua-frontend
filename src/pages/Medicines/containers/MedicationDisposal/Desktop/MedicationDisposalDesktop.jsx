import { Highlight } from '@components';
import { AttentionCheck } from '@assets/MedicinePage';
import { Container, List, Option } from './MedicationDisposal.style';

export function MedicationDisposalDesktop() {
  return (
    <Container>
      <div>
        <h2>
          <Highlight>Descarte correto</Highlight> de medicamentos
        </h2>
        <p>Remédios vencidos não podem ser jogados no lixo comum, por isso:</p>
        <List>
          <Option>
            <img alt="AttentionCheck-svg" src={AttentionCheck}></img>
            <p>
              Pesquise quais farmácias do seu bairro coletam medicamentos
              vencidos.
            </p>
          </Option>
          <Option>
            <img alt="AttentionCheck-svg" src={AttentionCheck}></img>
            <p>Contate a Vigilância Sanitária da sua região.</p>
          </Option>
          <Option>
            <img alt="AttentionCheck-svg" src={AttentionCheck}></img>
            <p>
              Confira nos sites da Anvisa, Roche e Logmed se há pontos de
              descarte na sua cidade.
            </p>
          </Option>
        </List>
      </div>
    </Container>
  );
}
