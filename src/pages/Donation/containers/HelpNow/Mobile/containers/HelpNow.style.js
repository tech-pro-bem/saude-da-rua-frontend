import styled from 'styled-components';

export const HelpContainer = styled.section`
  div {
    margin-bottom: 2rem;
  }
  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 24px;
    color: #0095f6;
  }

  ol,
  ul {
    padding: 0 1rem;
    li {
      margin: 1rem 0;
      font-size: 1rem;
      color: white;
      line-height: 24px;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
export const ClipBoardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  border: 2px solid #0095f6;
  padding: none;
  margin: none;
  border-radius: 4px;

  input {
    border: none;
    background: transparent;
    color: white;
    padding: 1rem;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 21px;
    display: block;
    width: 100%;
  }
  button {
    color: white;
    height: 60px;
    cursor: pointer;
    border: none;
    background: #0095f6;
    outline: none;
  }
`;
