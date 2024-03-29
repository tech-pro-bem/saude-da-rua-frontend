import React from 'react';
import { useQuery } from 'react-query';
import { HelpMobileDivision } from './containers/HelpNow.style';
import HelpNowHero from './containers/HelpNowHero';
import HowHelpContent from './containers/HowHelpContent';
import { getPixKey } from '@shared/services';

const HelpInformation = {
  pix: {
    1: 'Copie a chave pix acima',
    2: 'Acesse a área pix no app do seu banco',
    3: 'Digite o valor da doação',
    4: 'Cole a chave pix na área indicada',
    5: 'Confira se o destinatário da conta é Gustavo Zaborowsky Graicer',
    6: 'Confirme todos os dados e faça a sua doação!',
  },
  bank: {
    Banco: 'Nu Pagamentos S.A. (260)',
    Agência: '0001',
    Conta: '20718046-2',
    Nome: 'Gustavo Zaborowsky Graicer',
  },
  boleto: {
    first:
      'Envie um e-mail para <strong>financeiro.saudedarua@gmail.com</strong> indicando o valor da doação;',
    second: 'Aguarde nossa resposta, enviaremos o boleto no valor solicitado.',
  },
};

const HelpNowMobile = () => {
  const { data: pix } = useQuery('pix', () => getPixKey(), {
    placeholderData: { key: '' },
  });

  return (
    <>
      <HelpNowHero />
      <HelpMobileDivision>
        <HowHelpContent
          HelpInformation={{ ...HelpInformation, key: pix.key }}
        />
      </HelpMobileDivision>
    </>
  );
};

export default HelpNowMobile;
