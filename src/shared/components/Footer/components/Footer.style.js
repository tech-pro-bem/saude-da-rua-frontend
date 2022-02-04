import styled from 'styled-components';

export const Container = styled.div`
  * {
    color: ${(props) => props.theme.colors.primary_light};
  }

  .ft-main {
    display: flex;
    margin-bottom: 7.5rem;
  }

  hr {
    margin-bottom: 3.75rem;
    border: #e9e9e9 solid 0.0625rem;
    width: 73.12rem;
    margin: 0 auto;
  }

  .ft-title,
  .ft-title3 {
    margin-top: 3.75rem;
    margin-left: 8.5rem;
    margin-bottom: 2.31rem;
  }

  .ft-title3 {
    margin-left: 8.5rem;
  }

  .ft-legal-list {
    display: flex;
    list-style-type: none;
    justify-content: center;
  }

  .ft-legal-list > li {
    margin-right: 2.5rem;
    margin-bottom: 1.56rem;
  }

  .locations,
  .midia,
  p {
    margin-left: 8.62rem;
  }

  ul {
    list-style-type: none;
  }

  .logo {
    margin-top: 0.62rem;
    margin-right: 1.25rem;
  }
`;
