import styled from 'styled-components';

export const Contacts = styled.div`
  * {
    color: ${(props) => props.theme.colors.primary_light};
    np
  }

  h2 {
    font-size: 24px;
  }

  .ft-main {
    display: flex;
    justify-content: center;
    margin-bottom: 7.5rem;
    margin-top: 3.75rem
  }

  .ft-main-item-one {
    margin-right: 100px;

  }

  .ft-main-item-two{
    margin-right: 100px;
  }

  .ft-main-item-three{
    text-decoration: underline
  }

  .ft-titleOne, .ft-titleTwo, .ft-titleThree {
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
    margin-top: 0.62rem;
    margin-right: 0.5rem;
  }
`;
