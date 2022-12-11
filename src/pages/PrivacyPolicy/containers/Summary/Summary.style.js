import styled from 'styled-components';

export const Navigation = styled.nav`
  position: sticky;
  top: 93px;
  max-height: calc(100vh - 80px);
  overflow-y: scroll;
  margin-right: 90px;

  ::-webkit-scrollbar {
    width: 1px;
  }
  ul {
    list-style: none;
    margin-top: 70px;
  }
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #fff !important;
  font-weight: 700 !important;
  font-family: 'Poppins', sans-serif;

  &:hover {
    color: ${(props) => props.theme.colors.light} !important;
  }

  &.active {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
    text-decoration-color: ${(props) => props.theme.colors.dark};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const List = styled.li`
  margin-bottom: 16px;
  width: 366px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;
