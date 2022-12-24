import { VectorDown, VectorUp } from '@assets/donationPage';
import { PhotosWrapper } from './../../index';
import { useState } from 'react';
import {
  OtherReport,
  Container,
  Title,
  OlderReports,
  ReportWrapper,
} from './ReportDesktop.style';
import ReportItem from './ReportItemDesktop';

const ReportDesktop = ({ reports }) => {
  const [isReportOpen, setisReportOpen] = useState(false);

  return (
    <Container>
      <ReportWrapper>
        {reports.slice(0, 2).map((report) => (
          <ReportItem key={report.id} {...report} />
        ))}

        {reports.length > 2 && (
          <>
            <OtherReport onClick={() => setisReportOpen(!isReportOpen)}>
              <Title>Outros Relatórios</Title>
              <img src={isReportOpen ? VectorUp : VectorDown} alt="icon" />
            </OtherReport>

            {isReportOpen ? (
              <OlderReports>
                {reports.slice(2).map((report) => (
                  <ReportItem key={report.id} {...report} />
                ))}
              </OlderReports>
            ) : null}
          </>
        )}
      </ReportWrapper>
      <PhotosWrapper />
    </Container>
  );
};

export default ReportDesktop;
