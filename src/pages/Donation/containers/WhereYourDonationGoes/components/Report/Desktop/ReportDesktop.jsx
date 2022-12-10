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

const ReportDesktop = ({ reports }) => {
  const [isReportOpen, setisReportOpen] = useState(false);
  return (
    <Container>
      <ReportWrapper>
        <Title>Relatório anual 2022</Title>
        <LoadP>
          <a
            href="https://saudedarua-aodskodkqwd.s3-sa-east-1.amazonaws.com/55a11174-a27d-4158-abda-27e3d8681438"
            download={`Relatório anual 2022`}
          >
            baixe aqui
          </a>
        </LoadP>
        <Title>Relatório anual 2021</Title>
        <LoadP>
          <a
            href="https://saudedarua-aodskodkqwd.s3-sa-east-1.amazonaws.com/55a11174-a27d-4158-abda-27e3d8681438"
            download={`Relatório anual 2021`}
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
            <Title>Relatório anual 2020</Title>
            <LoadP>
              <a
                href="https://saudedarua-aodskodkqwd.s3-sa-east-1.amazonaws.com/55a11174-a27d-4158-abda-27e3d8681438"
                download={`Relatório anual 2020`}
              >
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
