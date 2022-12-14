import { VectorDown, VectorUp } from '@assets/donationPage';
import { PhotosWrapper } from './../../index';
import { useEffect, useState } from 'react';
import {
  OtherReport,
  Container,
  Title,
  LoadP,
  OlderReports,
  ReportWrapper,
} from './ReportDesktop.style';

const ReportDesktop = ({ reportsApi }) => {
  const [isReportOpen, setisReportOpen] = useState(false);
  const [currentYearData, setcurrentYearData] = useState();
  const [lastYearData, setLastYearData] = useState();
  const [olderReportsData, setOlderReportsData] = useState();

  //TO DO:apagar reports
  const reports = [
    {
      id: 'f13d42a0-7afb-4bc8-872e-5408dd857c69',
      fileType: 'PDF',
      url: 'https://saudedarua-aodskodkqwd.s3-sa-east-1.amazonaws.com/f13d42a0-7afb-4bc8-872e-5408dd857c69',
      name: 'Relatório 2023',
      createdAt: '2022-12-12T23:37:55.455Z',
    },
    {
      id: 'f2808675-c858-48fe-80df-e6e32c2d25bf',
      fileType: 'PDF',
      url: 'https://saudedarua-aodskodkqwd.s3-sa-east-1.amazonaws.com/f2808675-c858-48fe-80df-e6e32c2d25bf',
      name: 'Relatório 2022',
      createdAt: '2022-12-12T23:36:25.469Z',
    },
    {
      id: 'f2808675-c858-48fe-80df-e6e32c2d25bf',
      fileType: 'PDF',
      url: 'https://saudedarua-aodskodkqwd.s3-sa-east-1.amazonaws.com/f2808675-c858-48fe-80df-e6e32c2d25bf',
      name: 'Relatório 2021',
      createdAt: '2022-12-12T23:36:25.469Z',
    },
  ];

  //TO DO: substituir pelo reportsApi
  useEffect(() => {
    catchReportData(reports);
  }, [reportsApi]);

  async function catchReportData(reportsApi) {
    setcurrentYearData(reportsApi[0]);
    setLastYearData(reportsApi[1]);
    if (reportsApi.length > 2) {
      setOlderReportsData(reportsApi[2]);
    }
  }
  return (
    <Container>
      <ReportWrapper>
        <Title>Relatório anual 2022</Title>
        <LoadP>
          <a download={`Relatório anual 2022`} href={currentYearData?.url}>
            baixe aqui
          </a>
        </LoadP>
        <Title>Relatório anual 2021</Title>
        <LoadP>
          <a download={`Relatório anual 2021`} href={lastYearData?.url}>
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
            <Title>Relatório anual 2020</Title>
            <LoadP>
              <a download={`Relatório anual 2020`} href={olderReportsData?.url}>
                baixe aqui
              </a>
            </LoadP>
          </OlderReports>
        ) : null}
      </ReportWrapper>
      <PhotosWrapper />
    </Container>
  );
};

export default ReportDesktop;
