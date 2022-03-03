import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  > p {
    font-weight: bold;
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 64px 0;
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
