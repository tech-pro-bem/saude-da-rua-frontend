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
  const lalala = [
    {
      id: '32dbab93-9760-447b-a790-05dbd58a3368',
      fileType: 'PDF',
      name: 'Relatório Financeiro 2022',
      label: '2022',
      url: 'https://saudedarua-aodskodkqwd.s3-sa-east-1.amazonaws.com/32dbab93-9760-447b-a790-05dbd58a3368',
      createdAt: '2022-11-30T22:20:42.138Z',
    },
  ];
  const Reports = [
    {
      year: 2020,
      link: '',
    },
    {
      year: 2021,
      link: '',
    },
    {
      year: 2022,
      link: '',
    },
  ];
  const [isReportOpen, setisReportOpen] = useState(false);
  return (
    <Container>
      <ReportWrapper>
        <Title>Relatório anual {Reports[Reports.length - 1].year}</Title>
        <LoadP>baixe aqui</LoadP>
        <Title>Relatório anual {Reports[Reports.length - 2].year}</Title>
        <LoadP>
          <a
            href="https://saudedarua-aodskodkqwd.s3-sa-east-1.amazonaws.com/55a11174-a27d-4158-abda-27e3d8681438"
            download={`Relatório anual ${Reports[1].year}`}
          >
            baixe aqui
          </a>
        </LoadP>
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
