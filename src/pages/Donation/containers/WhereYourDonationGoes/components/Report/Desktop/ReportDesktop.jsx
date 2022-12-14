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
  LoadA,
} from './ReportDesktop.style';

const ReportDesktop = ({ reportsApi }) => {
  const [isReportOpen, setisReportOpen] = useState(false);
  const [currentYearData, setcurrentYearData] = useState();
  const [lastYearData, setLastYearData] = useState();
  const [olderReportsData, setOlderReportsData] = useState();
  useEffect(() => {
    catchReportData(reportsApi);
  }, [reportsApi]);

  async function catchReportData(reportsApi) {
    setcurrentYearData(reportsApi[2]);
    setLastYearData(reportsApi[1]);
    if (reportsApi.length > 2) {
      setOlderReportsData(reportsApi[0]);
    }
  }
  return (
    <Container>
      <ReportWrapper>
        <Title>Relatório anual 2022</Title>
        <LoadP>
          <LoadA download={`Relatório anual 2022`} href={currentYearData?.url}>
            baixe aqui
          </LoadA>
        </LoadP>
        <Title>Relatório anual 2021</Title>
        <LoadP>
          <LoadA download={`Relatório anual 2021`} href={lastYearData?.url}>
            baixe aqui
          </LoadA>
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
              <LoadA
                download={`Relatório anual 2020`}
                href={olderReportsData?.url}
              >
                baixe aqui
              </LoadA>
            </LoadP>
          </OlderReports>
        ) : null}
      </ReportWrapper>
      <PhotosWrapper />
    </Container>
  );
};

export default ReportDesktop;
