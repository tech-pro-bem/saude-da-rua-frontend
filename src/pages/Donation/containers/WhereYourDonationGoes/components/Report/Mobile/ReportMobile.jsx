import { VectorDown, VectorUp } from '@assets/donationPage';
import { useState } from 'react';
import {
  OtherReport,
  Container,
  Title,
  OlderReports,
} from './ReportMobile.style';
import ReportItem from './ReportItemMobile';

const ReportMobile = ({ reports }) => {
  const [isReportOpen, setisReportOpen] = useState(false);

  return (
    <Container>
      {reports.slice(0, 2).map((report) => (
        <ReportItem key={report.id} {...report} />
      ))}

      {reports.length > 2 && (
        <>
          <OtherReport onClick={() => setisReportOpen(!isReportOpen)}>
            <Title>Outros Relatórios</Title>
            <img
              src={isReportOpen ? VectorUp : VectorDown}
              alt="icon-up-down"
            />
          </OtherReport>

          {isReportOpen
            ? reports.slice(2).map((report) => (
                <OlderReports key={report.id}>
                  <ReportItem {...report} />
                </OlderReports>
              ))
            : null}
        </>
      )}
    </Container>
  );
};

export default ReportMobile;
