// import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Highlight } from '@components';
import { ReportDesktop, ReportMobile } from './components';
import { useMedia } from '@hooks';
import { Container, Reports, StyledP } from './WhereYourDonationGoes.style';
import { getReports } from '@shared/services';

const WhereYourDonationGoes = () => {
  const mobile = useMedia('(max-width: 960px)');

  const { data: reports } = useQuery('api/reports', () => getReports(10), {
    placeholderData: [],
  });

  return (
    <Container>
      <h1>
        Pra onde vai {mobile ? <br /> : ''}sua <Highlight>doação</Highlight>
      </h1>
      <StyledP>
        Prezamos pela transparência no nosso trabalho, por isso disponibilizamos
        à comunidade relatórios detalhados sobre como e onde foram aplicados os
        valores recebidos em doações.
      </StyledP>
      <Reports>
        {mobile ? (
          <ReportMobile reports={reports} />
        ) : (
          <ReportDesktop reports={reports} />
        )}
      </Reports>
    </Container>
  );
};

export default WhereYourDonationGoes;
