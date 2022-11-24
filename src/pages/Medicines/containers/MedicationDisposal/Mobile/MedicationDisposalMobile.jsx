import { Highlight } from '@components';
import { AttentionCheck } from '@assets/MedicinePage';
import {
  Container,
  List,
  Option,
  Link,
} from './MedicationDisposalMobile.style';

export function MedicationDisposalMobile() {
  return (
    <Container>
      <div>
        <h2>
          <Highlight>Descarte correto</Highlight>
          <br /> de medicamentos
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
              Confira nos sites da
              <Link
                href="http://antigo.anvisa.gov.br/"
                target="_blank"
                rel="noreferrer"
              >
                Anvisa
              </Link>
              ,
              <Link
                href="https://www.roche.com.br/pt/por-dentro-da-roche/descartes-de-medicamentos.html?cid=googlesearch=institucional-alwayson-roche_institucional_descartemedicamentos_search&gclid=EAIaIQobChMI3afgv7je-gIVEDSRCh2WUA-tEAAYASAAEgJIp_D_BwE"
                target="_blank"
                rel="noreferrer"
              >
                Roche
              </Link>
              e
              <Link
                href="https://www.logmed.org.br/"
                target="_blank"
                rel="noreferrer"
              >
                Logmed
              </Link>
              se há pontos de descarte na sua cidade.
            </p>
          </Option>
        </List>
      </div>
    </Container>
  );
}
