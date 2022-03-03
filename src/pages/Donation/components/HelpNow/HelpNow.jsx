import { useState } from 'react';
import {
  Container,
  HelpOption,
  HelpOptionsContainer,
  HelpInfoContainer,
  ChipsContainer,
} from './HelpNow.style';
import { Highlight, Chip } from '../../../../shared/components';

const HelpNow = () => {
  const defaultSelection = 'Qualquer valor';
  const values = [
    'R$ 15',
    'R$ 30',
    'R$ 50',
    'R$ 100',
    'R$ 200',
    defaultSelection,
  ];
  const [selectedValue, setSelectedValue] = useState(defaultSelection);

  const handleSelection = (value) => {
    setSelectedValue(value);
  };

  return (
    <Container>
      <h1>
        <Highlight>Ajude</Highlight> agora mesmo
      </h1>
      <ChipsContainer>
        {values.map((v) => (
          <Chip
            key={v}
            onClick={() => handleSelection(v)}
            selected={selectedValue === v}
          >
            {v}
          </Chip>
        ))}
      </ChipsContainer>
      <HelpInfoContainer>
        <p style={{ fontWeight: 'bold' }}>
          Para <Highlight>ajudar</Highlight> com qualquer valor é fácil:
        </p>
        <HelpOptionsContainer>
          <HelpOption>
            <strong>
              <Highlight>Pix</Highlight>
            </strong>
            <p>A nossa chave pix é:</p>
            <p>443.198.918-80</p>
          </HelpOption>
          <HelpOption>
            <strong>
              <Highlight>Transferência bancária</Highlight>
            </strong>
            <p>Banco Nu Pagamentos S.A</p>
            <p>Agência 0001</p>
            <p>Conta 20718046-2</p>
            <p>Nome: Gustavo Zaborowsky Graicer</p>
          </HelpOption>
          <HelpOption>
            <strong>
              <Highlight>Boleto bancário</Highlight>
            </strong>
            <p>
              Envie um e-mail para{' '}
              <strong>financeiro.saudedarua@gmail.com</strong> indicando o valor
              da doação.
            </p>
            <p>Iremos te responder com o boleto para pagamento!</p>
          </HelpOption>
        </HelpOptionsContainer>
      </HelpInfoContainer>
      <p>
        Obrigado por acreditar em nós.{' '}
        <Highlight>Juntos faremos a diferença!</Highlight>
      </p>
    </Container>
  );
};

export default HelpNow;
