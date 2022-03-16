import styled from 'styled-components';

export const Contacts = styled.div`
  * {
    color: ${(props) => props.theme.colors.primary_light};
  }

  h2 {
    font-size: 24px;
  }

  .ft-main {
    display: flex;
    justify-content: center;
    margin-bottom: 6.5rem;
    margin-top: 3.75rem;
  }

  .ft-main-item-one {
    margin-right: 100px;
    width: 100%;
    max-width: 470px;
  }

  .ft-main-item-two {
    margin-right: 100px;
  }

  .ft-titleThree {
    text-decoration: none;
  }

  .midia {
    text-decoration: underline;
  }

  .ft-titleOne,
  .ft-titleTwo,
  .ft-titleThree {
    margin-bottom: 36px;
  }

  hr {
    margin-bottom: 3.75rem;
    border: #e9e9e9 solid 0.0625rem;
    width: 1170px;
    margin: 0 auto;
  }

  .ft-legal-list {
    display: flex;
    justify-content: center;
  }

  .ft-legal-list > li {
    margin-right: 2.5rem;
    margin-bottom: 1.56rem;
  }

  ul {
    list-style-type: none;
  }

  .logo {
    margin-right: 1.25rem;
    vertical-align: middle;
  }

  .midia > li {
    margin-bottom: 1.375rem;
  }
`;
