import { Highlight } from '@components';
import { ReportDesktop, ReportMobile } from './components';
import { useMedia } from '@hooks';
import { Container, Reports, StyledP } from './WhereYourDonationGoes.style';
import api from './../../../../services/api';
import { useEffect, useState } from 'react';

const WhereYourDonationGoes = () => {
  const mobile = useMedia('(max-width: 960px)');
  const [reportsApi, setReportsApi] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  async function fetchReports() {
    try {
      const { data } = await api.get(`/file/PDF?limit=5`);
      setReportsApi(data);
    } catch (e) {
      console.log(e);
    }
  }

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
          <ReportMobile reportsApi={reportsApi} />
        ) : (
          <ReportDesktop reportsApi={reportsApi} />
        )}
      </Reports>
    </Container>
  );
};

export default WhereYourDonationGoes;
