import { VectorDown, VectorUp } from '@assets/donationPage';
import { useEffect, useState } from 'react';
import {
  OtherReport,
  Container,
  Title,
  LoadP,
  OlderReports,
  ReportBox,
  LoadA,
} from './ReportMobile.style';

const ReportMobile = ({ reportsApi }) => {
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
      {currentYearData ? (
        <ReportBox>
          <Title>Relatório anual 2022,</Title>
          <LoadP>
            <LoadA
              download={`Relatório anual 2022`}
              href={currentYearData?.url}
            >
              baixe aqui
            </LoadA>
          </LoadP>
        </ReportBox>
      ) : null}
      {lastYearData ? (
        <ReportBox>
          <Title>Relatório anual 2021, </Title>
          <LoadP>
            <LoadA download={`Relatório anual 2021`} href={lastYearData?.url}>
              baixe aqui
            </LoadA>
          </LoadP>
        </ReportBox>
      ) : null}
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
            <Title>Relatório anual 2020, </Title>
            <LoadP>
              <LoadA
                download={`Relatório anual 2020`}
                href={olderReportsData?.url}
              >
                baixe aqui
              </LoadA>
            </LoadP>
          </ReportBox>
        </OlderReports>
      ) : null}
    </Container>
  );
};

export default ReportMobile;
