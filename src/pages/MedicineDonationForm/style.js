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

  &[disabled] {
    cursor: not-allowed;
    background: ${(props) => props.theme.colors.border_input};
  }

  @media screen and (min-width: 415px) {
    margin-bottom: 94px;
    max-width: 368px;
  }
`;

export const AddMedicineButton = styled.button`
  width: 100%;
  height: 59px;
  margin: 0 auto;
  margin-bottom: 2.375rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 100px;
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &[disabled] {
    cursor: not-allowed;
    background: ${(props) => props.theme.colors.border_input};
  }

  @media screen and (min-width: 415px) {
    margin-bottom: 2.5rem;
    max-width: 368px;
  }
`;
