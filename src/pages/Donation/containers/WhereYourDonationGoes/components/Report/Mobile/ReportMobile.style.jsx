import styled from 'styled-components';

export const Container = styled.div``;
export const ReportBox = styled.div`
  display: flex;
`;

export const Title = styled.p`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
`;
export const LoadP = styled.div`
  margin: 0px 0px 24px 5px;
  width: 85px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 2px solid ${(props) => props.theme.colors.dark};
`;

export const OtherReport = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  img {
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

export const OlderReports = styled.div`
  margin-top: 20px;
  :nth-child(1) {
    margin-bottom: 0px;
  }
`;
