import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const ReportWrapper = styled.div`
  width: 40%;
`;

export const Title = styled.p`
  margin-bottom: 10px;
  font-size: 24px;
`;
export const LoadP = styled.div`
  margin-bottom: 24px;
  width: 85px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 2px solid ${(props) => props.theme.colors.dark};
`;

export const OtherReport = styled.div`
  display: flex;
  img {
    margin-bottom: 10px;
    margin-left: 10px;
  }
`;

export const OlderReports = styled.div`
  margin-top: 22px;
`;
