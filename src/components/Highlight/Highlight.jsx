import styled from 'styled-components';

const Highlight = styled.span`
  color: ${(props) => props.theme.colors.primary};

  @media screen and (max-width: 520px) {
    text-decoration: none !important;
    font-weight: 700;
  }
`;

export default Highlight;
