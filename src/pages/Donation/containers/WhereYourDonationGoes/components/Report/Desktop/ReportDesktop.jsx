import { VectorDown, VectorUp } from '@assets/donationPage';
import { PhotosWrapper } from './../../index';
import { useState } from 'react';
import {
  OtherReport,
  Container,
  Title,
  LoadP,
  OlderReports,
  ReportWrapper,
} from './ReportDesktop.style';

const ReportDesktop = () => {
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
      <ReportWrapper>
        <Title>Relatório anual {Reports[0].year}</Title>
        <LoadP>baixe aqui</LoadP>
        <Title>Relatório anual {Reports[1].year}</Title>
        <LoadP>baixe aqui</LoadP>
        <OtherReport>
          <Title>Outros Relatórios</Title>
          <img
            onClick={() => setisReportOpen(!isReportOpen)}
            src={isReportOpen ? VectorUp : VectorDown}
            alt="icon"
          ></img>
        </OtherReport>
        {isReportOpen ? (
          <OlderReports>
            <Title>Relatório anual {Reports[2].year}</Title>
            <LoadP>baixe aqui</LoadP>
          </OlderReports>
        ) : null}
      </ReportWrapper>
      <PhotosWrapper />
    </Container>
  );
};

export default ReportDesktop;
