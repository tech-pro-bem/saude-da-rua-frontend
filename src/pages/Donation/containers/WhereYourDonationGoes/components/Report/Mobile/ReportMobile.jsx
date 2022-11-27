import { VectorDown, VectorUp } from '@assets/donationPage';
import { useState } from 'react';
import {
  OtherReport,
  Container,
  Title,
  LoadP,
  OlderReports,
  ReportBox,
} from './ReportMobile.style';

const ReportMobile = () => {
  const Reports = [
    {
      year: 2022,
      link: '',
    },
    {
      year: 2021,
      link: '',
    },
    {
      year: 2020,
      link: '',
    },
  ];
  const [isReportOpen, setisReportOpen] = useState(false);
  return (
    <Container>
      <ReportBox>
        <Title>Relatório anual {Reports[0].year},</Title>
        <LoadP>baixe aqui</LoadP>
      </ReportBox>
      <ReportBox>
        <Title>Relatório anual {Reports[1].year},</Title>
        <LoadP>baixe aqui</LoadP>
      </ReportBox>
      <OtherReport>
        <Title>Outros Relatórios</Title>
        <img
          onClick={() => setisReportOpen(!isReportOpen)}
          src={isReportOpen ? VectorUp : VectorDown}
          alt="icon-up-down"
        ></img>
      </OtherReport>
      {isReportOpen ? (
        <OlderReports>
          <ReportBox>
            <Title>Relatório anual {Reports[2].year}, </Title>
            <LoadP>baixe aqui</LoadP>
          </ReportBox>
        </OlderReports>
      ) : null}
    </Container>
  );
};

export default ReportMobile;
