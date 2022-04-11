import { useState } from 'react';
import {
  Container,
  HelpOption,
  HelpOptionsContainer,
  HelpInfoContainer,
  ChipsContainer,
  PIXDonationContainer,
  PIXInstructionsContainer,
} from './HelpNow.style';
import { Highlight, Chip, OutlinedImage } from '../../../../shared/components';
import qrCodes from '../../../../assets/qr-codes';

const HelpNow = () => {
  const defaultSelection = {
    key: 0,
    displayValue: 'Qualquer valor',
    value: null,
    qrCode: null,
  };

  const values = [
    { key: 1, displayValue: 'R$ 15', value: 15, qrCode: 'BRL15' },
    { key: 2, displayValue: 'R$ 30', value: 30, qrCode: 'BRL30' },
    { key: 3, displayValue: 'R$ 50', value: 50, qrCode: 'BRL50' },
    { key: 4, displayValue: 'R$ 100', value: 100, qrCode: 'BRL100' },
    { key: 5, displayValue: 'R$ 200', value: 200, qrCode: 'BRL200' },
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
            key={v.key}
            width="140px"
            height="59px"
            padding="16px 47px"
            onClick={() => handleSelection(v)}
            selected={selectedValue.key === v.key}
          >
            {v.displayValue}
          </Chip>
        ))}
      </ChipsContainer>
      {selectedValue.key === defaultSelection.key ? (
        <HelpInfoContainer>
          <p className="big" style={{ fontWeight: 'bold' }}>
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
                <strong>financeiro.saudedarua@gmail.com</strong> indicando o
                valor da doação.
              </p>
              <p>Iremos te responder com o boleto para pagamento!</p>
            </HelpOption>
          </HelpOptionsContainer>
        </HelpInfoContainer>
      ) : (
        <PIXDonationContainer>
          <PIXInstructionsContainer>
            <p style={{ fontWeight: 'bold' }} className="big">
              Para <Highlight>ajudar</Highlight> com{' '}
              {selectedValue.displayValue} é fácil:
            </p>
            <ul>
              <li>Abra a seção de PIX/QR Code no app do seu banco;</li>
              <li>Aponte a câmera do seu celular para o QR Code;</li>
              <li>Confirme o valor</li>
            </ul>
            <p>Destinatário: Gustavo Zaborowsky Graicer</p>
          </PIXInstructionsContainer>
          <div>
            <OutlinedImage
              width="160px"
              height="160px"
              borderWidth="4px"
              topOffset="-12px"
              leftOffset="-12px"
              rightOffset="-12px"
              bottomOffset="-12px"
              src={qrCodes[selectedValue.qrCode]}
              alt={`QR Code para doar ${selectedValue.value}`}
            />
          </div>
        </PIXDonationContainer>
      )}
      <p>
        Obrigado por acreditar em nós.{' '}
        <Highlight>Juntos faremos a diferença!</Highlight>
      </p>
    </Container>
  );
};

export default HelpNow;
