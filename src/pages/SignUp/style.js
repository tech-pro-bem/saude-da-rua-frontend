import styled from 'styled-components';

export const SubmitStyle = styled.input`
  width: 100%;
  height: 59px;
  margin: 0 auto;
  margin-bottom: 60px;
  border: 0;
  border-radius: 100px;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 94px;
    max-width: 275px;
  }
`;
