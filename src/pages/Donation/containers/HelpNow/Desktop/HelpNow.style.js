import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-top: 93px;

  > p {
    font-weight: 700;
    font-size: 24px;
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 64px 0;
  gap: 16px;
`;

export const HelpOptionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const HelpOption = styled.div`
  text-align: left;
  padding: 8px;
  max-width: 30%;
`;

export const HelpInfoContainer = styled.div`
  box-sizing: border-box;
  > * {
    margin: 32px 0;
  }
`;

export const PIXDonationContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 24px;
  justify-content: space-around;
`;

export const PIXInstructionsContainer = styled.div`
  text-align: left;

  ul {
    list-style-position: inside;
    margin: 24px 0;
  }

  ul > li {
    color: ${({ theme }) => theme.colors.primary_light};
  }
`;
