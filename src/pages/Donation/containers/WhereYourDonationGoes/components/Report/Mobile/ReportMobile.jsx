import { VectorDown, VectorUp } from '@assets/donationPage';
import { useEffect, useState } from 'react';
import {
  OtherReport,
  Container,
  Title,
  LoadP,
  OlderReports,
  ReportBox,
} from './ReportMobile.style';

const ReportMobile = ({ reportsApi }) => {
  const [isReportOpen, setisReportOpen] = useState(false);
  const [currentYearData, setcurrentYearData] = useState();
  const [lastYearData, setLastYearData] = useState();
  const [olderReportsData, setOlderReportsData] = useState();
  // alterar os reports para reportsApi
  const reports = [
    {
      id: '55a11174-a27d-4158-abda-27e3d8681438',
      fileType: 'PDF',
      url: 'https://saudedarua-aodskodkqwd.s3-sa-east-1.amazonaws.com/55a11174-a27d-4158-abda-27e3d8681438',
      name: '2022',
      createdAt: '2022-12-08T22:50:46.865Z',
    },
    {
      id: '55a11174-a27d-4158-abda-27e3d8681438',
      fileType: 'PDF',
      url: 'https://saudedarua-aodskodkqwd.s3-sa-east-1.amazonaws.com/55a11174-a27d-4158-abda-27e3d8681438',
      name: '2021',
      createdAt: '2022-12-08T22:50:46.865Z',
    },
    {
      id: '55a11174-a27d-4158-abda-27e3d8681438',
      fileType: 'PDF',
      url: 'https://saudedarua-aodskodkqwd.s3-sa-east-1.amazonaws.com/55a11174-a27d-4158-abda-27e3d8681438',
      name: '2020',
      createdAt: '2022-12-08T22:50:46.865Z',
    },
    {
      id: '55a11174-a27d-4158-abda-27e3d8681438',
      fileType: 'PDF',
      url: 'https://saudedarua-aodskodkqwd.s3-sa-east-1.amazonaws.com/55a11174-a27d-4158-abda-27e3d8681438',
      name: '2019',
      createdAt: '2022-12-08T22:50:46.865Z',
    },
  ];

  useEffect(() => {
    catchReportData(reports);
  }, []);

  function catchReportData(reports) {
    const currentYear = reports.filter(
      (report) => report?.name === `${new Date().getFullYear()}`
    );
    const lastYear = reports.filter(
      (report) => report?.name === `${new Date().getFullYear() - 1}`
    );
    const olderYears = reports.filter(
      (report) =>
        report?.name !== `${new Date().getFullYear()}` &&
        report.name !== `${new Date().getFullYear() - 1}`
    );

    setcurrentYearData(currentYear);
    setLastYearData(lastYear);
    setOlderReportsData(olderYears);
    console.log(currentYear);
  }
  return (
    <Container>
      {currentYearData.length !== 0 ? (
        <ReportBox>
          <Title>Relatório anual {currentYearData[0]?.name},</Title>
          <LoadP>
            <a
              href={currentYearData[0]?.url}
              download={`Relatório anual ${currentYearData[0]?.name}}`}
            >
              baixe aqui
            </a>
          </LoadP>
        </ReportBox>
      ) : null}
      {lastYearData.length !== 0 ? (
        <ReportBox>
          <Title>Relatório anual {lastYearData[0]?.name},</Title>
          <LoadP>
            <a
              href={lastYearData[0]?.url}
              download={`Relatório anual ${lastYearData[0]?.name}`}
            >
              baixe aqui
            </a>
          </LoadP>
        </ReportBox>
      ) : null}
      {reports.length > 2 ? (
        <OtherReport>
          <Title>Outros Relatórios</Title>
          <img
            onClick={() => setisReportOpen(!isReportOpen)}
            src={isReportOpen ? VectorUp : VectorDown}
            alt="icon-up-down"
          ></img>
        </OtherReport>
      ) : null}
      {isReportOpen ? (
        <OlderReports>
          {olderReportsData && reports.length > 2
            ? olderReportsData.map((report, index) => {
                return (
                  <ReportBox key={index}>
                    <Title>Relatório anual {report.name} , </Title>
                    <LoadP>
                      <a
                        href={report.url}
                        download={`Relatório anual ${report.name}`}
                      >
                        baixe aqui
                      </a>
                    </LoadP>
                  </ReportBox>
                );
              })
            : null}
        </OlderReports>
      ) : null}
    </Container>
  );
};

export default ReportMobile;
