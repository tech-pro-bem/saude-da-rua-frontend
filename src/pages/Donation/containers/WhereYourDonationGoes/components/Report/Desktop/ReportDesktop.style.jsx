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
`;

export const LoadA = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 2px solid ${(props) => props.theme.colors.dark};
`;

export const OtherReport = styled.div`
  display: flex;
  cursor: pointer;
  width: fit-content;
  padding-right: 8px;
  user-select: none;
  img {
    margin-bottom: 10px;
    margin-left: 10px;
  }
`;

export const OlderReports = styled.div`
  margin-top: 22px;
`;
